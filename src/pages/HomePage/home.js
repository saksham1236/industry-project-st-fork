import "./home.scss";
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
						Your Ultimate Guide to Responsible Waste Handling!"
					</h1>
					<p className="hero__content__paragraph">
						Welcome to Waste Wise – your guide to responsible waste handling!
						Explore sustainable living with practical tips and eco-friendly
						solutions. Join us on the green path to make a positive impact, one
						conscious decision at a time.
					</p>
					<Button label="Go to Categories" icon={categoryIcon} />
				</div>
			</section>
		</>
	);
}
