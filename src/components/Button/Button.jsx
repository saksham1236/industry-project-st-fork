import "./Button.scss";
import { Link } from "react-router-dom";

/**
 * Button component
 * 
 * @component
 * @param {label, icon, iconAlt, link, ...rest} props 
 * @example with link
 *  return <Link to = {link}><button><img src = {icon} {...rest}></img>{label}</button></Link>
 * @example without link prop
 * return <button><img src = {icon} {...rest}></img>{label}</button>
 */
export default function Button(props) {
    const {label, icon, iconAlt, link, ...rest} = props;

    if(link) {
        return <Link to = {link} className="button-link"><button className="button" {...rest}>{icon && <img src = {icon} alt = {iconAlt}></img>}{label}</button></Link>
    }

    else {
        return <button className="button" {...rest}>{icon && <img src = {icon} alt ={iconAlt}></img>}{label}</button>

    }

}