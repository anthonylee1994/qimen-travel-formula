import React from "react";
import {GridItem} from "@chakra-ui/react";
import {AstrologicalTimeType} from "../../utils/TravelFormulaUtil";

interface Props {
    type: AstrologicalTimeType | null;
}

export const AstrologicalTimeCell = React.memo<Props>(({type}) => {
    return (
        <GridItem w={6} p={1} fontSize="sm" display="flex" flexDirection="column" alignItems="center" justifyContent="center" color="white" bgColor={bgColor(type)} fontWeight="bold">
            {type}
        </GridItem>
    );
});

const bgColor = (type: AstrologicalTimeType | null) => {
    switch (type) {
        case "天顯時格":
            return "pink.500";
        case "五不遇時":
            return "blue.500";
        case "時干入墓":
            return "green.500";
        default:
            return "gray.300";
    }
};
