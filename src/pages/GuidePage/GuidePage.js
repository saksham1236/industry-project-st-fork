import "./guidePage.scss";
import GuideInstructionsComp from "../../components/GuideInstructionsComp/guideInstructionsComp";
import Banner from "../../components/Banner/Banner";
import background from "../../assets/images/background-Recyclable.png";
import foreground from "../../assets/images/foreground-recyclable.png";

export default function Guide() {
	return (
		<>
			<Banner backgroundURL={background} foregroundURL={foreground} />
			<GuideInstructionsComp />
			<GuideInstructionsComp />
			<GuideInstructionsComp />
		</>
	);
}
