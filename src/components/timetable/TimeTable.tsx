import React from "react";
import {Grid} from "@chakra-ui/react";
import {TravelFormulaUtil} from "../../utils/TravelFormulaUtil";
import {first} from "lodash";
import {天干} from "../../interfaces/天干";
import {地支} from "../../interfaces/地支";
import {HourCell} from "./HourCell";
import {PoemCell} from "./PoemCell";
import {LuckyCell} from "./LuckyCell";
import {BestWorstTimeCell} from "./BestWorstTimeCell";
import {AuspiciousTimeUtil} from "../../utils/AuspiciousTimeUtil";
import {FiveUnavoidableTimeUtil} from "../../utils/FiveUnavoidableTimeUtil";

interface Props {
    bazi: [string, string, string, string];
}

export const TimeTable = React.memo<Props>(({bazi}) => {
    const [, , 日柱, 時柱] = bazi;
    const 日干 = first(日柱) as 天干;
    const 時干 = first(時柱) as 天干;
    const 天干表 = Object.values(天干);
    const 地支表 = Object.values(地支);

    return (
        <Grid w="full" pt={0} px={1} pb={1} templateColumns="1fr 100fr 1fr 1fr" gap={1}>
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
                        <BestWorstTimeCell
                            type={AuspiciousTimeUtil.isAuspiciousTime(日干, 目前時支) ? "天顯時格" : FiveUnavoidableTimeUtil.isFiveUnavoidableTime(日干, 目前時干) ? "五不遇時" : null}
                        />
                    </React.Fragment>
                );
            })}
        </Grid>
    );
});
