import "./guideInstructionsComp.scss";
import GuideListComponent from "../GuideListComp/guideListComp";

function GuideInstructionsComp({ data }) {
  return (
    <>
      <div
        key={data.id}
        className="guide-inst"
        style={{
          backgroundColor: `${data.card_color}`,
          color: `${data.text_color}`
        }}>
        <div className="guide-inst__list">
          <h1 className="guide-list__title">DO:</h1>
          <GuideListComponent
            key={data.id}
            steps={data.doSteps}
            addCheck={true}
            backgroundColor={data.listItemColor}
          />
        </div>
        <div className="guide-inst__image-container">
          <img
            src={data.image}
            className="guide-inst__image"
            alt="item to be disposed of"></img>
        </div>
        <div className="guide-inst__list">
          <h1 className="guide-list__title">DO NOT:</h1>
          <GuideListComponent
            key={data.id}
            steps={data.dontSteps}
            addCheck={false}
            backgroundColor={data.listItemColor}
          />
        </div>
      </div>
    </>
  );
}

export default GuideInstructionsComp;
