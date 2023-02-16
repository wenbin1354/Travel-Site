import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<h1>Welcome to Project One!</h1>
			<Routes>
				<Route path="/" element={<Navbar />}>
					<Route index element={<NoMatch />} />
					<Route path="lodging" element={<NoMatch />} />
					<Route path="restaurants" element={<NoMatch />} />
					<Route path="attractions" element={<NoMatch />} />

					{/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
					<Route path="*" element={<NoMatch />} />
				</Route>
			</Routes>
		</div>
	);
}
function NoMatch() {
	return (
		<div>
			<h2>Nothing to see here!</h2>
			<p>
				<Link to="/">Go to the home page</Link>
			</p>
		</div>
	);
}

export default App;
