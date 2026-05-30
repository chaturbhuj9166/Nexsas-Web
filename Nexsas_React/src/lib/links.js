/**
 * Maps the original static template hrefs (e.g. "financial-management-platform-about.html")
 * to React Router paths (e.g. "/about"). Keeps external links and anchors untouched so the
 * existing data arrays from the HTML template can be reused as-is.
 */
export function toPath(href) {
  if (!href) return "/";
  // External links, mailto, tel, pure anchors -> leave unchanged
  if (/^(https?:|mailto:|tel:|#)/i.test(href)) return href;

  // Strip query/hash for mapping, then re-attach hash if present
  const [rawPath, hash] = href.split("#");
  let path = rawPath.replace(/\.html$/i, "");

  // Home variants
  if (path === "financial-management-platform" || path === "index" || path === "" || path === "/") {
    return hash ? `/#${hash}` : "/";
  }

  // Strip the common prefix
  path = path.replace(/^financial-management-platform-?/i, "");

  const result = "/" + path;
  return hash ? `${result}#${hash}` : result;
}
