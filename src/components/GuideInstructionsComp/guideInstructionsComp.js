import "./guideInstructionsComp.scss";
import GuideListComponent from "../GuideListComp/guideListComp"
import Data from "../../data/guides.json";
import { useParams } from "react-router-dom";

function GuideInstructionsComp() {

  const { id } = useParams();

  return (
    <div className="guide-inst">
      {Data.filter((data) => data.id === id).map((data) => {
        return (
          <div className="guide-inst">
            <div className="guide-inst__list">
              <h1 className="guide-list__title">DO:</h1>
              <GuideListComponent
                key={data.id}
                steps={data.doSteps}
              />
            </div>
            <div className="guide-inst__image-container">
              <img src={data.image} className="guide-inst__image" alt="item to be disposed of"></img>
            </div>
            <div className="guide-inst__list">
              <h1 className="guide-list__title">DO NOT:</h1>
              <GuideListComponent
                key={data.id}
                steps={data.dontSteps}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}


export default GuideInstructionsComp;