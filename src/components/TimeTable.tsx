import React from "react";
import {Grid, GridItem} from "@chakra-ui/react";
import {TravelFormulaUtil} from "../utils/TravelFormulaUtil";
import {first} from "lodash";
import {天干} from "../interfaces/天干";
import {地支} from "../interfaces/地支";
import {BaziUtil} from "../utils/BaziUtil";

interface Props {
    bazi: [string, string, string, string];
}

export const TimeTable = React.memo<Props>(({bazi}) => {
    const [, , , 時柱] = bazi;
    const 時干 = first(時柱) as 天干;
    const 天干表 = Object.values(天干);
    const 地支表 = Object.values(地支);

    return (
        <Grid w="full" pt={0} px={1} pb={1} templateColumns="1fr 100fr 1fr" gap={1}>
            {地支表.map((目前時支, index) => {
                const 時干索引 = 天干表.indexOf(時干);
                const 目前時干 = 天干表[(時干索引 + index) % 10];
                const score = TravelFormulaUtil.totalScore([bazi[0], bazi[1], bazi[2], `${目前時干}${目前時支}`]);
                const result = TravelFormulaUtil.scoreMap[score];

                return (
                    <React.Fragment key={index}>
                        <GridItem w={10} display="flex" alignItems="center" justifyContent="center" bgColor="gray.100" p={1} color={BaziUtil.color(目前時支)} fontWeight="bold">
                            {目前時支}
                        </GridItem>
                        <GridItem flexGrow={1} display="flex" alignItems="center" justifyContent="center" bgColor="gray.100" p={1}>
                            {result.poem}
                        </GridItem>
                        <GridItem
                            w={10}
                            flexDirection="column"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            color="white"
                            p={1}
                            bgColor={result.lucky.includes("吉") ? "red.500" : "black"}
                            fontWeight="bold"
                        >
                            {result.lucky.split("").map(x => (
                                <div key={x}>{x}</div>
                            ))}
                        </GridItem>
                    </React.Fragment>
                );
            })}
        </Grid>
    );
});
