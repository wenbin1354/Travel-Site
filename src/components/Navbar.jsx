import { Outlet, Link } from "react-router-dom";

const navStyle = {textDecoration: "none", color: "blue"};
function Navbar() {
	return (
	  <div>
		<nav>
		  <ul>
			<li>
			  <Link style={navStyle}to="/">Home</Link>
			</li>
			<li>
			  <Link style={navStyle} to="/lodging">Lodging</Link>
			</li>
			<li>
			  <Link style={navStyle} to="/restaurants">Restaurants</Link>
			</li>
			<li>
			  <Link style={navStyle} to="/attractions">Attractions</Link>
			</li>
			<li>
			  <Link style={navStyle} to="/nothing-here">Nothing Here</Link>
			</li>
		  </ul>
		</nav>

		<Outlet />
	  </div>
	);
  }

export default Navbar;