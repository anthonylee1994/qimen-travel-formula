import React from "react";
import {天干} from "../../interfaces/天干";
import {地支} from "../../interfaces/地支";
import {BaziUtil} from "../../utils/BaziUtil";
import {Flex, GridItem} from "@chakra-ui/react";

interface Props {
    score: number;
    hour: [天干, 地支];
}

export const HourCell = React.memo<Props>(({hour: [天干, 地支], score}) => {
    return (
        <GridItem w={10} display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" bgColor="gray.100" fontWeight="bold">
            <Flex justifyContent="center" alignItems="center" w="full" bgColor="orange.200" color="orange.700" fontSize="11px">
                {score}數
            </Flex>
            <Flex flexGrow={1} flexDirection="column" justifyContent="center" alignItems="center">
                <Flex color={BaziUtil.color(天干)}>{天干}</Flex>
                <Flex color={BaziUtil.color(地支)}>{地支}</Flex>
            </Flex>
            <Flex justifyContent="center" alignItems="center" w="full" fontFamily="monospace" bgColor="gray.300" color="gray.500" fontSize="11px">
                {BaziUtil.hourDisplay(地支)}
            </Flex>
        </GridItem>
    );
});
