import React from "react";
import {GridItem} from "@chakra-ui/react";
import {ScoreLucky} from "../../utils/TravelFormulaUtil";

interface Props {
    value: ScoreLucky;
}

export const LuckyCell = React.memo<Props>(({value}) => {
    return (
        <GridItem w={10} flexDirection="column" display="flex" alignItems="center" justifyContent="center" color="white" p={1} bgColor={value.includes("吉") ? "red.500" : "black"} fontWeight="bold">
            {value.split("").map(x => (
                <div key={x}>{x}</div>
            ))}
        </GridItem>
    );
});
