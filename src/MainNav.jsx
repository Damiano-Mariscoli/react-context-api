import { Link, NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Home Page
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/chi-siamo">
                Chi siamo
              </Link>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/posts">
                Posts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default MainNav;
