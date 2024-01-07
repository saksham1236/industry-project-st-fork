import "./Button.scss";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
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
        return <Link to = {link} className="button-link"><button className="button" {...rest}>{icon && <ReactSVG src = {icon} />}{label}</button></Link>
    }
    else if(label) {
        return <button className="button" {...rest}>{icon && <ReactSVG src = {icon} />}{label}</button>
    }
    else {
        return <button className="button button-icon" {...rest}>{icon && <ReactSVG src = {icon} />}</button>
    }

}