import "./categoryCard.scss";
import { Link } from "react-router-dom";

export default function CategoryCard(props) {
	const demo = props.demo;

	const gradientOne = {
		backgroundImage: `linear-gradient(
			180deg,
			rgba(0, 17, 42, 0) 58.51%,
			rgba(0, 22, 47, 0.75) 100%
		),
		 url("${props.imageOne}")`,
	};
	const gradientTwo = {
		backgroundImage: `linear-gradient(
			180deg,
			rgba(0, 17, 42, 0) 58.51%,
			rgba(0, 22, 47, 0.75) 100%
		),
		 url("${props.imageTwo}")`,
	};
	const gradientThree = {
		backgroundImage: `linear-gradient(
			180deg,
			rgba(0, 17, 42, 0) 58.51%,
			rgba(0, 22, 47, 0.75) 100%
		),
		 url("${props.imageThree}")`,
	};

	return (
		<>
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
					<Link className="card__link" to={"/default"}>
						<div className="category__image" style={gradientOne}>
							<p className="image__text">{props.imageNameOne}</p>
						</div>
					</Link>
					<Link className="card__link" to={"/default"}>
						<div className="category__image" style={gradientTwo}>
							<p className="image__text">{props.imageNameTwo}</p>
						</div>
					</Link>
					<Link
						className="card__link"
						to={demo === "true" ? props.url : "/default"}>
						<div className="category__image" style={gradientThree}>
							<p className="image__text">{props.imageNameThree}</p>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
}
