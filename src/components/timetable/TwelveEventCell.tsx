import {GridItem, Text} from "@chakra-ui/react";
import React from "react";
import {TwelveEventUtil} from "../../utils/TwelveEventUtil";
import {十二月將, 十二月建} from "../../interfaces/十二月建";

interface Props {
    event: 十二月建;
    general: 十二月將;
}

export const TwelveEventCell = React.memo<Props>(({event, general}) => {
    return (
        <GridItem w={6} p={1} fontSize="sm" display="flex" flexDirection="column" alignItems="center" justifyContent="center" bgColor="orange.200" fontWeight="bold" color="orange.700">
            <Text
                mb={1}
                flexDirection="column"
                fontWeight="500"
                fontSize="xs"
                color="white"
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                bgColor="orange.400"
            >
                {general}
                <Text w={4} borderBottomRadius="md" color="orange.700" bgColor="orange.300">
                    {TwelveEventUtil.getGeneralDiZhi(general)}
                </Text>
            </Text>
            <Text>{event}</Text>
        </GridItem>
    );
});
