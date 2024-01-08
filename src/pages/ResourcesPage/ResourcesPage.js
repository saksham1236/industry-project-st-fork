import "./ResourcesPage.scss";
import ResourcesCard from "../../components/ResourcesCard/ResourcesCard";

function Resources() {
	const resourceData = [
		{
			title: "City of Toronto Waste Educational Resources",
			link: "https://www.toronto.ca/services-payments/recycling-organics-garbage/waste-educational-resources/",
			image: "http://dummyimage.com/200.png/pp77ff/ffffff",
			cardColor: "#29a6ff75",
			textColor: "#00487b",
			description: "Tons of detailed information about residential and non-residential waste collection in Toronto."
				},
		{
			title: "1-800-GOT-JUNK?",
			link: "https://www.1800gotjunk.com/ca_en",
			image: "http://dummyimage.com/200.png/gr444ff/ffffff",
			cardColor: "#29a6ff75",
			textColor: "#00487b",
			description: "For removal of large, non-hazardous items such as mattresses or fridges. Simple online booking and 24/7 customer support."
		},
		{
			title: "Government of Ontario Waste Management",
			link: "https://www.ontario.ca/page/waste-management",
			image: "http://dummyimage.com/200.png/pc4ff/ffffff",
			cardColor: "#29a6ff75",
			textColor: "#00487b",
			description: "Lots of information about provincial efforts to reduce waste and dispose more responsibly."
		}
	];

	return (
		<>
			{resourceData.map((data) => {
				return (
					<>
						<ResourcesCard
							key={data.index}
							title={data.title}
							link={data.link}
							image={data.image}
							cardColor={data.cardColor}
							text_color={data.textColor}
							description={data.description}
						/>
					</>
				);
			})}
		</>
	);
}

export default Resources;