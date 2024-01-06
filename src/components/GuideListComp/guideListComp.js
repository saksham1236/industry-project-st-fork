import "./guideListComp.scss"

function GuideListComponent({ doSteps, image, dontSteps }) {
  console.log(doSteps)
  return (
    <div className="guide-list">
      <div className="guide-list__list-container">
        {/* <p className="guide-list__list-item">
          # Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <p className="guide-list__list-item">
          # sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="guide-list__list-item">
          # Ut enim ad minim veniam, quis nostrud exercitation
        </p>
        <p className="guide-list__list-item">
          # ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p> */}
        <p className="guide-list__step">{doSteps}</p>
        <img src={image} className="guide-list__image" alt="product to be disposed of"></img>
        <p className="guide-list__step">{dontSteps}</p>
      </div>
    </div>
  );
}

export default GuideListComponent;