import { useState } from "react";
import "./sidebar.scss";
import { ReactSVG } from "react-svg";
import menuIcon from "../../assets/icons/menu_FILL0_wght400_GRAD0_opsz24.svg";
import closeIcon from "../../assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg"
import Button from "../Button/Button";
function Sidebar({ children }) {
	const categories = [
		{
			heading: "Organics",
			subs: ["Food waste", "Green waste", "Food-soiled paper"],
		},
		{
			heading: "Electronics",
			subs: [
				"Batteries",
				"Cell phones",
				"Large appliances",
				"Outdoor power equipment",
			],
		},
		{
			heading: "hazardous waste",
			subs: ["Paints", "Acids"],
		},
	];

	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => {
		setSidebar(!sidebar);
	};

	return (
		<div>
			<Button icon = {menuIcon} onClick={showSidebar} />
			<div className={sidebar ? "sidebar" : "sidebar--inactive"}>
				<div onClick={showSidebar}>X</div>
					{children}
				{/* {categories.map((category, index) => {
					return (
						<div
							key={index}
							className='sidebar__section'>
							<div className='sidebar__heading'>{`${category.heading}`}</div>
							<div className='sidebar__sub-section'>
								{category.subs.map((sub, index) => {
									return (
										<div
											key={index}
											className='sidebar__sub-heading'>{`${sub}`}</div>
									);
								})}
							</div>
							<div
								className={
									index + 1 < categories.length
										? "sidebar__divider"
										: ""
								}></div>
						</div>
					);
				})} */}
			</div>
		</div>
	);
}

export default Sidebar;
