import "./Navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import SearchResults from "../SearchResults/SearchResults";
import SplineLogo from "../SplineLogo/SplineView";
import categoryIcon from "../../assets/icons/category_FILL0_wght400_GRAD0_opsz24.svg";
import resourceIcon from "../../assets/icons/crowdsource_FILL0_wght400_GRAD0_opsz24.svg";
import aboutIcon from "../../assets/icons/help_FILL0_wght400_GRAD0_opsz24.svg";
import searchIcon from "../../assets/icons/search_FILL0_wght400_GRAD0_opsz24.svg";
import { ReactSVG } from "react-svg";
import Sidebar from "../Sidebar/Sidebar";

export default function Navbar(props) {
	const { links } = props;

	const cardData = [
		{
			id: "1",
			name: "Cellphone",
		},
		{
			id: "2",
			name: "Cooking oil/grease",
		},
		{
			id: "3",
			name: "Sludge",
		},
		{
			id: "4",
			name: "Batteries",
		},
		{
			id: "5",
			name: "Medical waste",
		},
		{
			id: "6",
			name: "Oil",
		},
		{
			id: "7",
			name: "Plant waste",
		},
		{
			id: "8",
			name: "Waste detergents",
		},
		{
			id: "9",
			name: "Cardboard",
		},
		{
			id: "10",
			name: "Plastics (recyclable)",
		},
		{
			id: "11",
			name: "Paper",
		},
		{
			id: "12",
			name: "Metal containers / Tins",
		},
		{
			id: "13",
			name: "Plastics (solid)",
		},
		{
			id: "14",
			name: "Furniture",
		},
		{
			id: "15",
			name: "Glass (solid)",
		},
	];

	const [query, setQuery] = useState("");
	const [searchResult, setSearchResult] = useState([]);
	const [isCategories, setIsCategories] = useState(false);

	const ifCategories = (value) => {
		if (window.location.href === "http://localhost:3000/categories") {
			props.setSearchQuery(value);
			setIsCategories(true);
		} else {
			setIsCategories(false);
		}
	};

	const searchData = (value) => {
		const results = cardData.filter((obj) => {
			return value && obj.name.toLowerCase().includes(value.toLowerCase());
		});
		setSearchResult(results);
		ifCategories(value);
	};

	const updateQuery = (e) => {
		const text = e.target.value;
		setQuery(text);
		searchData(text);
	};

	const searchFormHandler = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setQuery("");
		setSearchResult([]);
		props.setSearchQuery("");
	};

	return (
		<nav className="nav">
			<Link to="/" className="nav__logo">
				<div className="nav__logo">
					<div className="nav__logo__image">
						<SplineLogo />
					</div>
					<div className="nav__logo__text">
						<h1>RE-cycle</h1>
					</div>
				</div>
			</Link>
			<div className="nav-big">
				<div className="nav__search">
					<search className="nav__search__outer">
						<form className="nav__search__form" onSubmit={searchFormHandler}>
							<div className="nav__search__container">
								<div className="nav__search__icon">
									<ReactSVG
										className="nav__search__icon__inner"
										src={searchIcon}
									/>
								</div>
								<input
									id="searchInput"
									className="nav__search__input"
									type="text"
									value={query}
									placeholder="Search"
									onChange={updateQuery}></input>
							</div>
						</form>
						<SearchResults data={searchResult} isCategories={isCategories} />
					</search>
				</div>

				<div className="nav__links">
					<ul className="nav__links__list">
						<li>
							<Button
								label="Categories"
								link="/categories"
								icon={categoryIcon}
							/>
						</li>
						<li>
							<Button label="Resources" link="/resources" icon={resourceIcon} />
						</li>
						<li>
							<Button label="About" link="/about" icon={aboutIcon} />
						</li>
					</ul>
				</div>
			</div>

			<div className="nav-mobile">
				<Sidebar>
					<div className="nav__search">
						<search className="nav__search__outer">
							<form className="nav__search__form" onSubmit={searchFormHandler}>
								<div className="nav__search__container">
									<div className="nav__search__icon">
										<ReactSVG
											className="nav__search__icon__inner"
											src={searchIcon}
										/>
									</div>
									<input
										id="searchInput"
										className="nav__search__input"
										type="text"
										placeholder="Search"
										onChange={updateQuery}></input>
								</div>
							</form>
							<SearchResults data={searchResult} />
						</search>
					</div>
					<hr />
					<div className="nav__links">
						<ul className="nav__links__list">
							<li>
								<Button
									label="Categories"
									link="/categories"
									icon={categoryIcon}
								/>
							</li>
							<li>
								<Button
									label="Resources"
									link="/resources"
									icon={resourceIcon}
								/>
							</li>
							<li>
								<Button label="About" link="/about" icon={aboutIcon} />
							</li>
						</ul>
					</div>
				</Sidebar>
			</div>
		</nav>
	);
}
