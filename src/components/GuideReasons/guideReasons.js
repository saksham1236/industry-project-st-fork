import "./guideReasons.scss";
import Data from "../../data/guides.json";
import { useParams } from "react-router-dom";

function GuideReasons() {
  const { id } = useParams();

  return (
    <div className="guide-reasons">
      <h1 className="guide-reasons__title">Environmental Impact</h1>
      <div className="guide-reasons__container">
        {Data.filter((data) => data.id === id).map((item) => (
          <div key={item.id}>
            {item.reasons.map((reason, index) => (
              <p key={index} className="guide-reasons__list-item">{reason}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default GuideReasons;