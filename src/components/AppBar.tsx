import React from "react";
import {Flex, IconButton, Input} from "@chakra-ui/react";
import {ArrowBackIcon, ArrowForwardIcon} from "@chakra-ui/icons";
import moment from "moment";

interface Props {
    date: string;
    setDate: (date: string) => void;
}

export const AppBar = React.memo<Props>(({date, setDate}) => {
    return (
        <React.Fragment>
            <Flex justifyContent="center" p={2} bgColor="orange.500" color="white" fontWeight="bold" fontSize="2xl">
                金鎖玉環遁甲出行訣
            </Flex>
            <Flex p={2} bgColor="orange.100">
                <IconButton mr={2} colorScheme="orange" aria-label="back" onClick={() => setDate(moment(date, "YYYY-MM-DD").subtract(1, "days").format("YYYY-MM-DD"))}>
                    <ArrowBackIcon fontSize="lg" />
                </IconButton>
                <Input
                    value={date}
                    onChange={input => setDate(moment(input.target.value).format("YYYY-MM-DD"))}
                    type="date"
                    focusBorderColor="orange.300"
                    variant="filled"
                    bgColor="white"
                    placeholder="Basic usage"
                />
                <IconButton ml={2} colorScheme="orange" aria-label="forward" onClick={() => setDate(moment(date, "YYYY-MM-DD").add(1, "days").format("YYYY-MM-DD"))}>
                    <ArrowForwardIcon fontSize="lg" />
                </IconButton>
            </Flex>
        </React.Fragment>
    );
});
