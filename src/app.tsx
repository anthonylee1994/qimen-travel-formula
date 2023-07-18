import React from "react";
import {ChakraProvider, Container} from "@chakra-ui/react";
import {AppBar} from "./components/AppBar";
import moment from "moment";
import {BaziTable} from "./components/BaziTable";
import {TimeTable} from "./components/timetable/TimeTable";
import {useLunar} from "./hooks/useLunar";
import {useKeyArrow} from "./hooks/useKeyArrow";

export const App = React.memo(() => {
    const [date, setDate] = React.useState(moment().format("YYYY-MM-DD"));
    const lunar = useLunar(date);

    useKeyArrow(setDate);

    return (
        <ChakraProvider>
            <Container p={0}>
                <AppBar date={date} setDate={setDate} />
                <BaziTable lunar={lunar} />
                <TimeTable lunar={lunar} />
            </Container>
        </ChakraProvider>
    );
});
