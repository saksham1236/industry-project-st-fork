import "./categories.scss";
import CategoryCard from "../../components/CategoryCard/categoryCard";
import cardData from "../../data/cards.json";

export default function Categories({ searchQuery }) {
	const filteredData = cardData.filter((data) =>
		data.card_header.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<>
			{filteredData.map((data) => {
				return (
					<CategoryCard
						imageOne={data.imageData.image_one}
						imageTwo={data.imageData.image_two}
						imageThree={data.imageData.image_three}
						cardHeader={data.card_header}
						imageNameOne={data.imageData.image_one_name}
						imageNameTwo={data.imageData.image_two_name}
						imageNameThree={data.imageData.image_three_name}
						description={data.description}
						cardColor={data.card_color}
						textColor={data.text_color}
					/>
				);
			})}
		</>
	);
}
