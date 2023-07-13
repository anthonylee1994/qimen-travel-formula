import React from "react";
import {GridItem, Text} from "@chakra-ui/react";
import {TwelveEventUtil} from "../../utils/TwelveEventUtil";
import {十二月建} from "../../interfaces/十二月建";

interface Props {
    value: 十二月建;
}

export const TwelveEvent = React.memo<Props>(({value}) => {
    return (
        <GridItem
            flexDirection="column"
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="100%"
            p={1.5}
            color="orange.600"
            borderStyle="solid"
            borderWidth={2}
            borderColor="orange.300"
            bgColor="orange.50"
        >
            <Text fontWeight="bold" fontSize="lg">
                {value}日
            </Text>
            <Text fontSize="sm" textAlign="center" color="orange.900">
                {TwelveEventUtil.poemOf(value)}
            </Text>
        </GridItem>
    );
});
