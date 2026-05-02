export function resolveCourseImage(path: string | null | undefined, fallback = 'assets/img/course-img/courses-01.jpg'): string {
  const normalized = sanitizePath(path);

  if (!normalized) return fallback;

  // data: URIs are always returned as-is
  if (normalized.startsWith('data:image/')) {
    return normalized;
  }

  // Full URLs (http/https): strip localhost/IP origin so nginx proxy handles it
  if (normalized.startsWith('http://') || normalized.startsWith('https://')) {
    const stripped = stripLocalhostOrigin(normalized);
    if (stripped !== normalized) {
      // Re-process the path-only result
      return resolveCourseImage(stripped, fallback);
    }
    // External URL (e.g. Unsplash) — return as-is
    return normalized;
  }

  if (normalized.startsWith('assets/')) {
    return normalized;
  }

  if (normalized.startsWith('preset:')) {
    const presetName = normalizeLegacyPresetFileName(normalized.replace('preset:', '').trim());
    return resolveAssetPresetImage(presetName);
  }

  const lower = normalized.toLowerCase();

  // Legacy absolute paths may include /uploads/... somewhere in the middle
  const uploadsWithSlashIndex = lower.indexOf('/uploads/');
  if (uploadsWithSlashIndex > 0) {
    const suffix = normalized.substring(uploadsWithSlashIndex + '/uploads/'.length);
    return `/uploads/${suffix}`;
  }

  // Legacy absolute paths may include uploads/... without leading slash
  const uploadsIndex = lower.indexOf('uploads/');
  if (uploadsIndex > 0) {
    const suffix = normalized.substring(uploadsIndex + 'uploads/'.length);
    return `/uploads/${suffix}`;
  }

  if (!normalized.includes('/')) {
    const fileName = normalizeLegacyPresetFileName(normalized);
    if (/^(course-img|courses-)/i.test(fileName)) {
      return resolveAssetPresetImage(fileName);
    }
  }

  // Legacy records may store only sub-directory paths like "covers/abc.jpg".
  if (/^(covers|videos|pdfs|avatars)\//i.test(normalized)) {
    return `/uploads/${normalized}`;
  }

  // Legacy records may store "uploads/..." without leading slash.
  if (/^uploads\//i.test(normalized)) {
    const suffix = normalized.substring('uploads/'.length);
    return `/uploads/${suffix}`;
  }

  // Legacy records may store "/uploads/..." with wrong casing.
  if (/^\/uploads\//i.test(normalized)) {
    const suffix = normalized.substring('/uploads/'.length);
    return `/uploads/${suffix}`;
  }

  if (normalized.startsWith('/')) {
    return normalized;
  }

  return `/${normalized}`;
}

function normalizeLegacyPresetFileName(name: string): string {
  const trimmed = (name || '').trim();
  const match = trimmed.match(/^course-img-?(\d+)\.(jpg|jpeg|png|webp|svg)$/i);
  if (!match) return trimmed;
  return `course-img${match[1]}.${match[2]}`;
}

function sanitizePath(path: string | null | undefined): string {
  const raw = String(path || '').trim().replace(/\\/g, '/');
  if (!raw) return '';

  // Some payloads contain quoted values: "..." or '...'
  const unquoted = raw.replace(/^['"]+|['"]+$/g, '').trim();
  return unquoted;
}

/**
 * Strip localhost / 127.0.0.1 / known dev origins so the path can be resolved
 * through the nginx proxy (Docker) or the Angular dev proxy (local).
 * e.g. "http://localhost:8083/uploads/covers/a.jpg" → "/uploads/covers/a.jpg"
 */
function stripLocalhostOrigin(url: string): string {
  try {
    const u = new URL(url);
    const host = u.hostname;
    if (host === 'localhost' || host === '127.0.0.1' || /^192\.168\.\d+\.\d+$/.test(host) || /^10\.\d+\.\d+\.\d+$/.test(host) || /^172\.(1[6-9]|2\d|3[01])\.\d+\.\d+$/.test(host)) {
      return u.pathname + u.search;
    }
  } catch {
    // Not a valid URL, return as-is
  }
  return url;
}

function resolveAssetPresetImage(fileName: string): string {
  if (/^course-img/i.test(fileName) || /^courses-/i.test(fileName)) {
    return `assets/img/course-img/${fileName}`;
  }
  return `assets/img/course/${fileName}`;
}
