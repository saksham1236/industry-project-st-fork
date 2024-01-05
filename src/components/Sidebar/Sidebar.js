import { useState } from "react";
import "./sidebar.scss";
function Sidebar() {
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
			<button onClick={showSidebar}>Show sidebar</button>
			<div className={sidebar ? "sidebar" : "sidebar--inactive"}>
				<div onClick={showSidebar}>X</div>
				<div className="sidebar__title">Categories</div>
				{categories.map((category, index) => {
					return (
						<div key={index} className="sidebar__section">
							<div className="sidebar__heading">{`${category.heading}`}</div>
							<div className="sidebar__sub-section">
								{category.subs.map((sub, index) => {
									return (
										<div
											key={index}
											className="sidebar__sub-heading">{`${sub}`}</div>
									);
								})}
							</div>
							<div
								className={
									index + 1 < categories.length ? "sidebar__divider" : ""
								}></div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Sidebar;
