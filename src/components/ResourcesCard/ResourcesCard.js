import "./ResourcesCard.scss";

function ResourcesCard(props) {
	return (
		<div
			className="resources-card"
			style={{ top: `calc(20% + ${props.index * 25}px)` }}>
			<div className="resources-card__title-container">
				<h2 className="resources-card__title">{props.title}</h2>
			</div>
			<div className="resources-card__image-container">
				<img
					src={props.image}
					className="resources-card__image"
					alt="waste disposal resource"
				/>
			</div>
			<div className="resources-card__description-container">
				<p className="resources-card__description">{props.description}</p>
			</div>
			<div className="resources-card__link-container">
				<a
					href={props.link}
					target="_blank"
					rel="noopener noreferrer"
					className="resources-card__link">
					{props.link}
				</a>
			</div>
		</div>
	);
}

export default ResourcesCard;
