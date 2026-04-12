const AVATAR_API_ROOT = 'http://localhost:8081';

export function resolveAvatarImage(path: string | null | undefined, fallback = ''): string {
  if (!path || !String(path).trim()) {
    return fallback;
  }

  const raw = String(path).trim().replace(/\\/g, '/');

  if (/^(https?:)?\/\//i.test(raw) || raw.startsWith('data:image')) {
    return raw;
  }

  if (raw.startsWith('assets/')) {
    return raw;
  }

  if (raw.startsWith('preset:')) {
    return `assets/img/course-img/${raw.replace('preset:', '')}`;
  }

  if (raw.startsWith('/')) {
    return `${AVATAR_API_ROOT}${raw}`;
  }

  if (raw.startsWith('api/')) {
    return `${AVATAR_API_ROOT}/${raw}`;
  }

  if (raw.includes('/')) {
    return `${AVATAR_API_ROOT}/${raw}`;
  }

  return `${AVATAR_API_ROOT}/api/files/${raw}`;
}