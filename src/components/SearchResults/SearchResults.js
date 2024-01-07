import "./searchResults.scss";

function SearchResults({ data }) {
	return (
		<div className="search-results">
			{data.map((result, index) => {
				return (
					<div key={index} className="search-results__item">
						{result.card_header}
					</div>
				);
			})}
		</div>
	);
}

export default SearchResults;
