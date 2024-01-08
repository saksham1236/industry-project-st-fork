import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/home";
import Categories from "./pages/CategoriesPage/categories";
import Guide from "./pages/GuidePage/GuidePage";
import Navbar from "./components/Navbar/Navbar";
import SplineView from "./components/splineView/SplineView";
import { useState } from "react";
import About from "./pages/AboutPage/about";
import Resources from "./pages/ResourcesPage/ResourcesPage";

function App() {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<>
			<BrowserRouter>
				<Navbar setSearchQuery={setSearchQuery} />
				<div className="content">
					<Routes>
						{/* Home Route */}
						<Route path="/" element={<Home />}></Route>
						{/* Categories Route */}
						<Route
							path="/categories"
							element={<Categories searchQuery={searchQuery} />}></Route>
						<Route path="/categories/:id/guide" element={<Guide />}></Route>
						<Route path="/about" element={<About />}></Route>
						<Route path="/resources" element={<Resources />}></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
