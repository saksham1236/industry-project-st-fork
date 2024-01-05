import "./tile.scss";
function Tile({ title, image, desc }) {
	const truncateText = (inputString) => {
		const words = inputString.split(" ");
		if (words.length > 12) {
			return `${words.slice(0, 12).join(" ")} ...`;
		} else {
			return inputString;
		}
	};

	const descPreview = truncateText(desc);

	return (
		<div className="tile">
			<div className="tile__top">
				<img src={image} className="tile__image" alt="tile-media" />
			</div>
			<div className="tile__btm">
				<div className="tile__title">{title}</div>
				<div className="tile__description">{descPreview}</div>
				<div className="tile__buttons">
					<button>read more</button>
				</div>
			</div>
		</div>
	);
}

export default Tile;
