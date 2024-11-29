import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import UnOrderedList from "../../List";

import { LuExternalLink, LuCode } from "react-icons/lu";

export default function ProjectCard({
	type,
	title,
	imgSrc,
	desc,
	tech,
	deployedLink,
	gitLink,
	features,
	impact,
}) {
	return (
		<Grid
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
				gap={2}
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
					<Flex gap={{ base: 3, md: 5 }}>
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
						|
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
				</Flex>

				<Text color={"rgba(0,0,0,0.8)"}>{desc}</Text>
				<Flex flexWrap={"wrap"} alignItems={"center"} gap={2}>
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
				{features && Array.isArray(features) ? (
					<UnOrderedList title="Key Features:" list={features} />
				) : null}
			</GridItem>
		</Grid>
	);
}
