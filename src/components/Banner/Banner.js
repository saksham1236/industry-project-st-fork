import { useRef } from "react";
import "./banner.scss";
import { motion, useScroll, useTransform } from "framer-motion";

function Banner({ backgroundURL, foregroundURL, title, textColor }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const textY = useTransform(scrollYProgress, [0, 0.6], ["0%", "140%"]);

	return (
		<div ref={ref} className="banner">
			<motion.div
				className="banner__text"
				style={{ y: textY, color: textColor }}>
				{title}
			</motion.div>
			<div
				className="banner__background"
				style={{
					backgroundImage: `url(${backgroundURL})`,
				}}></div>
			<div
				className="banner__foreground"
				style={{ backgroundImage: `url(${foregroundURL})` }}></div>
		</div>
	);
}

export default Banner;
