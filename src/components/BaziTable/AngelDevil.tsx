import React from "react";
import {Flex, GridItem, Tag, Text} from "@chakra-ui/react";
import {AngelDevilUtil, 神煞} from "../../utils/AngelDevilUtil";

interface Props {
    title: string;
    values: string[];
}

export const AngelDevil = React.memo<Props>(({title, values}) => {
    if (values.length === 0) {
        return null;
    }

    return (
        <GridItem flexDirection="column" display="flex" alignItems="center" w="100%" p={1.5} color="purple.600" borderStyle="solid" borderWidth={2} borderColor="purple.300" bgColor="purple.50">
            <Text fontWeight="bold">{title}</Text>
            <Flex flexWrap="wrap" justifyContent="center">
                {values.map((value, index) => {
                    const isBad = AngelDevilUtil.isDevil(value as 神煞);

                    return (
                        <Tag size="sm" key={index} bgColor={isBad ? "gray.500" : "red.300"} m={0.5} color="white">
                            {value}
                        </Tag>
                    );
                })}
            </Flex>
        </GridItem>
    );
});
