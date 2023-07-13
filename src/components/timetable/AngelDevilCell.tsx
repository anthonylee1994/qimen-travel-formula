import {GridItem, Text} from "@chakra-ui/react";
import React from "react";
import {AngelDevilUtil, 神煞} from "../../utils/AngelDevilUtil";

interface Props {
    values: string[];
}

export const AngleDevilCell = React.memo<Props>(({values}) => {
    return (
        <GridItem w={6} p={1} fontSize="sm" display="flex" flexDirection="column" alignItems="center" justifyContent="center" bgColor="gray.300" fontWeight="bold">
            {values.map((value, index) => {
                const isDevil = AngelDevilUtil.isDevil(value as 神煞);

                return (
                    <Text borderRadius="md" p={0.5} key={index} bgColor={isDevil ? "gray.500" : "red.300"} mb={1} color="white">
                        {value}
                    </Text>
                );
            })}
        </GridItem>
    );
});
