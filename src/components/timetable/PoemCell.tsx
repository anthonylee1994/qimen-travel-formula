import React from "react";
import {GridItem} from "@chakra-ui/react";

interface Props {
    value: string;
}

export const PoemCell = React.memo<Props>(({value}) => {
    return (
        <GridItem flexGrow={1} display="flex" alignItems="center" justifyContent="center" bgColor="gray.100" p={1} fontSize="sm">
            {value}
        </GridItem>
    );
});
