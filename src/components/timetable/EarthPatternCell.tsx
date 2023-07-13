import {GridItem, Text} from "@chakra-ui/react";
import React from "react";
import {EarthPatternUtil} from "../../utils/EarthPatternUtil";
import {地支關係} from "../../interfaces/地支關係";

interface Props {
    values: string[];
}

export const EarthPatternCell = React.memo<Props>(({values}) => {
    return (
        <GridItem w={6} p={1} fontSize="sm" display="flex" flexDirection="column" alignItems="center" justifyContent="center" bgColor="gray.300" fontWeight="bold">
            {values.map((value, index) => {
                const isBad = EarthPatternUtil.isBadPattern(value as 地支關係);

                return (
                    <Text borderRadius="md" p={0.5} key={index} bgColor={isBad ? "gray.500" : "red.300"} mb={1} color="white">
                        {value}
                    </Text>
                );
            })}
        </GridItem>
    );
});