import "./guideListComp.scss";

function GuideListComponent({ id, steps, image }) {
	console.log(steps);

	return (
		<div className="guide-list">
			<div className="guide-list__list-container">
				{steps.map((step, index) => (
					<p key={index} className="guide-list__step">
						{step}
					</p>
				))}
			</div>
		</div>
	);
}

export default GuideListComponent;
