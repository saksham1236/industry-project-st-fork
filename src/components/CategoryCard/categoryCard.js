import "./categoryCard.scss";

export default function CategoryCard(props) {
  return (
    <>
      <div className="category--card" style={{backgroundColor: `${props.cardColor}`}}>
        <h2 className="category__header" style={{color: `${props.textColor}`}}>{props.cardHeader}</h2>
        <p className="category__description" style={{color: `${props.textColor}`}}>
          {props.description}
        </p>
        <div className="image--container">
          <div className="category__image">
            <p className="image__text">{props.imageOneName}</p>
          </div>
          <div className="category__image">
            <p className="image__text">{props.imageTwoName}</p>
          </div>
          <div className="category__image">
            <p className="image__text">{props.imageThreeName}</p>
          </div>
        </div>
      </div>
    </>
  );
}
