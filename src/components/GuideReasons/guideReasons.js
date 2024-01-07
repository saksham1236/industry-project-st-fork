import "./guideReasons.scss";
import Data from "../../data/guides.json";
import { useParams } from "react-router-dom";

function GuideReasons() {

  const { id } = useParams();

  const listOfReasons = Data.filter((data) => data.id === id) 
  console.log(reasons)

  return (
    <div className="guide-reasons">
      <h1 className="guide-list__title">Environmental Impact:</h1>
      <div className="guide-reasons__container">
        {listOfReasons.map(reason => {
          <p className="guide-reasons__list-item">{reason}</p>
        })}
      </div>
    </div>
  )
}

export default GuideReasons;