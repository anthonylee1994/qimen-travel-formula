import {地支} from "../interfaces/地支";
import {地支刑, 地支沖, 地支破, 地支害, 地支關係, 地支六合, 地支三合} from "../interfaces/地支關係";

const getPatterns = (日支: 地支, 時支: 地支): 地支關係[] => {
    const arr: 地支關係[] = [];
    if (地支六合[日支] === 時支) arr.push("六合");
    if (地支三合[日支].includes(時支)) arr.push("三合");
    if (地支刑[日支].includes(時支)) arr.push("刑");
    if (地支沖[日支] === 時支) arr.push("沖");
    if (地支破[日支] === 時支) arr.push("破");
    if (地支害[日支] === 時支) arr.push("害");
    return arr;
};

export const isBadPattern = (value: 地支關係): boolean => {
    return ["刑", "沖", "破", "害"].some(_ => value.startsWith(_));
};

export const EarthPatternUtil = Object.freeze({
    getPatterns,
    isBadPattern,
});
