import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/home";
import Categories from "./pages/CategoriesPage/categories";
import Guide from "./pages/GuidePage/GuidePage";
import Navbar from "./components/Navbar/Navbar";
import SplineView from "./components/splineView/SplineView";
function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<div className="content">
					<Routes>
						{/* Home Route */}
						<Route path="/" element={<Home />}></Route>
						{/* Categories Route */}
						<Route path="/categories" element={<Categories />}></Route>
						<Route path="/categories/:id/guide" element={<Guide />}></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
