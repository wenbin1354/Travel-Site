import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	return (
		<div>
			<nav>
				<ul>
					<li style={{marginTop:"-10px"}}>
						<Link className="nav-title" to="/">
							张家界
						</Link>
					</li>
					<li>
						<Link className="nav-button" to="/">
							Home
						</Link>
					</li>
					<li>
						<Link className="nav-button" to="/lodging">
							Lodging
						</Link>
					</li>
					<li>
						<Link className="nav-button" to="/foods">
							Foods
						</Link>
					</li>
					<li>
						<Link className="nav-button" to="/attractions">
							Attractions
						</Link>
					</li>
					<li>
						<Link className="nav-button" to="/nothing-here">
							Nothing Here
						</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</div>
	);
}

export default Navbar;
