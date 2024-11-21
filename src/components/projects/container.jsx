import { Flex, Grid, GridItem, Text, Image, border } from "@chakra-ui/react";

import onScreenMovieImage from "../../Resources/Mockups/StreamXplore/streamxplore-avatar-trans.png";
import Heading from "../Heading";

import { LuExternalLink, LuCode } from "react-icons/lu";

export default function ProjectsContainer() {
	let data = [
		{
			type: "Service",
			title: "StreamXplore",
			desc: `A dynamic and intuitive movie database exploration platform designed to help users discover movies and series effortlessly. Built with Next.js and Tailwind CSS, StreamXplore offers real-time data, advanced search features, and a seamless browsing experience. Whether you're hunting for the latest releases or searching for hidden gems, StreamXplore delivers a fast and user-friendly interface to make finding your next favorite title a breeze.`,
			tech: ["NextJs", "Typescript", "Tailwind"],
			features: [
				"User Login & Signup functionality",
				"Ineract with blogs or create your own",
			],
			imgSrc: onScreenMovieImage,
			deployedLink: "https://onscreen-movie.vercel.app/",
			gitLink: "https://github.com/lokesh-dc/moviesearch",
		},
		{
			type: "Service",
			title: "StreamXplore",
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
	];

	return (
		<Flex
			flexDirection={"column"}
			maxWidth={{ sm: "80%", base: "80%", md: "90%", lg: "100%" }}
			margin="auto"
		>
			<Heading title="MY WORK" />
			<Grid
				templateColumns={{ sm: "1fr", md: "repeat(1,1fr)" }}
				gap={10}
				maxWidth={"100%"}
				overflowX={"scroll"}
				paddingX={5}
				paddingY={5}
			>
				{data?.map(
					(
						{ type, title, imgSrc, desc, tech, deployedLink, gitLink },
						cardId
					) => (
						<Grid
							key={cardId}
							style={{ boxShadow: "0px 4px 24px 0px rgba(140, 149, 159, 0.2)" }}
							padding={3}
							rounded={10}
							gap={5}
							backgroundColor={"#e7e7e785"}
							templateColumns={{ sm: "1fr", md: "repeat(2,1fr)" }}
							border={"1px solid rgba(0,0,0,0.1)"}
						>
							<GridItem>
								<Image rounded={8} src={imgSrc} alt="" />
							</GridItem>
							<GridItem
								display={"flex"}
								flexDirection={"column"}
								gap={1}
								textAlign={"start"}
							>
								<Flex
									flexDirection={{ base: "column", md: "row" }}
									alignItems={{ base: "start", md: "center" }}
									gap={{ base: 1, md: 5 }}
								>
									<Text fontSize={30} fontWeight={"bold"}>
										{title}
									</Text>
									<a target="_blank" href={deployedLink}>
										<Flex
											borderBottom={"2px solid transparent"}
											_hover={{ borderBottom: "2px solid gray" }}
											alignItems={"center"}
											gap={2}
											cursor={"pointer"}
										>
											<LuExternalLink />
											<span>Live Demo</span>
										</Flex>
									</a>
									<a target="_blank" href={gitLink}>
										<Flex
											borderBottom={"2px solid transparent"}
											_hover={{ borderBottom: "2px solid gray" }}
											alignItems={"center"}
											gap={2}
											cursor={"pointer"}
										>
											<LuCode />
											<span>Code</span>
										</Flex>
									</a>
								</Flex>
								<Text color={"rgba(0,0,0,0.8)"}>{desc}</Text>
								<Flex alignItems={"center"} gap={2}>
									{tech?.map((techItem, techId) => (
										<Text
											key={techId}
											border={"1px solid #016e2670"}
											borderRadius={"5px"}
											backgroundColor={"#defee930"}
											color={"#016e26"}
											fontSize={12}
											padding={1}
										>
											{techItem}
										</Text>
									))}
								</Flex>
							</GridItem>
						</Grid>
					)
				)}
			</Grid>
		</Flex>
	);
}
