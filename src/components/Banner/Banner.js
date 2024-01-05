import "./banner.scss";
function Banner({ imgURl, Text }) {
	return (
		<>
			<div className="banner">
				<div
					className="banner__content"
					style={{ backgroundImage: `url(${imgURl})` }}>
					<div className="banner__text">{Text}</div>
				</div>
			</div>
		</>
	);
}

export default Banner;
