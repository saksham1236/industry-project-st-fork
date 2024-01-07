import "./guidePage.scss";
import GuideInstructionsComp from "../../components/GuideInstructionsComp/guideInstructionsComp";
import Banner from "../../components/Banner/Banner";
import background from "../../assets/images/background-organic.png";
import foreground from "../../assets/images/foreground-organic.png";

export default function Guide() {
	const title = "Organic";
	return (
		<>
			<Banner
				backgroundURL={background}
				foregroundURL={foreground}
				title={title}
			/>
			<GuideInstructionsComp />
		</>
	);
}
