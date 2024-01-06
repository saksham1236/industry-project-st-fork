import "./guideInstructionsComp.scss";
import GuideListComponent from "../GuideListComp/guideListComp"
import Data from "../../data/guides.json";
import { useParams } from "react-router-dom";

function GuideInstructionsComp() {
  console.log(Data[0].image);

  const { id } = useParams();

  console.log("useParams id: ", id);


  return (
    <div className="guide-inst">
      
        {Data.filter(data => data.id === id)
          .map(data => {
            return (
              <>
              
        
              <div className="guide-inst__do-list">
              <h1 className="guide-list__title">DO:</h1>
                <GuideListComponent
                  key={data.id}
                  doSteps={data.doSteps}
                />
                </div>
                <div className="guide-inst__image-container">
                  <img
                    src={data.image}
                    alt="product to be disposed of"
                    className="guide-inst__image">
                  </img>
                </div>
                <div className="guide-inst__dont-list">
                  <h1 className="guide-list__title">DO NOT:</h1>
                  {/* {Data.filter(data => data.id === id)
          .map(data => {
            return ( */}
                  <GuideListComponent
                    key={data.id}
                    dontSteps={data.dontSteps}
                  // image={data.image}
                  // dontSteps={data.dontSteps}
                  />
                  {/* ); */}
                  {/* })} */}
                </div>
                
              </>
            );
          })}
      


      {/* <div className="guide-inst__dont-list">
        <h1 className="guide-list__title">DO NOT:</h1>
        {Data.filter(data => data.id === id)
          .map(data => {
            return (
        <GuideListComponent
        key={data.id}
                doSteps={data.doSteps}
                />
            )}
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