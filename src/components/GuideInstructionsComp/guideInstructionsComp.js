import "./guideInstructionsComp.scss";
import GuideListComponent from "../GuideListComp/guideListComp"
import Data from "../../data/guides.json";
import { useParams } from "react-router-dom";

function GuideInstructionsComp() {
  console.log(Data[0].image);

  const { id } = useParams();

  console.log("useParams id: ", id);
  console.log(Data[0].doSteps[0])


  return (
    <div className="guide-inst">

      {Data.filter(data => data.id === id)
        .map(data => {
          return (
            <>
              <div key={data.id} className="guide-inst__do-list">
                <h1 className="guide-list__title">DO:</h1>
                <GuideListComponent
                  
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
              {/* <div className="guide-inst__dont-list">
                <h1 className="guide-list__title">DO NOT:</h1>
                <GuideListComponent
                  key={data.id}
                  dontSteps={data.dontSteps}
                />
              </div> */}

            </>
          );
        })}
    </div>
  );
}

export default GuideInstructionsComp;