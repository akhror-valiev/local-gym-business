import React from "react";
import { Link } from "react-scroll";

const Offer = () => {
	return (
		<div id="offer">
			<div className="pr-heading">
				<h1>
					A BIG <span>OFFER </span>FOR THIS SUMMER
				</h1>
				<p className="details">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
				<div className="pr-btns">
					<Link href="#" className="pr-btn">
						JOIN NOW
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Offer;
