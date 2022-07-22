import {PaiPan} from "../lib/paipan";
import moment from "moment";
import {天干} from "../interfaces/天干";
import {地支} from "../interfaces/地支";

const fromDate = (date: string): [string, string, string, string] => {
    const d = moment(date, "YYYY-MM-DD").toDate();
    const paipan = new PaiPan().fatemaps(0, d.getFullYear(), d.getMonth() + 1, d.getDate(), 1, 0, 0, 114, 5) as any;

    return paipan.sz;
};

const color = (value: 天干 | 地支): string => {
    switch (value) {
        case "甲":
        case "乙":
        case "寅":
        case "卯":
            return "green.500";
        case "丙":
        case "丁":
        case "巳":
        case "午":
            return "red.500";
        case "戊":
        case "己":
        case "辰":
        case "戌":
        case "丑":
        case "未":
            return "orange.500";
        case "庚":
        case "辛":
        case "申":
        case "酉":
            return "yellow.500";
        case "壬":
        case "癸":
        case "亥":
        case "子":
            return "blue.500";
        default:
            return "gray.500";
    }
};

export const BaziUtil = Object.freeze({
    fromDate,
    color,
});
