import {GridItem} from "@chakra-ui/react";
import React from "react";

interface Props {
    values: string[];
}

export const EarthPatternCell = React.memo<Props>(({values}) => {
    return (
        <GridItem
            w={6}
            p={1}
            fontSize="sm"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bgColor={values.length ? (["刑", "沖", "破", "害"].some(_ => values.includes(_)) ? "gray.500" : "red.300") : "gray.300"}
            fontWeight="bold"
            color={values.length ? "white" : "gray.100"}
        >
            {values}
        </GridItem>
    );
});
