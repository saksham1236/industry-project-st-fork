import "./guidePage.scss";
import GuideInstructionsComp from "../../components/GuideInstructionsComp/guideInstructionsComp";
import Banner from "../../components/Banner/Banner";
import GuideReasons from "../../components/GuideReasons/guideReasons";
import { useParams } from "react-router";
import Data from "../../data/guides.json";

export default function Guide() {
	const { id } = useParams();
	const filterData = Data.filter((data) => data.id === id);

	return (
		<>
			<Banner
				backgroundURL={filterData[0].bg}
				foregroundURL={filterData[0].fg}
				title={filterData[0].title}
				textColor={filterData[0].text_color}
			/>
			<GuideInstructionsComp data={filterData[0]} />
			<GuideReasons data={filterData[0]} />
		</>
	);
}
