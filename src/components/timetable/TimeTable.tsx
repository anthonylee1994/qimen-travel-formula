import React from "react";
import {Flex, Grid} from "@chakra-ui/react";
import {TravelFormulaUtil} from "../../utils/TravelFormulaUtil";
import {first, last} from "lodash";
import {天干} from "../../interfaces/天干";
import {地支} from "../../interfaces/地支";
import {HourCell} from "./HourCell";
import {PoemCell} from "./PoemCell";
import {LuckyCell} from "./LuckyCell";
import {AstrologicalTimeCell} from "./AstrologicalTimeCell";
import {AstrologicalTimeUtil} from "../../utils/AstrologicalTimeUtil";
import {TwelveEventCell} from "./TwelveEventCell";
import {TwelveEventUtil} from "../../utils/TwelveEventUtil";
import {EarthPatternCell} from "./EarthPatternCell";
import {EarthPatternUtil} from "../../utils/EarthPatternUtil";
import {AngleDevilCell} from "./AngelDevilCell";
import {AngelDevilUtil} from "../../utils/AngelDevilUtil";
import {DisplayUtil} from "../../utils/DisplayUtil";
import {NobleManUtil} from "../../utils/NobleManUtil";
import {Lunar} from "lunar-typescript";
import {BaziUtil} from "../../utils/BaziUtil";
import {useAngelDevils} from "../../hooks/useAngelDevils";
import {useEarthPatterns} from "../../hooks/useEarthPatterns";

interface Props {
    lunar: Lunar;
}

export const TimeTable = React.memo(({lunar}: Props) => {
    const {totalNobleMen, totalAngels, totalDevils} = useAngelDevils(lunar);
    const {年月關係, 月日關係, 年日關係} = useEarthPatterns(lunar);
    const bazi = BaziUtil.fromDate(lunar);
    const [年柱, 月柱, 日柱, 時柱] = bazi;
    const 年干 = first(年柱) as 天干;
    const 年支 = last(年柱) as 地支;
    const 月支 = last(月柱) as 地支;
    const 日干 = first(日柱) as 天干;
    const 日支 = last(日柱) as 地支;
    const 時干 = first(時柱) as 天干;
    const 天干表 = Object.values(天干);
    const 地支表 = Object.values(地支);
    const 十二神 = TwelveEventUtil.getGenerals(lunar.getPrevQi().getName(), 日支);

    return (
        <Grid w="full" pt={0} px={1} pb={1} templateColumns="1fr 100fr 1fr 1fr 1fr" gap={1}>
            {地支表.map((目前時支, index) => {
                const 時干索引 = 天干表.indexOf(時干);
                const 目前時干 = 天干表[(時干索引 + index) % 10];
                const score = TravelFormulaUtil.totalScore([bazi[0], bazi[1], bazi[2], `${目前時干}${目前時支}`]);
                const result = TravelFormulaUtil.scoreMap[score];

                const angelDevils = [...AngelDevilUtil.getAngelDevil(目前時支, 年支), ...AngelDevilUtil.getAngelDevil(目前時支, 月支), ...AngelDevilUtil.getAngelDevil(目前時支, 日支)];
                const nobleMen = [...(NobleManUtil.is天乙貴人(年干, 目前時支) ? ["天乙貴人"] : []), ...(NobleManUtil.is天乙貴人(日干, 目前時支) ? ["天乙貴人"] : [])];
                const angels = angelDevils.filter(AngelDevilUtil.isAngel);
                const devils = angelDevils.filter(AngelDevilUtil.isDevil);

                const earthPatterns = [
                    ...年月關係,
                    ...月日關係,
                    ...年日關係,
                    ...EarthPatternUtil.getPatterns(目前時支, 年支),
                    ...EarthPatternUtil.getPatterns(目前時支, 月支),
                    ...EarthPatternUtil.getPatterns(目前時支, 日支),
                ];

                return (
                    <React.Fragment key={index}>
                        <HourCell score={score} hour={[目前時干, 目前時支]} />
                        <PoemCell value={result.poem} />
                        <LuckyCell value={result.lucky} />
                        <AstrologicalTimeCell type={AstrologicalTimeUtil.getType(日干, 目前時干, 目前時支)} />
                        <Flex bgColor="red" width="100px" flexDirection="column">
                            <EarthPatternCell
                                values={DisplayUtil.groupItems([...earthPatterns.filter(_ => !EarthPatternUtil.isBadPattern(_)), ...earthPatterns.filter(EarthPatternUtil.isBadPattern)])}
                            />
                            <AngleDevilCell values={DisplayUtil.groupItems([...totalNobleMen, ...nobleMen, ...totalAngels, ...angels, ...totalDevils, ...devils])} />
                            <TwelveEventCell event={TwelveEventUtil.getEvent(日支, 目前時支)} general={十二神[index]} />
                        </Flex>
                    </React.Fragment>
                );
            })}
        </Grid>
    );
});
