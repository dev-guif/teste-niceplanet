import { Link } from "react-router-dom"
import "./Navbar.css"

const navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to='/'>Niceplanet</Link>
        </h2>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
        </ul>
    </nav>
  )
}

export default navbar