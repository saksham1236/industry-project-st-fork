import "./guideReasons.scss";

function GuideReasons({ data }) {
	return (
		<div
			className="guide-reasons"
			style={{
				backgroundColor: `${data.card_color}`,
				color: `${data.text_color}`,
			}}>
			<h1 className="guide-reasons__title">Environmental Impact</h1>
			<div className="guide-reasons__container">
				{data.reasons.map((reason, index) => (
					<p key={index} className="guide-reasons__list-item">
						{reason}
					</p>
				))}
			</div>
		</div>
	);
}

export default GuideReasons;
