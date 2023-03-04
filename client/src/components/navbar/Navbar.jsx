import "./navbar.css"
import {Link} from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
const Navbar = () => {
  const { user, loading}  = useContext(AuthContext)
  return (
    <div className="navbar">
       <div className="navContainer">
        <Link to="/" style={{color:"inherit" , textDecoration: "none"}}>
        <span className="logo">Reservation App</span>
        </Link>
    {
      user ? (    <div className="welcome-name">Welcome {user.email}</div>
      ) : (
        <>
       
        <div className="navItems">
          <button className="navButton">Register</button>
          <Link to="/login"><button className="navButton">Login</button> </Link>
        </div>
        </>
      )
    }
          </div>

    </div>
  )
}

export default Navbar