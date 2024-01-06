import "./Navbar.scss";
import logoIcon from "../../assets/logo/icons8-recycle.svg"
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import categoryIcon from "../../assets/icons/category_FILL0_wght400_GRAD0_opsz24.svg";
import resourceIcon from "../../assets/icons/crowdsource_FILL0_wght400_GRAD0_opsz24.svg"
import aboutIcon from "../../assets/icons/help_FILL0_wght400_GRAD0_opsz24.svg"
export default function Navbar(props) {

    const {links} = props;

    const [query, setQuery] = useState();

    const searchFormHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    return(
        <nav>
            <div className="nav__logo">
                <div className="nav__logo__image">
                    <img src = {logoIcon} alt = "Re-cycle Logo"></img>
                </div>
                <div className="nav__logo__text">
                    <h1>RE-cycle</h1>
                </div>
            </div>
            

            <div className="nav__search">
                <search>
                    <form onSubmit={searchFormHandler}>
                        <input type="text" placeholder="Search"></input>
                    </form>
                </search>
            </div>

            <div className="nav__links">
                <ul className="nav__links__list">
                    <li><Button label = "Categories" link = "/categories" icon = {categoryIcon}/></li>
                    <li><Button label = "Resources" link = "/resources" icon = {resourceIcon} /></li>
                    <li><Button label = "About" link = "/about" icon = {aboutIcon}/></li>
                </ul>
            </div>

        </nav>
    );
}