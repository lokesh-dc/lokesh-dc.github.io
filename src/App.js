import { Grid } from "@chakra-ui/react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";
import ProjectsContainer from "./components/projects/container";

function App() {
	return (
		<Grid
			className="App"
			alignItems="center"
			justifyContent={"center"}
			gap={{ base: "20px", sm: "20px", md: "60px", lg: "40px" }}
			width={"100%"}
		>
			<Navbar />
			<Grid
				gap={{ base: "20px", sm: "20px", md: "60px", lg: "40px" }}
				px={{ base: "20px", sm: "20px", md: "100px", lg: "150px" }}
				width={"100%"}
				marginBottom={4}
			>
				<About />
				<TechStack />
				<ProjectsContainer />
				<Contact />
			</Grid>
		</Grid>
	);
}

export default App;
