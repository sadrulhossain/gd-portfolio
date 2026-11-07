/**
 * Prefixes an absolute path (e.g. "/cv/file.pdf") with the configured BASE_PATH,
 * so links and public/ asset references work both at the site root and under a
 * GitHub Pages subpath like /portfolio/.
 * @param {string} path - Path starting with "/".
 * @returns {string}
 */
export function withBase(path) {
    const base = import.meta.env.BASE_URL.replace(/\/$/, '')
    return `${base}${path}`
}
