import "./home.scss";
import Tile from "../../components/Tile/Tile";

export default function Home() {
	const dummyData = [
		{
			image: "http://dummyimage.com/439x260.png/ff4444/ffffff",
			title: "Forgiven",
			description:
				"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
		},
		{
			image: "http://dummyimage.com/482x260.png/dddddd/000000",
			title: "Black Christmas",
			description:
				"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
		},
		{
			image: "http://dummyimage.com/481x260.png/ff4444/ffffff",
			title: "Combien Tu M'aimes?",
			description:
				"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
		},
	];

	return (
		<>
			home page
			{dummyData.map((data) => {
				return (
					<Tile image={data.image} title={data.title} desc={data.description} />
				);
			})}
		</>
	);
}
