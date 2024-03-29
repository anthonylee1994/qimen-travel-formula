import {天干} from "../interfaces/天干";
import {地支} from "../interfaces/地支";

export const 天乙貴人表: Record<天干, 地支[]> = {
    [天干.甲]: [地支.未, 地支.丑],
    [天干.戊]: [地支.未, 地支.丑],
    [天干.庚]: [地支.未, 地支.丑],
    [天干.乙]: [地支.子, 地支.申],
    [天干.己]: [地支.子, 地支.申],
    [天干.丙]: [地支.亥, 地支.酉],
    [天干.丁]: [地支.亥, 地支.酉],
    [天干.辛]: [地支.午, 地支.寅],
    [天干.壬]: [地支.卯, 地支.巳],
    [天干.癸]: [地支.卯, 地支.巳],
};

export const 月德貴人表: Record<天干, 地支[]> = {
    [天干.甲]: [地支.亥, 地支.卯, 地支.未],
    [天干.乙]: [],
    [天干.丙]: [地支.寅, 地支.午, 地支.戌],
    [天干.丁]: [],
    [天干.戊]: [],
    [天干.己]: [],
    [天干.庚]: [地支.巳, 地支.酉, 地支.丑],
    [天干.辛]: [],
    [天干.壬]: [地支.申, 地支.子, 地支.辰],
    [天干.癸]: [],
};

const is天乙貴人 = (天干: 天干, 地支: 地支) => {
    return 天乙貴人表[天干].includes(地支);
};

const is月德貴人 = (天干: 天干, 月支: 地支) => {
    return 月德貴人表[天干].includes(月支);
};

export const NobleManUtil = {
    is天乙貴人,
    is月德貴人,
};
