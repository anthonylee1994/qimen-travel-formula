import React from "react";
import {GridItem} from "@chakra-ui/react";

interface Props {
    lucky: boolean;
    value: string;
}

export const LuckyCell = React.memo<Props>(({lucky, value}) => {
    return (
        <GridItem w="full" fontSize="sm" flexDirection="column" display="flex" alignItems="center" justifyContent="center" color="white" p={1} bgColor={lucky ? "red.500" : "black"} fontWeight="bold">
            {value.split("").map(x => (
                <div key={x}>{x}</div>
            ))}
        </GridItem>
    );
});
