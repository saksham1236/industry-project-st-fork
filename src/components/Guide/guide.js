import "./guide.scss";

function GuideComponent(props) {
  return (
    <div className="guide">
      <img
        className="guide__image"
        src={props.image}
      >
      </img>
      <h1 className="guide__title">
        Title here
        {props.title}
      </h1>
      <p className="guide__description">
        Description here........
        {props.description}
      </p>
      <button className="guide__button">
        Button Text
      </button>
    </div>
  );
}

export default GuideComponent;