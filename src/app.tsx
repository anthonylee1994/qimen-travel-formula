import React from "react";
import {ChakraProvider, Container} from "@chakra-ui/react";
import {AppBar} from "./components/AppBar";
import moment from "moment";
import {BaziUtil} from "./utils/BaziUtil";
import {BaziTable} from "./components/BaziTable";
import {TimeTable} from "./components/timetable/TimeTable";
import {Lunar} from "lunar-typescript";

export const App = React.memo(() => {
    const [date, setDate] = React.useState(moment().format("YYYY-MM-DD"));
    const lunar = React.useMemo(() => {
        const d = moment(date, "YYYY-MM-DD").toDate();
        return Lunar.fromDate(d);
    }, [date]);

    const bazi = BaziUtil.fromDate(lunar);
    console.log("lunar.getQi()", lunar.getPrevQi());

    return (
        <ChakraProvider>
            <Container p={0}>
                <AppBar date={date} setDate={setDate} />
                <BaziTable bazi={bazi} />
                <TimeTable lunar={lunar} />
            </Container>
        </ChakraProvider>
    );
});
