import "./Navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import SearchResults from "../SearchResults/SearchResults";
import SplineLogo from "../splineView/SplineView";
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
			card_header: "Liquid",
		},
		{
			card_header: "Hazardous",
		},
		{
			card_header: "Organic",
		},
		{
			card_header: "Recyclable",
		},
		{
			card_header: "Solid",
		},
	];

	const [query, setQuery] = useState("");
	const [searchResult, setSearchResult] = useState([]);

	const ifCategories = (value) => {
		if (window.location.href === "http://localhost:3000/categories") {
			props.setSearchQuery(value);
		} else {
			return false;
		}
	};

	const searchData = (value) => {
		const results = cardData.filter((obj) => {
			return (
				value && obj.card_header.toLowerCase().includes(value.toLowerCase())
			);
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
		alert(query);
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
									placeholder="Search"
									onChange={updateQuery}></input>
							</div>
						</form>
						<SearchResults data={searchResult} />
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
