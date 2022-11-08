import fimage1 from "../images/1.svg";
import fimage2 from "../images/2.svg";
import fimage3 from "../images/3.svg";
import fimage4 from "../images/4.svg";
import FeatureBox from "./FeatureBox";

const Feature = () => {
	return (
		<div id="features">
			<h1>FEATURES</h1>
			<div className="a-container">
				<FeatureBox image={fimage1} title="Mashqlar" />
				<FeatureBox image={fimage2} title="Mashqlar" />
				<FeatureBox image={fimage3} title="Mashqlar" />
				<FeatureBox image={fimage4} title="Mashqlar" />
			</div>
		</div>
	);
};

export default Feature;
