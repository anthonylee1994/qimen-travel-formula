import React from "react";
import {Grid, GridItem, Text} from "@chakra-ui/react";
import {first, last} from "lodash";
import {BaziUtil} from "../utils/BaziUtil";
import {天干} from "../interfaces/天干";
import {地支} from "../interfaces/地支";
import {TwelveEventUtil} from "../utils/TwelveEventUtil";

interface Props {
    bazi: [string, string, string, string];
}

export const BaziTable = React.memo<Props>(({bazi}) => {
    const [, 月柱, 日柱] = bazi;
    const 月支 = last(月柱) as 地支;
    const 日干 = first(日柱) as 天干;
    const 日支 = last(日柱) as 地支;
    const 月建 = TwelveEventUtil.getDay(月支, 日支);

    return (
        <Grid p={1} templateColumns="repeat(1, 1fr)" gap={1}>
            <GridItem display="flex" alignItems="center" justifyContent="center" w="100%" fontSize="sm" h="6" bg="gray.200">
                日柱
            </GridItem>

            <GridItem fontWeight="bold" fontSize="xl" display="flex" alignItems="center" justifyContent="center" w="100%" h="10" bg="orange.100" color={BaziUtil.color(日干)}>
                {日干}
            </GridItem>

            <GridItem fontWeight="bold" fontSize="xl" display="flex" alignItems="center" justifyContent="center" w="100%" h="10" bg="orange.100" color={BaziUtil.color(日支)}>
                {日支}
            </GridItem>
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
            >
                <Text fontWeight="bold" fontSize="lg">
                    {月建}日
                </Text>
                <Text fontSize="sm" textAlign="center" color="orange.900">
                    {TwelveEventUtil.poemOf(月建)}
                </Text>
            </GridItem>
        </Grid>
    );
});
