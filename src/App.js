import About from "./components/About";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Header />
			<Feature />
			<Offer />
			<About />
			<Contact />
		</div>
	);
}

export default App;
