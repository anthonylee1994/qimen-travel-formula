import {GridItem, Tag} from "@chakra-ui/react";
import React from "react";
import {EarthPatternUtil} from "../../utils/EarthPatternUtil";
import {地支關係} from "../../interfaces/地支關係";

interface Props {
    values: string[];
}

export const EarthPatternCell = React.memo<Props>(({values}) => {
    if (values.length === 0) {
        return null;
    }

    return (
        <GridItem w="full" p={1} fontSize="sm" display="flex" alignItems="center" justifyContent="center" flexWrap="wrap" borderStyle="solid" borderWidth={2} borderColor="teal.300" bgColor="teal.50">
            {values.map((value, index) => {
                const isBad = EarthPatternUtil.isBadPattern(value as 地支關係);

                return (
                    <Tag size="sm" m={0.5} key={index} bgColor={isBad ? "gray.500" : "red.300"} mb={1} color="white">
                        {value}
                    </Tag>
                );
            })}
        </GridItem>
    );
});
