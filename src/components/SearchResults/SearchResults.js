import "./searchResults.scss";
import { Link } from "react-router-dom";

function SearchResults({ data, isCategories }) {

	const url = "http://localhost:3000/"

	if (isCategories) {
		return <></>;
	} else {
		return (
			<div className="search-results">
				{data.map((result, index) => {
					return (
						// <div key={index} className="search-results__item">
						<Link to={`${url}categories/${result.id}/guide`} key={index} className="search-results__item">
							{result.name}
						 </Link>
						// </div>
					);
				})}
			</div>
		);
	}
}

export default SearchResults;
