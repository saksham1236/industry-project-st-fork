import "./default.scss";
import { NavLink } from "react-router-dom";

function Default() {

  const url = "http://localhost:3000/";
  return (
    <div className="default">
      <p className="default__text">
        We’re continuing to build our site with all the info you’ll need.</p>
      <p className="default__text">
        That item isn’t here yet, but check back soon.</p>
      <p className="default__text">
        In the meantime, check out our <NavLink
          to={`${url}resources`}
          className={`default__link`}
        >Resources
        </NavLink> page with additional guidance and info.</p>
      <p className="default__text">
        We appreciate you and your dedication to eco-friendly practises!
      </p>
    </div>
  );
}

export default Default;