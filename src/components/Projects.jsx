import { Grid, Text } from "@chakra-ui/react";
import Heading from "./Heading";
import ProjectCard from "./ProjectCard";

import onScreenMovieImage from "../Resources/Projects/movie_search.png";
import blogProjectImage from "../Resources/Projects/blog.png";
import timeCampProjectImage from "../Resources/Projects/timecamp.png";
import monsterIndiaProjectImage from "../Resources/Projects/monsterIndia.png";
import beautyBeboProjectImage from "../Resources/Projects/beautyBebo.png";
import ndtvProjectImage from "../Resources/Projects/ndtv.png";
import weatherProjectImage from "../Resources/Projects/weather.png";

const ProjectDetails = [
	{
		title: "OnScreen Movie Search App",
		desc: "Built an interactive movie website to let user search over number of movies and series",
		tech: ["NextJs", "TailwindCSS"],
		features: [
			"User Login & Signup functionality",
			"Ineract with blogs or create your own",
		],
		imgSrc: onScreenMovieImage,
		deployedLink: "https://onscreen-movie.vercel.app/",
		gitLink: "https://github.com/lokesh-dc/moviesearch",
	},
	{
		title: "Medium.com",
		desc: "Interactive blog website for users to comment blog and write thier own blog as well",
		tech: [
			"HTML",
			"CSS",
			"JavaScript",
			"React",
			"Redux",
			"Node Js",
			"Express JS",
			"JWT",
			"MongoDB",
		],
		features: [
			"User Login & Signup functionality",
			"Ineract with blogs or create your own",
		],
		imgSrc: blogProjectImage,
		deployedLink: "https://idyllic-concha-85c2f8.netlify.app/",
		gitLink: "https://github.com/lokesh-dc/Blog-App",
	},
	{
		title: "Timecamp.com",
		src: "../Resources/Projects/monsterIndia.png",
		desc: "Timecamp.com is a tool for time tracking your current or upcoming projects/tasks.",
		tech: [
			"HTML",
			"CSS",
			"JavaScript",
			"React",
			"Mongo DB",
			"Mongoose",
			"Express JS",
			"Node JS",
		],
		features: ["Built backend API using Mongo DB", "Login/Signup for users"],
		imgSrc: timeCampProjectImage,
		deployedLink: "https://roaring-travesseiro-7b0d65.netlify.app/",
		gitLink: "https://github.com/lokesh-dc/TimeCampClone",
	},
	{
		title: "MonsterIndia.com",
		src: "../Resources/Projects/monsterIndia.png",
		desc: "Monster India is an online employment solution for people seeking jobs.",
		tech: ["HTML", "CSS", "JavaScript", "React", "API"],
		features: [
			"End to end User flow Different sorting & filtering features",
			"Login &Signup for users",
		],
		imgSrc: monsterIndiaProjectImage,
		deployedLink: "https://joyful-elf-e0863a.netlify.app/",
		gitLink: "https://github.com/lokesh-dc/Monser-India-Clone",
	},
	{
		title: "BeautyBebo.com",
		src: "../Resources/Projects/monsterIndia.png",
		desc: "Beauty Bebo is India’s fastest-growing online retail store for beauty products.",
		tech: ["HTML", "CSS", "JavaScript", "API"],
		features: [
			"Search, Sorting & Filtering functionalities",
			"Login &Signup for users",
		],
		imgSrc: beautyBeboProjectImage,
		deployedLink: "https://bright-puppy-c195ee.netlify.app/",
		gitLink: "https://github.com/lokesh-dc/Beauty-Bebo-Clone",
	},
	{
		title: "NDTV.com",
		src: "../Resources/Projects/monsterIndia.png",
		desc: "New Delhi Television Ltd is an Indian news media company focusing on broadcast and digital news publication.",
		tech: ["HTML", "CSS", "JavaScript", "API"],
		features: ["Search, Sorting & Filtering functionalities"],
		imgSrc: ndtvProjectImage,
		deployedLink: "https://loquacious-paletas-d45019.netlify.app/",
		gitLink: "https://github.com/lokesh-dc/Ndtv-clone",
	},
	{
		title: "Weather App",
		desc: "An App to get weather for your hometown or search for place you may plan to travel.",
		tech: ["HTML", "CSS", "JavaScript", "API"],
		imgSrc: weatherProjectImage,
		deployedLink: "https://hilarious-alpaca-f7c2a1.netlify.app/",
		gitLink: "https://github.com/lokesh-dc/Weather-App",
	},
];

export default function Projects() {
	return (
		<Grid
			id="projects-section"
			w={{ sm: "80%", base: "80%", md: "90%", lg: "100%" }}
			margin="auto"
		>
			<Heading title="PROJECTS" />
			<Grid
				id="projects"
				templateColumns={{
					base: "1fr",
					sm: "1fr",
					md: "repeat(2,1fr)",
					lg: "repeat(4,1fr)",
				}}
				gap="50px"
				pos="relative"
			>
				{ProjectDetails?.map((item, index) => (
					<Grid pos={"relative"}>
						<Text
							className="projectNumber"
							pos={"absolute"}
							fontSize="3rem"
							top={"-10"}
							left={{ base: "0", lg: "-10" }}
						>
							0{index + 1}
						</Text>
						<img src={item?.imgSrc} alt="" />
						<ProjectCard key={3} details={item} />
						<Grid
							templateColumns="1fr 1fr"
							m="10px"
							gap="10px"
							className="projectbuttons"
						>
							<a href={item?.gitLink} target="_blank" rel="noopener noreferrer">
								<button variant="outline" className="gitCode">
									CODE
								</button>
							</a>
							<a
								href={item?.deployedLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="live">LIVE</button>
							</a>
						</Grid>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
}
