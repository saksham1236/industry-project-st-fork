import "./home.scss";
import { Link } from "react-router-dom";
import SplashScene from "../../components/SplashScene/SplashScene";
import Button from "../../components/Button/Button";
import categoryIcon from "../../assets/icons/category_FILL0_wght400_GRAD0_opsz24.svg";

export default function Home() {
	return (
		<>
			<section className="hero">
				<div className="hero__background">
					<div className="hero__background__gradient"></div>
					<SplashScene />
				</div>
				<div className="hero__content">
					<h1 className="hero__content__headline">
						No time? No headspace? No prob.
					</h1>
					<p className="hero__content__paragraph">
						Your Quick and Easy Guide to Responsible Waste Disposal
					</p>
					<p className="hero__content__paragraph">
						Make a world of difference
					</p>
					<Link to={"/categories"} className="link">
						<Button label="Go to Categories" icon={categoryIcon} />
					</Link>
				</div>
			</section>
		</>
	);
}
