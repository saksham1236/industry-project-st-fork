import { useRef } from "react";
import "./banner.scss";
import { useScroll, useTransform } from "framer-motion";

function Banner({ backgroundURL, foregroundURL }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end end"],
	});

	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

	return (
		<div ref={ref} className="banner">
			<div className="banner__text">Hello World!</div>
			<div
				className="banner__background"
				style={{ backgroundImage: `url(${backgroundURL})` }}></div>
			<div
				className="banner__foreground"
				style={{ backgroundImage: `url(${foregroundURL})` }}></div>
		</div>
	);
}

export default Banner;
