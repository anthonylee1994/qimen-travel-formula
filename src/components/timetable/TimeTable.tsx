import React from "react";
import {Grid} from "@chakra-ui/react";
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

interface Props {
    bazi: [string, string, string, string];
}

export const TimeTable = React.memo(({bazi}: Props) => {
    const [, , 日柱, 時柱] = bazi;
    const 日干 = first(日柱) as 天干;
    const 日支 = last(日柱) as 地支;
    const 時干 = first(時柱) as 天干;
    const 天干表 = Object.values(天干);
    const 地支表 = Object.values(地支);

    return (
        <Grid w="full" pt={0} px={1} pb={1} templateColumns="1fr 100fr 1fr 1fr 1fr" gap={1}>
            {地支表.map((目前時支, index) => {
                const 時干索引 = 天干表.indexOf(時干);
                const 目前時干 = 天干表[(時干索引 + index) % 10];
                const score = TravelFormulaUtil.totalScore([bazi[0], bazi[1], bazi[2], `${目前時干}${目前時支}`]);
                const result = TravelFormulaUtil.scoreMap[score];

                return (
                    <React.Fragment key={index}>
                        <HourCell score={score} hour={[目前時干, 目前時支]} />
                        <PoemCell value={result.poem} />
                        <LuckyCell value={result.lucky} />
                        <AstrologicalTimeCell type={AstrologicalTimeUtil.getType(日干, 目前時干, 目前時支)} />
                        <TwelveEventCell value={TwelveEventUtil.getDay(日支, 目前時支)} />
                    </React.Fragment>
                );
            })}
        </Grid>
    );
});
