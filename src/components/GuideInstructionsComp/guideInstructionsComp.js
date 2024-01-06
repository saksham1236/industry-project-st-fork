import "./guideInstructionsComp.scss";
import GuideListComponent from "../GuideListComp/guideListComp"
import Data from "../../data/guides.json";
import { useParams } from "react-router-dom";

function GuideInstructionsComp() {
  console.log(Data[0].dontSteps);

  const { id } = useParams();
  // OR make json file??
  // const tempData = [
  // 	{
  // 		image: "http://dummyimage.com/250.png/ff4444/ffffff",
  //     doSteps: "# Lorem ipsum dolor sit amet, consectetur adipiscing elit, # sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. # Ut enim ad minim veniam, quis nostrud exercitation # ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     dontSteps: "# Lorem ipsum dolor sit amet, consectetur adipiscing elit, # sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. # Ut enim ad minim veniam, quis nostrud exercitation # ullamco laboris nisi ut aliquip ex ea commodo consequat."
  //   },
  // 	{
  // 		image: "http://dummyimage.com/250.png/dddddd/000000",
  // 		title: "Black Christmas",
  // 		description:
  // 			"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  // 	},
  // 	{
  // 		image: "http://dummyimage.com/250.png/004477/7777777",
  // 		title: "Combien Tu M'aimes?",
  // 		description:
  // 			"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  // 	},
  // ];

  return (
    <div className="guide-inst">

      <div className="guide-inst__do-list">
        <h1 className="guide-list__title">DO:</h1>
        {Data.filter(data => data.id === id)
        .map(data => {
          return (
            <GuideListComponent
            doSteps={data.doSteps}
            image={data.image}
            dontSteps={data.dontSteps}
            />
          );
        })}
      </div>
      {/* <div className="guide-inst__image-container">
        <img
          // src={image}
          src="http://dummyimage.com/250.png/ff4444/ffffff"
          alt="product to be disposed of"
          className="guide-inst__image">
        </img>
      </div>
      <div className="guide-inst__dont-list">
        <h1 className="guide-list__title">DO NOT:</h1>
        <GuideListComponent />
      </div> */}
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