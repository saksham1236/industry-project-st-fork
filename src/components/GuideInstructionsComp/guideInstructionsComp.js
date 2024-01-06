import "./guideInstructionsComp.scss";
import GuideListComponent from "../GuideListComp/guideListComp";
import Data from "../../data/guides.json";
import { useParams } from "react-router-dom";

function GuideInstructionsComp() {
	console.log(Data[0].image);

	const { id } = useParams();

	console.log("useParams id: ", id);

	return (
		<div className="guide-inst">
			<div className="guide-inst__do-list">
				<h1 className="guide-list__title">DO:</h1>
				{Data.filter((data) => data.id === id).map((data) => {
					return (
						<GuideListComponent
							key={data.id}
							steps={data.doSteps}
							image={data.image}
						/>
					);
				})}
			</div>
			<div className="guide-inst__do-list">
				<h1 className="guide-list__title">DOnt:</h1>
				{Data.filter((data) => data.id === id).map((data) => {
					return (
						<GuideListComponent
							key={data.id}
							steps={data.dontSteps}
							image={data.image}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default GuideInstructionsComp;

// function GuideComponent(props) {
//   return (
//     <div className="guide">
//       <img
//         className="guide__image"
//         src={props.image}
//       >
//       </img>
//       <h1 className="guide__title">
//         Title here
//         {props.title}
//       </h1>
//       <p className="guide__description">
//         Description here........
//         {props.description}
//       </p>
//       <button className="guide__button">
//         Button Text
//       </button>
//     </div>
//   );
// }

// export default GuideComponent;
