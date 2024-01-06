import "./guideListComp.scss"

function GuideListComponent({ id, doSteps, image, dontSteps }) {
  console.log({doSteps});
  // console.log(id);
  // console.log("Current id: ", id)

  return (
    <div className="guide-list">
      <div className="guide-list__list-container">
        {doSteps.map((step) => (
          <p className="guide-list__step">{step}</p>
        ))}
        {/* <img src={image} className="guide-list__image" alt="product to be disposed of"></img> */}
        {/* <p className="guide-list__step"> {dontSteps}</p> */}
      </div>
    </div>
  );
}

export default GuideListComponent;