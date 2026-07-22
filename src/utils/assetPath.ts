export function getAssetPath(path: string): string {
  if (!path) return path;
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath.startsWith('/dfs-version-2')) {
    return cleanPath;
  }
  return `/dfs-version-2${cleanPath}`;
}
