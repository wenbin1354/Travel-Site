import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LodgingPage from "./pages/LodgingPage";
import FoodPage from "./pages/FoodPage";
import AttractionPage from "./pages/AttractionPage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Navbar />}>
					<Route index element={<HomePage />} />
					<Route path="lodging" element={<LodgingPage />} />
					<Route path="foods" element={<FoodPage />} />
					<Route path="attractions" element={<AttractionPage />} />

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
