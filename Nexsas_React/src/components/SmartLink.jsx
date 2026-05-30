import { Link } from "react-router-dom";
import { toPath } from "../lib/links";

/**
 * Drop-in replacement for the template's <a href="...html"> links.
 * Internal links become client-side router <Link>s; external links / anchors
 * fall back to a normal <a>.
 */
export default function SmartLink({ href = "#", children, ...rest }) {
  const to = toPath(href);
  const isExternal = /^(https?:|mailto:|tel:)/i.test(to) || to.startsWith("#");

  if (isExternal) {
    return (
      <a href={to} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
}
