import "./categoryCard.scss";
import { Link } from "react-router-dom";

export default function CategoryCard(props) {

	const gradientOne = {
		backgroundImage: `linear-gradient(
			180deg,
			rgba(0, 17, 42, 0) 58.51%,
			rgba(0, 22, 47, 0.75) 100%
		),
		 url("${props.imageOne}")`
	}
	const gradientTwo = {
		backgroundImage: `linear-gradient(
			180deg,
			rgba(0, 17, 42, 0) 58.51%,
			rgba(0, 22, 47, 0.75) 100%
		),
		 url("${props.imageTwo}")`
	}
	const gradientThree = {
		backgroundImage: `linear-gradient(
			180deg,
			rgba(0, 17, 42, 0) 58.51%,
			rgba(0, 22, 47, 0.75) 100%
		),
		 url("${props.imageThree}")`
	}

	return (
		<>
			<Link className="category__image--link" to={props.url}>
				<div
					className="category--card"
					style={{ backgroundColor: `${props.cardColor}` }}>
					<h2
						className="category__header"
						style={{ color: `${props.textColor}` }}>
						{props.cardHeader}
					</h2>
					<p
						className="category__description"
						style={{ color: `${props.textColor}` }}>
						{props.description}
					</p>
					<div className="image--container">
						<div
							className="category__image"
							style=
								{gradientOne}>
							<p className="image__text">{props.imageNameOne}</p>
						</div>
						<div
							className="category__image"
							style={gradientTwo}>
							<p className="image__text">{props.imageNameTwo}</p>
						</div>
						<div
							className="category__image"
							style={gradientThree}>
							<p className="image__text">{props.imageNameThree}</p>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
}
