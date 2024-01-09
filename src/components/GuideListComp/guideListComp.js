import "./guideListComp.scss";
import CheckmarkIcon from "../../assets/icons/checkmark.svg";
import XIcon from "../../assets/icons/x-icon.svg";

function GuideListComponent({ steps, addCheck, backgroundColor }) {
  return (
    <div className="guide-list">
      <div className="guide-list__list-container">
        {steps.map((step, index) => (
          <div
            className="guide-list__chip"
            style={{
              backgroundColor: `${backgroundColor}`
            }}>
            <img
              src={addCheck ? CheckmarkIcon : XIcon}
              className="guide-list__icon"
              alt={addCheck ? `checkmark` : `what not to do`} />
            <p key={index}
              className="guide-list__step"
            >
              {step}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuideListComponent;