import "./guideListComp.scss"

function GuideListComponent({ id, doSteps, image, dontSteps }) {


  return (
    <div className="guide-list">
      <div className="guide-list__list-container">
        {doSteps.map((step, index) =>  (
          <p key={index} className="guide-list__step">{step}</p>
          // console.log(step)
          ))}
        {/* <img src={image} className="guide-list__image" alt="product to be disposed of"></img>
        <p className="guide-list__step"> {dontSteps}</p> */}
      </div>
    </div>
  );
}

export default GuideListComponent;