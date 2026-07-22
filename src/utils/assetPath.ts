export function getAssetPath(path: string): string {
  if (!path) return path;
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  if (basePath) {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${basePath}${cleanPath}`;
  }
  // Strip leading slash for relative asset resolution on GitHub Pages
  return path.startsWith('/') ? path.slice(1) : path;
}
