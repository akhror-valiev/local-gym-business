import React from "react";
import aboutimage from "../images/about.jpeg";

const About = () => {
	return (
		<div id="about">
			<div className="about-image">
				<img src={aboutimage} alt="" />
			</div>

			<div className="about-text">
				<h1>BIZ HAQIMIZDA KOPROQ MA'LUMOT...</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
					vel molestias magni architecto, blanditiis veritatis, quis quaerat eum
					quidem quam soluta deleniti! Quaerat delectus aliquid accusantium
					totam, praesentium illum voluptate.
					<div>
						<button>Davom Ettirish</button>
					</div>
				</p>
			</div>
		</div>
	);
};

export default About;
