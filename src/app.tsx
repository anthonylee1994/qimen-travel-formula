import React from "react";
import {ChakraProvider} from "@chakra-ui/react";
import {AppBar} from "./components/AppBar";
import moment from "moment";
import {BaziUtil} from "./utils/BaziUtil";
import {BaziTable} from "./components/BaziTable";
import {TimeTable} from "./components/TimeTable";

export const App = React.memo(() => {
    const [date, setDate] = React.useState(moment().format("YYYY-MM-DD"));
    const bazi = React.useMemo(() => BaziUtil.fromDate(date), [date]);

    return (
        <ChakraProvider>
            <AppBar date={date} setDate={setDate} />
            <BaziTable bazi={bazi} />
            <TimeTable bazi={bazi} />
        </ChakraProvider>
    );
});
