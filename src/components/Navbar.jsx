import { Outlet, Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	let location = useLocation().pathname;

	return (
		<div>
			<nav>
				<ul>
					<li style={{ marginTop: "-10px" }}>
						<Link className="nav-title" to="/">
							张家界
						</Link>
					</li>
					<li>
						<Link
							className="nav-button"
							to="/"
							style={{ color: location === "/" && "rgb(28, 198, 28)" }}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							className="nav-button"
							to="/lodging"
							style={{ color: location === "/lodging" && "rgb(28, 198, 28)" }}
						>
							Lodging
						</Link>
					</li>
					<li>
						<Link
							className="nav-button"
							to="/foods"
							style={{ color: location === "/foods" && "rgb(28, 198, 28)" }}
						>
							Foods
						</Link>
					</li>
					<li>
						<Link
							className="nav-button"
							to="/attractions"
							style={{
								color: location === "/attractions" && "rgb(28, 198, 28)",
							}}
						>
							Attractions
						</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</div>
	);
}

export default Navbar;
