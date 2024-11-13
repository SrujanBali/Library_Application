import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function ActivePage({ to, children, ...props }) {
    const resolvedpath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedpath.pathname, end: true})
    return (
      <li className={isActive ? "active" : ""  }>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }
  