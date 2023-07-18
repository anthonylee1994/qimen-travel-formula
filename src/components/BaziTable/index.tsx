import React from "react";
import {Flex, Grid} from "@chakra-ui/react";
import {first, last} from "lodash";
import {地支} from "../../interfaces/地支";
import {TwelveEventUtil} from "../../utils/TwelveEventUtil";
import {TwelveEvent} from "./TwelveEvent";
import {Bazi} from "../Bazi";
import {EarthPattern} from "./EarthPattern";
import {AngelDevil} from "./AngelDevil";
import {EarthPatternUtil} from "../../utils/EarthPatternUtil";
import {AngelDevilUtil} from "../../utils/AngelDevilUtil";
import {天干} from "../../interfaces/天干";
import {NobleManUtil} from "../../utils/NobleManUtil";
import {DisplayUtil} from "../../utils/DisplayUtil";

interface Props {
    bazi: [string, string, string, string];
}

export const BaziTable = React.memo<Props>(({bazi}) => {
    const [年柱, 月柱, 日柱] = bazi;
    const 年干 = first(年柱) as 天干;
    const 年支 = last(年柱) as 地支;
    const 月干 = first(月柱) as 天干;
    const 月支 = last(月柱) as 地支;
    const 日干 = first(日柱) as 天干;
    const 日支 = last(日柱) as 地支;
    const 月建 = TwelveEventUtil.getEvent(月支, 日支);

    const 年神煞 = [
        ...AngelDevilUtil.getAngelDevil(年支, 年支),
        ...AngelDevilUtil.getAngelDevil(年支, 月支),
        ...AngelDevilUtil.getAngelDevil(年支, 日支),
        ...(NobleManUtil.is天乙貴人(年干, 年支) ? ["天乙貴人"] : []),
        ...(NobleManUtil.is天乙貴人(月干, 年支) ? ["天乙貴人"] : []),
        ...(NobleManUtil.is天乙貴人(日干, 年支) ? ["天乙貴人"] : []),
    ];

    const 月神煞 = [
        ...AngelDevilUtil.getAngelDevil(月支, 年支),
        ...AngelDevilUtil.getAngelDevil(月支, 月支),
        ...AngelDevilUtil.getAngelDevil(月支, 日支),
        ...(NobleManUtil.is天乙貴人(年干, 月支) ? ["天乙貴人"] : []),
        ...(NobleManUtil.is天乙貴人(月干, 月支) ? ["天乙貴人"] : []),
        ...(NobleManUtil.is天乙貴人(日干, 月支) ? ["天乙貴人"] : []),
        ...(NobleManUtil.is月德貴人(年干, 月支) ? ["月德貴人"] : []),
        ...(NobleManUtil.is月德貴人(月干, 月支) ? ["月德貴人"] : []),
        ...(NobleManUtil.is月德貴人(日干, 月支) ? ["月德貴人"] : []),
    ];
    const 日神煞 = [
        ...AngelDevilUtil.getAngelDevil(日支, 年支),
        ...AngelDevilUtil.getAngelDevil(日支, 月支),
        ...AngelDevilUtil.getAngelDevil(日支, 日支),
        ...(NobleManUtil.is天乙貴人(年干, 日支) ? ["天乙貴人"] : []),
        ...(NobleManUtil.is天乙貴人(月干, 日支) ? ["天乙貴人"] : []),
        ...(NobleManUtil.is天乙貴人(日干, 日支) ? ["天乙貴人"] : []),
    ];

    return (
        <Grid p={1} templateColumns="repeat(1, 1fr)" gap={1}>
            <Bazi bazi={bazi} />
            <TwelveEvent value={月建} />
            <Flex gap={1}>
                <EarthPattern title="年月關係" values={EarthPatternUtil.getPatterns(年支, 月支)} />
                <EarthPattern title="月日關係" values={EarthPatternUtil.getPatterns(月支, 日支)} />
                <EarthPattern title="年日關係" values={EarthPatternUtil.getPatterns(年支, 日支)} />
            </Flex>
            <Flex gap={1}>
                <AngelDevil title="年神煞" values={DisplayUtil.groupItems(年神煞)} />
                <AngelDevil title="月神煞" values={DisplayUtil.groupItems(月神煞)} />
                <AngelDevil title="日神煞" values={DisplayUtil.groupItems(日神煞)} />
            </Flex>
        </Grid>
    );
});
