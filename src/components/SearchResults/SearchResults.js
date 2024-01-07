import "./searchResults.scss";

function SearchResults({ result }) {
	return (
		<div className="search-results">
			<div className="search-results__text">{result}</div>
			<div className="search-results__text">search</div>
			<div className="search-results__text">search</div>
		</div>
	);
}

export default SearchResults;
