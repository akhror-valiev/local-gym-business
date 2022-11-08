import { Link } from "react-scroll";

const Header = () => {
	return (
		<div id="main">
			<div className="header-heading">
				<h2>STEP UP YOUR</h2>
				<h1>
					<span>FITENSS </span> WITH US
				</h1>
				<p className="details">
					Build your Body and Fitness with Proffessioanl Trainer
				</p>
				<div className="header-btns">
					<Link to href="#" className="header-btn">
						A'ZO BO'LING
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
