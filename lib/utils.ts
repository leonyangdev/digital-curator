const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prepend the base path to a public asset URL.
 * Handles both local dev (no prefix) and GitHub Pages deployment.
 */
export function asset(path: string): string {
  return `${basePath}${path}`;
}
