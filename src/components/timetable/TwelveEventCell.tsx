import {GridItem, Tag, Text} from "@chakra-ui/react";
import React from "react";
import {TwelveEventUtil} from "../../utils/TwelveEventUtil";
import {十二月將, 十二月建} from "../../interfaces/十二月建";

interface Props {
    event: 十二月建;
    general: 十二月將;
}

export const TwelveEventCell = React.memo<Props>(({event, general}) => {
    return (
        <GridItem
            w="full"
            p={1}
            pb={2}
            fontSize="sm"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            fontWeight="bold"
            borderStyle="solid"
            borderWidth={2}
            borderColor="orange.300"
            bgColor="orange.50"
            color="orange.600"
        >
            <Text>{event}</Text>
            <Tag pr={0} mt={1} display="flex" alignItems="center" justifyContent="space-between" textAlign="center" bgColor="orange.400" color="white">
                {general}
                <Tag ml={2} borderBottomRadius="md" color="orange.700" bgColor="orange.300">
                    {TwelveEventUtil.getGeneralDiZhi(general)}
                </Tag>
            </Tag>
        </GridItem>
    );
});
