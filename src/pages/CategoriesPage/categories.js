import "./categories.scss";
import testImage from "../../assets/images/batteries.png";
import CategoryCard from "../../components/CategoryCard/categoryCard";
import cardData2 from "../../data/cards.json";
import { lazy } from "react";

export default function Categories({ searchQuery }) {
	const cardData = [
		{
			card_header: "Liquid",
			card_color: "#29a6ff75",
			text_color: "#00487b",
			description:
				"Liquid waste refers to all grease, oil, sludges, wash water, waste detergents and dirty water that have been thrown away. They are hazardous and poisonous to our environment and are found in industries as well as households. Wastewater, as it is often called, is any waste that exists in liquid form.",
			imageData: [
				{
					id: "1",
					image_one: { testImage },
					image_name: "Batteries",
				},
				{
					id: "2",
					image_two: { testImage },
					image_name: "cell phone",
				},
				{
					id: "3",
					image_three: { testImage },
					image_name: "waste",
				},
			],
		},
		{
			image_one: { testImage },
			image_two: { testImage },
			image_three: { testImage },
			card_header: "Hazardous",
			image_name: "Batteries",
			card_color: "#fff8e8",
			text_color: "#875b0f",
			description:
				"Hazardous waste disposal is essential for preventing environmental and health risks. Proper containment, treatment, and adherence to regulations ensure safe and responsible management of these materials.",
		},
		{
			image_one: { testImage },
			image_two: { testImage },
			image_three: { testImage },
			card_header: "Organic",
			image_name: "Batteries",
			card_color: "#60bd6066",
			text_color: "#003400",
			description:
				"Organic waste refers to rotten meat, garden and food waste. This type of rubbish is commonly found in homes. With time, they decompose and turn into manure by the action of microorganisms on them. But be careful; you should not dispose of them anywhere you like.",
		},
		{
			image_one: { testImage },
			image_two: { testImage },
			image_three: { testImage },
			card_header: "Recyclable",
			image_name: "Batteries",
			card_color: "#2265FF",
			text_color: "#002A8C",
			description:
				"All discarded items like metals, furniture, organic waste that can be recycled fall under this category. Not all items are recyclable, so you have to be careful when putting things into the recycle bin. If you are not sure whether an item is recyclable or not, then check the item’s packaging.",
		},
		{
			image_one: { testImage },
			image_two: { testImage },
			image_three: { testImage },
			card_header: "Solid",
			image_name: "Batteries",
			card_color: "#cbcaca",
			text_color: "#686868",
			description:
				"Solid waste is any garbage, sludge, and refuse found in industrial and commercial locations. The five major types of solid rubbish are;",
		},
	];

	const filteredData = cardData.filter((data) =>
		data.card_header.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const image = cardData2[0].imageData.image_one;
	console.log(image);

	return (
		<>
			<img src={image} />
			{filteredData.map((data) => {
				return (
					<CategoryCard
						imageOne={data.image_one}
						imageTwo={data.image_two}
						imageThree={data.image_three}
						cardHeader={data.card_header}
						imageName={data.image_name}
						description={data.description}
						cardColor={data.card_color}
						textColor={data.text_color}
					/>
				);
			})}
		</>
	);
}
