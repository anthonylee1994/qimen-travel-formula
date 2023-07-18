import React from "react";
import {Flex, Grid} from "@chakra-ui/react";
import {last} from "lodash";
import {地支} from "../../interfaces/地支";
import {TwelveEventUtil} from "../../utils/TwelveEventUtil";
import {TwelveEvent} from "./TwelveEvent";
import {Bazi} from "../Bazi";
import {EarthPattern} from "./EarthPattern";
import {AngelDevil} from "./AngelDevil";
import {DisplayUtil} from "../../utils/DisplayUtil";
import {Lunar} from "lunar-typescript";
import {BaziUtil} from "../../utils/BaziUtil";
import {useAngelDevils} from "../../hooks/useAngelDevils";
import {useEarthPatterns} from "../../hooks/useEarthPatterns";

interface Props {
    lunar: Lunar;
}

export const BaziTable = React.memo<Props>(({lunar}) => {
    const {yearNobleMen, yearAngels, yearDevils, dayNobleMen, dayAngels, dayDevils} = useAngelDevils(lunar);
    const {年月關係, 月日關係, 年日關係} = useEarthPatterns(lunar);

    const bazi = BaziUtil.fromDate(lunar);
    const [, 月柱, 日柱] = bazi;
    const 月支 = last(月柱) as 地支;
    const 日支 = last(日柱) as 地支;
    const 月建 = TwelveEventUtil.getEvent(月支, 日支);

    return (
        <Grid p={1} templateColumns="repeat(1, 1fr)" gap={1}>
            <Bazi bazi={bazi} />
            <TwelveEvent event={月建} />
            <Flex gap={1}>
                <EarthPattern title="年月關係" values={年月關係} />
                <EarthPattern title="月日關係" values={月日關係} />
                <EarthPattern title="年日關係" values={年日關係} />
            </Flex>
            <Flex gap={1}>
                <AngelDevil title="年神煞" values={DisplayUtil.groupItems([...yearNobleMen, ...yearAngels, ...yearDevils])} />
                <AngelDevil title="日神煞" values={DisplayUtil.groupItems([...dayNobleMen, ...dayAngels, ...dayDevils])} />
            </Flex>
            <Flex gap={1}>
                <AngelDevil title="日月神煞" values={DisplayUtil.groupItems([...yearNobleMen, ...dayNobleMen, ...yearAngels, ...dayAngels, ...yearDevils, ...dayDevils])} />
            </Flex>
        </Grid>
    );
});
