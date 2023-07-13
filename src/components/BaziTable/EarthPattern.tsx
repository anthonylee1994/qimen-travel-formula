import React from "react";
import {Flex, GridItem, Tag, Text} from "@chakra-ui/react";
import {地支關係} from "../../interfaces/地支關係";
import {EarthPatternUtil} from "../../utils/EarthPatternUtil";

interface Props {
    title: string;
    values: 地支關係[];
}

export const EarthPattern = React.memo<Props>(({title, values}) => {
    if (values.length === 0) {
        return null;
    }

    return (
        <GridItem flexDirection="column" display="flex" alignItems="center" w="100%" p={1.5} color="teal.600" borderStyle="solid" borderWidth={2} borderColor="teal.300" bgColor="teal.50">
            <Text fontWeight="bold">{title}</Text>
            <Flex flexWrap="wrap" justifyContent="center">
                {values.map((value, index) => {
                    const isBad = EarthPatternUtil.isBadPattern(value as 地支關係);

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
