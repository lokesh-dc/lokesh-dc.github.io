import { Flex, Grid } from "@chakra-ui/react";

export default function SocialMediaIcons() {
	return (
		<Flex
			gap="20px"
			justifyContent="space-evenly"
			alignItems="center"
			px={{ base: 10, sm: 0 }}
			id="contact-icons"
		>
			<a
				href="https://github.com/lokesh-dc"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={require("../Resources/icons/github.png")} alt="gitHub" />
			</a>
			<a
				href="https://www.linkedin.com/in/lokesh-dc/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={require("../Resources/icons/linked.png")} alt="Linked-in" />
			</a>
			<a
				href="mailto:lokesh.cdewanand@gmail.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={require("../Resources/icons/email.png")} alt="mail-me" />
			</a>
			<a href="tel:9172659994">
				<img src={require("../Resources/icons/phone.png")} alt="call-me" />
			</a>
		</Flex>
	);
}
