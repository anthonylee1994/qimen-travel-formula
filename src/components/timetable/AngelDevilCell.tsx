import {GridItem, Text} from "@chakra-ui/react";
import React from "react";
import {AngelDevilUtil, 神煞} from "../../utils/AngelDevilUtil";

interface Props {
    values: string[];
}

export const AngleDevilCell = React.memo<Props>(({values}) => {
    return (
        <GridItem w={6} p={1} fontSize="sm" display="flex" flexDirection="column" alignItems="center" justifyContent="center" bgColor="gray.300">
            {values.map((value, index) => {
                const isDevil = AngelDevilUtil.isDevil(value as 神煞);

                return (
                    <Text
                        fontSize={12}
                        lineHeight={1.2}
                        fontWeight="500"
                        borderRadius="md"
                        py={1}
                        px={0.5}
                        key={index}
                        bgColor={isDevil ? "gray.500" : "red.300"}
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
