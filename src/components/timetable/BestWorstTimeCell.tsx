import React from "react";
import {GridItem} from "@chakra-ui/react";
import {BestWorstTimeType} from "../../utils/TravelFormulaUtil";

interface Props {
    type: BestWorstTimeType | null;
}

export const BestWorstTimeCell = React.memo<Props>(({type}) => {
    return (
        <GridItem
            w={6}
            p={1}
            fontSize="sm"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            color="white"
            bgColor={type === "天顯時格" ? "pink.500" : type === "五不遇時" ? "blue.500" : "gray.300"}
            fontWeight="bold"
        >
            {type}
        </GridItem>
    );
});
