import { useRef } from "react";
import "./banner.scss";
import { motion, useScroll, useTransform } from "framer-motion";

function Banner({ backgroundURL, foregroundURL }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "180%"]);

	return (
		<div ref={ref} className="banner">
			<motion.div className="banner__text" style={{ y: textY }}>
				Hello World!
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
