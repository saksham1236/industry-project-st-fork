import "./searchResults.scss";
import { useNavigate } from "react-router-dom";

function SearchResults({ data, isCategories, setSearchResult, setQuery }) {
	const navigate = useNavigate();

	const clickHandler = (id) => {
		if (id == 3) {
			navigate("/default");
			setQuery("");
			setSearchResult([]);
		} else {
			navigate(`categories/${id}/guide`);
			setQuery("");
			setSearchResult([]);
		}
	};

	if (isCategories) {
		return <></>;
	} else {
		return (
			<div className="search-results">
				{data.map((result, index) => {
					return (
						<div
							onClick={() => {
								clickHandler(result.id);
							}}
							key={index}
							className="search-results__item">
							{result.name}
						</div>
					);
				})}
			</div>
		);
	}
}

export default SearchResults;
