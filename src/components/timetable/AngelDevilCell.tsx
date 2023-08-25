import {GridItem, Tag} from "@chakra-ui/react";
import React from "react";
import {AngelDevilUtil, 神煞} from "../../utils/AngelDevilUtil";

interface Props {
    values: string[];
}

export const AngleDevilCell = React.memo<Props>(({values}) => {
    if (values.length === 0) {
        return null;
    }

    return (
        <GridItem
            w="full"
            p={1}
            fontSize="sm"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            borderStyle="solid"
            borderWidth={2}
            borderColor="purple.300"
            bgColor="purple.50"
        >
            {values.map((value, index) => {
                const isDevil = AngelDevilUtil.isDevil(value as 神煞);

                return (
                    <Tag size="sm" m={0.5} key={index} bgColor={isDevil ? "gray.500" : "red.300"} mb={1} color="white">
                        {value}
                    </Tag>
                );
            })}
        </GridItem>
    );
});
