import React from "react";
import {Grid, GridItem} from "@chakra-ui/react";
import {BaziUtil} from "../utils/BaziUtil";
import {first, last} from "lodash";
import {天干} from "../interfaces/天干";
import {地支} from "../interfaces/地支";

interface Props {
    bazi: [string, string, string, string];
}

export const Bazi = React.memo(({bazi}: Props) => {
    const [年柱, 月柱, 日柱] = bazi;
    const 年干 = first(年柱) as 天干;
    const 年支 = last(年柱) as 地支;
    const 月干 = first(月柱) as 地支;
    const 月支 = last(月柱) as 地支;
    const 日干 = first(日柱) as 天干;
    const 日支 = last(日柱) as 地支;

    return (
        <Grid templateColumns="1fr 1fr 1fr">
            <Grid>
                <GridItem display="flex" alignItems="center" justifyContent="center" w="100%" fontSize="sm" h="6" bg="gray.200">
                    年柱
                </GridItem>

                <GridItem fontWeight="bold" fontSize="xl" display="flex" alignItems="center" justifyContent="center" w="100%" h="10" bg="orange.100" color={BaziUtil.color(年干)}>
                    {年干}
                </GridItem>

                <GridItem fontWeight="bold" fontSize="xl" display="flex" alignItems="center" justifyContent="center" w="100%" h="10" bg="orange.100" color={BaziUtil.color(年支)}>
                    {年支}
                </GridItem>
            </Grid>

            <Grid>
                <GridItem display="flex" alignItems="center" justifyContent="center" w="100%" fontSize="sm" h="6" bg="gray.200">
                    月柱
                </GridItem>

                <GridItem fontWeight="bold" fontSize="xl" display="flex" alignItems="center" justifyContent="center" w="100%" h="10" bg="orange.100" color={BaziUtil.color(月干)}>
                    {月干}
                </GridItem>

                <GridItem fontWeight="bold" fontSize="xl" display="flex" alignItems="center" justifyContent="center" w="100%" h="10" bg="orange.100" color={BaziUtil.color(月支)}>
                    {月支}
                </GridItem>
            </Grid>

            <Grid>
                <GridItem display="flex" alignItems="center" justifyContent="center" w="100%" fontSize="sm" h="6" bg="gray.200">
                    日柱
                </GridItem>

                <GridItem fontWeight="bold" fontSize="xl" display="flex" alignItems="center" justifyContent="center" w="100%" h="10" bg="orange.100" color={BaziUtil.color(日干)}>
                    {日干}
                </GridItem>

                <GridItem fontWeight="bold" fontSize="xl" display="flex" alignItems="center" justifyContent="center" w="100%" h="10" bg="orange.100" color={BaziUtil.color(日支)}>
                    {日支}
                </GridItem>
            </Grid>
        </Grid>
    );
});
