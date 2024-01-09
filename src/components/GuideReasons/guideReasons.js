import "./guideReasons.scss";

function GuideReasons({ data }) {
	return (
		<div
			className="guide-reasons"
			style={{
				backgroundColor: `${data.card_color}`,
				color: `${data.text_color}`,
			}}
		>
			<h1 className="guide-reasons__title">Environmental Impact</h1>
			<div className="guide-reasons__container">
				{data.reasons.map((reason, index) => (
					<div key={index} className="guide-reasons__list-item">
						<img
							src={reason.icon}
							alt={`reason icon`}
							className="guide-reasons__icon"
						/>
						<span>{reason.text}</span>
					</div>
				))}
			</div>
		</div>
	);
}

export default GuideReasons;