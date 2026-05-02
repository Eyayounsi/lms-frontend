export function resolveAvatarImage(path: string | null | undefined, fallback = ''): string {
  if (!path || !String(path).trim()) {
    return fallback;
  }

  const raw = String(path).trim().replace(/\\/g, '/');

  if (raw.startsWith('data:image')) {
    return raw;
  }

  // Full URLs: strip localhost/dev origins so proxy handles it
  if (/^(https?:)?\/\//i.test(raw)) {
    const stripped = stripAvatarLocalhostOrigin(raw);
    if (stripped !== raw) {
      return resolveAvatarImage(stripped, fallback);
    }
    return raw;
  }

  if (raw.startsWith('assets/')) {
    return raw;
  }

  if (raw.startsWith('preset:')) {
    return `assets/img/course-img/${raw.replace('preset:', '')}`;
  }

  // Absolute paths containing /uploads/ (e.g. Windows paths or legacy records)
  const uploadsIdx = raw.toLowerCase().indexOf('/uploads/');
  if (uploadsIdx > 0) {
    const suffix = raw.substring(uploadsIdx + '/uploads/'.length);
    return `/uploads/${suffix}`;
  }
  const uploadsIdx2 = raw.toLowerCase().indexOf('uploads/');
  if (uploadsIdx2 > 0) {
    const suffix = raw.substring(uploadsIdx2 + 'uploads/'.length);
    return `/uploads/${suffix}`;
  }

  if (raw.startsWith('/')) {
    return raw;
  }

  if (raw.startsWith('api/')) {
    return `/${raw}`;
  }

  // Sub-directory paths like "avatars/abc.jpg" or "covers/abc.jpg"
  if (/^(avatars|covers|pdfs|videos)\//i.test(raw)) {
    return `/uploads/${raw}`;
  }

  if (raw.includes('/')) {
    return `/${raw}`;
  }

  return `/api/files/${raw}`;
}

/**
 * Strip localhost / dev-machine origins so the path works through
 * the nginx proxy (Docker) or Angular dev proxy.
 */
function stripAvatarLocalhostOrigin(url: string): string {
  try {
    const u = new URL(url.startsWith('//') ? 'http:' + url : url);
    const host = u.hostname;
    if (host === 'localhost' || host === '127.0.0.1' || /^192\.168\.\d+\.\d+$/.test(host) || /^10\.\d+\.\d+\.\d+$/.test(host) || /^172\.(1[6-9]|2\d|3[01])\.\d+\.\d+$/.test(host)) {
      return u.pathname + u.search;
    }
  } catch {
    // Not a valid URL
  }
  return url;
}