import { Flex, Text } from "@chakra-ui/react";

export default function UnOrderedList({ title = "", list = [] } = {}) {
	return (
		<Flex flexDirection={"column"}>
			{title ? <Text fontWeight={600}>{title} </Text> : null}
			{list ? (
				<ul>
					{list?.map((liItem, listId) => (
						<li key={listId} style={{ fontSize: "14px" }}>
							<div dangerouslySetInnerHTML={{ __html: liItem }} />
						</li>
					))}
				</ul>
			) : null}
		</Flex>
	);
}
