import { Link } from "react-router-dom";
const Header =()=>{
    return (
        <header className="topNav">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
          </Link>
          
          <div className="navbar">
            <form className="d-flex" role="search">
              <select>
                <option>English</option>
                <option>Hindi</option>
              </select>
              <Link to={'/login'}><button className="btn btn-danger">Signin</button></Link>
            </form>
          </div>
        </div>
      </nav>
    </header>
    )
}
export default Header;