import { Box, Text, Img } from "@chakra-ui/react";

export default function Profile() {
	let str = "<Profile>";
	let str2 = "</Profile>";
	return (
		<Box pos="relative">
			<Img
				src={require("../Resources/profile.jpeg")}
				alt="Lokesh-Choudhary-Profile"
				w="90%"
				borderRadius={"20% 0 20% 10%"}
				fetchPriority="high"
				boxShadow="rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;"
				backgroundColor={"rgba(0,0,0,0.14)"}
				padding={"3"}
			/>

			<Text
				className="logo"
				fontSize="xl"
				// color="#d6d6d6"
				color={"black.200"}
				pos="absolute"
				top="0"
				left="0"
			>
				{" "}
				{str}{" "}
			</Text>
			<Text
				className="logo"
				fontSize="xl"
				// color="#d6d6d6"
				color={"black.200"}
				pos="absolute"
				bottom="0"
				right="0"
			>
				{str2}
			</Text>
		</Box>
	);
}
