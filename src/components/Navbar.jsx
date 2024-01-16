import { Button, Grid, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";
export default function Navbar() {
	return (
		<Grid
			templateColumns={{
				base: "1fr",
				sm: "1fr",
				md: "1fr",
				lg: "0.2fr 0.5fr 0.2fr",
			}}
			justifyContent="space-between"
			px={3}
			py={1}
			gap={{ base: "10px", sm: "10px" }}
			alignItems="center"
			pos={{ base: "static", md: "sticky" }}
			top="0"
			bg="white"
			zIndex="100"
			boxShadow="rgba(0, 0, 0, 0.04) 0px 3px 5px"
		>
			<Text id="logo">Lokesh-dc</Text>
			<Grid
				templateColumns={{
					base: "1fr",
					sm: "1fr 1fr 1fr",
					md: "repeat(5,1fr)",
					lg: "repeat(5,1fr)",
				}}
				rowGap={5}
				id="navbar"
				display={{ base: "none", sm: "none", md: "grid", lg: "grid" }}
			>
				<Link
					to="about-section"
					spy={true}
					smooth={true}
					offset={-120}
					duration={700}
				>
					.about()
				</Link>
				<Link
					to="tech-section"
					spy={true}
					smooth={true}
					offset={-80}
					duration={500}
				>
					.technologies()
				</Link>
				<Link
					to="skills-section"
					spy={true}
					smooth={true}
					offset={-80}
					duration={500}
				>
					.skills()
				</Link>
				<Link
					to="projects-section"
					spy={true}
					smooth={true}
					offset={-90}
					duration={500}
				>
					.projects()
				</Link>
				<Link
					to="contact-section"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					.contact()
				</Link>
			</Grid>

			<a
				href={require("../Resources/Resume.pdf")}
				download="Lokesh-Choudhary-Resume"
				className="m-hide"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Button
					display={{ base: "none", sm: "none", lg: "block" }}
					variant="outline"
					id="resume"
					_hover={{ bg: "white", color: "black" }}
					letterSpacing={1}
				>
					RESUME
				</Button>
			</a>
		</Grid>
	);
}
