import React from "react";
import {Grid} from "@chakra-ui/react";
import {last} from "lodash";
import {地支} from "../../interfaces/地支";
import {TwelveEventUtil} from "../../utils/TwelveEventUtil";
import {TwelveEvent} from "./TwelveEvent";
import {Bazi} from "../Bazi";

interface Props {
    bazi: [string, string, string, string];
}

export const BaziTable = React.memo<Props>(({bazi}) => {
    const [, 月柱, 日柱] = bazi;
    const 月支 = last(月柱) as 地支;
    const 日支 = last(日柱) as 地支;
    const 月建 = TwelveEventUtil.getDay(月支, 日支);

    return (
        <Grid p={1} templateColumns="repeat(1, 1fr)" gap={1}>
            <Bazi bazi={bazi} />
            <TwelveEvent value={月建} />
        </Grid>
    );
});
