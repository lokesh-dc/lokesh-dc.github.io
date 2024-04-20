import { Grid } from "@chakra-ui/react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import GitCalendar from "./components/gitHubCalendar";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Statistics from "./components/Statistics";
import TechStack from "./components/TechStack";

function App() {
	return (
		<Grid
			className="App"
			alignItems="center"
			justifyContent={"center"}
			gap={{ base: "20px", sm: "20px", md: "60px", lg: "40px" }}
		>
			<Navbar />
			<Grid
				gap={{ base: "20px", sm: "20px", md: "60px", lg: "40px" }}
				px={{ base: 0, sm: 0, md: "100px", lg: "150px" }}
			>
				<About />
				<TechStack />
				<Projects />
				{/* <Statistics /> */}
				<Skills />
				{/* <GitCalendar /> */}
				<Contact />
			</Grid>
		</Grid>
	);
}

export default App;
