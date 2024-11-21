import { Button, Grid, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Navbar() {
	const data = [
		{
			title: "[ About ]",
			to: "about-section",
			offset: -120,
		},
		{
			title: "[ Tech. ]",
			to: "tech-section",
			offset: -80,
		},
		{
			title: "[ Projects ]",
			to: "projects-section",
			offset: -90,
		},
		{
			title: "[ Contact ]",
			to: "contact-section",
			offset: -70,
		},
	];

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
			width={"100%"}
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
				{data?.map(({ to, offset, title }, navId) => (
					<Link
						key={navId}
						to={to}
						offset={offset}
						duration={500}
						spy={true}
						smooth={true}
					>
						{title}
					</Link>
				))}
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
					display={{ base: "none", sm: "none", lg: "flex" }}
					variant="outline"
					_hover={{ bg: "black", color: "white" }}
					letterSpacing={1}
					alignItems={"center"}
					gap={2}
					paddingX={8}
					paddingY={5}
				>
					RESUME
					<MdOutlineArrowOutward size={20} />
				</Button>
			</a>
		</Grid>
	);
}
