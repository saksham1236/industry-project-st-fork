import "./Navbar.scss";
import { useState, useRef, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
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
	const navigate = useNavigate();
	const ref = useRef();
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
			id: "3",
			name: "Batteries",
		},
		{
			id: "3",
			name: "Medical waste",
		},
		{
			id: "3",
			name: "Oil",
		},
		{
			id: "3",
			name: "Plant waste",
		},
		{
			id: "3",
			name: "Waste detergents",
		},
		{
			id: "3",
			name: "Cardboard",
		},
		{
			id: "3",
			name: "Plastics",
		},
		{
			id: "3",
			name: "Paper",
		},
		{
			id: "3",
			name: "Metal containers / Tins",
		},
		{
			id: "3",
			name: "Textiles",
		},
		{
			id: "3",
			name: "Furniture",
		},
		{
			id: "3",
			name: "Glass",
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

	const checkQuery = () => {
		if (query.toLocaleLowerCase().includes("cell")) {
			navigate("/categories/1/guide");
		} else if (query.toLocaleLowerCase().includes("cook")) {
			navigate("/categories/2/guide");
		} else {
			navigate("/default");
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleOutsideClick);
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	});

	const handleOutsideClick = (e) => {
		if (ref.current && !ref.current.contains(e.target)) {
			setSearchResult([]);
		}
	};
	const searchFormHandler = (e) => {
		e.preventDefault();
		e.stopPropagation();

		checkQuery();

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
						<h1>
							Bin<br></br>There
						</h1>
					</div>
				</div>
			</Link>
			<div className="nav-big">
				<div className="nav__search" ref={ref}>
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
						<SearchResults
							data={searchResult}
							isCategories={isCategories}
							setSearchResult={setSearchResult}
							setQuery={setQuery}
						/>
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
