import "./categories.scss";
import testImage from "../../assets/images/batteries.png";
export default function Categories() {
	// const cardData = [
	// 	{
	// 		image_one:
	// 		image_two:
	// 		image_three: ,
	// 		header: "Liquid",
	// 		description: "Hazardous waste disposal is essential for preventing environmental and health risks. Proper containment, treatment, and adherence to regulations ensure safe and responsible management of these materials."
	// 	},
	// 	{
	// 		image_one:
	// 		image_two:
	// 		image_three: 
	// 		header: "Hazardous",
	// 		description:
	// 	},
	// 	{
	// 		image_one:
	// 		image_two:
	// 		image_three: 
	// 		header: "Organic",
	// 		description:
	// 	},
	// 	{
	// 		image_one:
	// 		image_two:
	// 		image_three: 
	// 		header: "Recyclable",
	// 		description:
	// 	},
	// 	{
	// 		image_one:
	// 		image_two:
	// 		image_three: 
	// 		header: "Solid",
	// 		description:
	// 	},
	// ]
  return (
    <>
      <div className="category--card">
        <h2 className="category__header">Hazardous</h2>
        <p className="category__description">
          Hazardous waste includes ble, corrosive, toxic and reactive
          materials. In a nutshell, they are wastes that pose a significant or
          potential threat to our environment.
        </p>
		<div className="image--container">
			<div className="category__image"><p className="image__text">Batteries</p></div>
			<div className="category__image"><p className="image__text">Batteries</p></div>
			<div className="category__image"><p className="image__text">Batteries</p></div>
		</div>
	   </div>
    </>
  );
}
