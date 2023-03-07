import {天干} from "../interfaces/天干";

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

const isFiveUnavoidableTime = (日干: 天干, 時干: 天干): boolean => {
    return fiveUnavoidableTimeMap[日干] === 時干;
};

export const FiveUnavoidableTimeUtil = Object.freeze({
    isFiveUnavoidableTime,
});
