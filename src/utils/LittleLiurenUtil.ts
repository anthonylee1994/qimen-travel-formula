import {Lunar} from "lunar-typescript";
import {地支, 地支序} from "../interfaces/地支";

export type 小六壬結果 = "大安" | "留連" | "速喜" | "赤口" | "小吉" | "空亡";
export const 小六壬結果序: 小六壬結果[] = ["大安", "留連", "速喜", "赤口", "小吉", "空亡"];

const getResult = (lunar: Lunar, 時支: 地支): 小六壬結果 => {
    const month = lunar.getMonth() - 1;
    const day = lunar.getDay() - 1;
    const hour = 地支序.indexOf(時支);
    return 小六壬結果序[(month + day + hour) % 6];
};

const isLucky = (result: 小六壬結果): boolean => {
    return result === "大安" || result === "小吉" || result === "速喜";
};

export const LittleLiurenUtil = Object.freeze({
    getResult,
    isLucky,
});
