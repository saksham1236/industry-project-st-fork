import "./categoryCard.scss";
import { Link } from "react-router-dom";

export default function CategoryCard(props) {
	return (
		<>
			{/* only addition to page is <Link> </Link> */}
			<Link to={props.url}>
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
							style={{
								backgroundImage: `url(${props.imageOne})`,
							}}>
							<p className="image__text">{props.imageNameOne}</p>
						</div>
						<div
							className="category__image"
							style={{
								backgroundImage: `url(${props.imageTwo})`,
							}}>
							<p className="image__text">{props.imageNameTwo}</p>
						</div>
						<div
							className="category__image"
							style={{
								backgroundImage: `url(${props.imageThree})`,
							}}>
							<p className="image__text">{props.imageNameThree}</p>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
}
