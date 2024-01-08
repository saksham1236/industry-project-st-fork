import "./home.scss";
import Tile from "../../components/Tile/Tile";
import SplashScene from "../../components/SplashScene/SplashScene";
import Button from "../../components/Button/Button"
import categoryIcon from "../../assets/icons/category_FILL0_wght400_GRAD0_opsz24.svg"

export default function Home() {
	// const dummyData = [
	// 	{
	// 		image: "http://dummyimage.com/439x260.png/ff4444/ffffff",
	// 		title: "Forgiven",
	// 		description:
	// 			"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
	// 	},
	// 	{
	// 		image: "http://dummyimage.com/482x260.png/dddddd/000000",
	// 		title: "Black Christmas",
	// 		description:
	// 			"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
	// 	},
	// 	{
	// 		image: "http://dummyimage.com/481x260.png/ff4444/ffffff",
	// 		title: "Combien Tu M'aimes?",
	// 		description:
	// 			"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
	// 	},
	// ];

	return (
		<>
			<section className='hero'>
				<div className='hero__background'>
					<div className='hero__background__gradient'></div>
					<SplashScene />
				</div>
				<div className='hero__content'>
					<h1 className='hero__content__headline'>
						Your Ultimate Guide to Responsible Waste Handling!"
					</h1>
					<p className='hero__content__paragraph'>
						Welcome to Waste Wise – your guide to responsible waste
						handling! Explore sustainable living with practical tips
						and eco-friendly solutions. Join us on the green path to
						make a positive impact, one conscious decision at a
						time.
					</p>
					<Button label = "Go to Categories" icon = {categoryIcon}/>
				</div>
			</section>
		</>
	);
}
