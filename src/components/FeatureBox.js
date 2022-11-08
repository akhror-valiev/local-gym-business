const FeatureBox = (props) => {
	return (
		<div className="a-box">
			<div className="a-b-img">
				<img src={props.image} alt="" />
			</div>
			<div className="a-b-text">
				<h2>{props.title}</h2>
				<p>
					Bizda turli xil mashqlar uchun turli xil mashq bajaruvchi
				</p>
			</div>
		</div>
	);
};

export default FeatureBox;
