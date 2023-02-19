import { Outlet, Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
	return (
	  <div>
		<nav>
		  <ul>
			<li>
			  <Link className="nav-button" to="/">Home</Link>
			</li>
			<li>
			  <Link className="nav-button" to="/lodging">Lodging</Link>
			</li>
			<li>
			  <Link className="nav-button" to="/restaurants">Restaurants</Link>
			</li>
			<li>
			  <Link className="nav-button" to="/attractions">Attractions</Link>
			</li>
			<li>
			  <Link className="nav-button" to="/nothing-here">Nothing Here</Link>
			</li>
		  </ul>
		</nav>

		<Outlet />
	  </div>
	);
  }

export default Navbar;