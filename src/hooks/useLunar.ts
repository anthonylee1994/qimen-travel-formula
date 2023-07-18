import React from "react";
import moment from "moment/moment";
import {Lunar} from "lunar-typescript";

export const useLunar = (date: string) => {
    return React.useMemo(() => {
        const d = moment(date, "YYYY-MM-DD").toDate();
        return Lunar.fromDate(d);
    }, [date]);
};
