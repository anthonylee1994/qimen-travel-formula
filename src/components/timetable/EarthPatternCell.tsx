import {GridItem, Text} from "@chakra-ui/react";
import React from "react";
import {EarthPatternUtil} from "../../utils/EarthPatternUtil";
import {地支關係} from "../../interfaces/地支關係";

interface Props {
    values: string[];
}

export const EarthPatternCell = React.memo<Props>(({values}) => {
    return (
        <GridItem w={6} p={1} fontSize="sm" display="flex" flexDirection="column" alignItems="center" justifyContent="center" bgColor="gray.300">
            {values.map((value, index) => {
                const isBad = EarthPatternUtil.isBadPattern(value as 地支關係);

                return (
                    <Text
                        fontSize={12}
                        lineHeight={1.2}
                        fontWeight="500"
                        borderRadius="md"
                        py={1}
                        px={0.5}
                        key={index}
                        bgColor={isBad ? "gray.500" : "red.300"}
                        mb={1}
                        color="white"
                        textAlign="center"
                    >
                        {value.split("").map((_, key) => (
                            <React.Fragment key={key}>
                                {_}
                                <br />
                            </React.Fragment>
                        ))}
                    </Text>
                );
            })}
        </GridItem>
    );
});
