import "./guidePage.scss";
import GuideInstructionsComp from "../../components/GuideInstructionsComp/guideInstructionsComp";
import Banner from "../../components/Banner/Banner";
import backgroundHaz from "../../assets/images/background-hazardous.png";
import foregroundHaz from "../../assets/images/foreground-hazardous.png";
import backgroundOrg from "../../assets/images/background-organic.png";
import foregroundOrg from "../../assets/images/foreground-organic.png";
import { useParams } from "react-router";
import Data from "../../data/guides.json";

export default function Guide() {
	const { id } = useParams();

	const bannerImages = [
		{
			id: "1",
			bg: backgroundHaz,
			fg: foregroundHaz,
		},
		{ id: "2", bg: backgroundOrg, fg: foregroundOrg },
	];

	const filterImages = bannerImages.filter((obj) => obj.id === id);
	const filterData = Data.filter((data) => data.id === id);

	return (
		<>
			<Banner
				backgroundURL={filterImages[0].bg}
				foregroundURL={filterImages[0].fg}
				title={filterData[0].title}
			/>
			<GuideInstructionsComp id={id} data={filterData[0]} />
		</>
	);
}
