import {天干} from "../interfaces/天干";
import {地支} from "../interfaces/地支";

const auspiciousTimeMap: Record<天干, 地支 | null> = {
    [天干.甲]: 地支.巳,
    [天干.己]: 地支.巳,
    [天干.乙]: 地支.申,
    [天干.庚]: 地支.申,
    [天干.丙]: 地支.午,
    [天干.辛]: 地支.午,
    [天干.丁]: 地支.辰,
    [天干.壬]: 地支.寅,
    [天干.戊]: null, // 同時為五不遇時，因此不用
    [天干.癸]: 地支.寅,
};

const isAuspiciousTime = (日干: 天干, 時支: 地支): boolean => {
    return auspiciousTimeMap[日干] === 時支;
};

export const AuspiciousTimeUtil = Object.freeze({
    isAuspiciousTime,
});
