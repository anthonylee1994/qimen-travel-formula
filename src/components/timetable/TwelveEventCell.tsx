import {GridItem} from "@chakra-ui/react";
import React from "react";

interface Props {
    value: string;
}

export const TwelveEventCell = React.memo<Props>(({value}) => {
    return (
        <GridItem w={6} p={1} fontSize="sm" display="flex" flexDirection="column" alignItems="center" justifyContent="center" bgColor="orange.200" fontWeight="bold" color="orange.700">
            {value}
        </GridItem>
    );
});
