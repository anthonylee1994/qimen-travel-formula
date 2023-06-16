import {天干} from "../interfaces/天干";
import {地支} from "../interfaces/地支";
import {AstrologicalTimeType} from "./TravelFormulaUtil";

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

const fiveUnavoidableTimeMap: Record<天干, 天干> = {
    [天干.甲]: 天干.庚,
    [天干.乙]: 天干.辛,
    [天干.丙]: 天干.壬,
    [天干.丁]: 天干.癸,
    [天干.戊]: 天干.甲,
    [天干.己]: 天干.乙,
    [天干.庚]: 天干.丙,
    [天干.辛]: 天干.丁,
    [天干.壬]: 天干.戊,
    [天干.癸]: 天干.己,
};

const burialTimeMap: Record<天干, 地支 | null> = {
    [天干.甲]: 地支.丑, // not exists
    [天干.乙]: 地支.戌, // not exists
    [天干.丙]: 地支.戌,
    [天干.丁]: 地支.丑,
    [天干.戊]: 地支.戌,
    [天干.己]: 地支.丑,
    [天干.庚]: 地支.丑, // not exists
    [天干.辛]: 地支.辰, // not exists
    [天干.壬]: 地支.辰,
    [天干.癸]: 地支.未,
};

const isAuspiciousTime = (日干: 天干, 時支: 地支): boolean => {
    return auspiciousTimeMap[日干] === 時支;
};

const isFiveUnavoidableTime = (日干: 天干, 時干: 天干): boolean => {
    return fiveUnavoidableTimeMap[日干] === 時干;
};

const isBurialTime = (時干: 天干, 時支: 地支): boolean => {
    return burialTimeMap[時干] === 時支;
};

const getType = (日干: 天干, 時干: 天干, 時支: 地支): AstrologicalTimeType | null => {
    if (isAuspiciousTime(日干, 時支)) {
        return "天顯時格";
    } else if (isFiveUnavoidableTime(日干, 時干)) {
        return "五不遇時";
    } else if (isBurialTime(時干, 時支)) {
        return "時干入墓";
    }

    return null;
};

export const AstrologicalTimeUtil = Object.freeze({
    isBurialTime,
    isAuspiciousTime,
    isFiveUnavoidableTime,
    getType,
});
