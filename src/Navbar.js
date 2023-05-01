import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link className="site-title">
        OPTIMUM NUTRITION
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/products">Products</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/contacts">Contacts</CustomLink>
        <CustomLink to="/cart">Cart</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}