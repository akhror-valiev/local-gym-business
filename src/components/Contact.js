import React from "react";

const Contact = () => {
	return (
		<div id="contact">
			<h1> BIZ BOG'LANING </h1>
			<form>
				<input type="text" placeholder="Toliq Ismingiz..." required />
				<input type="text" placeholder="Emailingiz..." required />
				<textarea
					placeholder="Takliflaringizni bu yerga yozing..."
					name="message"
				></textarea>
				<input type="submit" value="Jo'natish" />
			</form>
		</div>
	);
};

export default Contact;
