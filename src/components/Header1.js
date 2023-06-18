import { Link } from "react-router-dom";
const Header =()=>{
    return (
        <header className="topNav">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
          </Link>
          </div>
      </nav>
    </header>
    )
}
export default Header;