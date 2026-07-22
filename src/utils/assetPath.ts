export function getAssetPath(path: string): string {
  if (!path) return path;
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  // Always prefix repository name for GitHub Pages subpath deployment
  return `/dfs-version-2${cleanPath}`;
}
