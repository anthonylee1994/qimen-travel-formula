import {BaziUtil} from "../utils/BaziUtil";
import {Lunar} from "lunar-typescript";
import {last} from "lodash";
import {地支} from "../interfaces/地支";
import {EarthPatternUtil} from "../utils/EarthPatternUtil";

export const useEarthPatterns = (lunar: Lunar) => {
    const bazi = BaziUtil.fromDate(lunar);
    const [年柱, 月柱, 日柱] = bazi;
    const 年支 = last(年柱) as 地支;
    const 月支 = last(月柱) as 地支;
    const 日支 = last(日柱) as 地支;

    const yearMonthPatterns = EarthPatternUtil.getPatterns(年支, 月支);
    const monthDayPatterns = EarthPatternUtil.getPatterns(月支, 日支);
    const yearDayPatterns = EarthPatternUtil.getPatterns(年支, 日支);

    const 年月關係 = [...yearMonthPatterns.filter(_ => !EarthPatternUtil.isBadPattern(_)), ...yearMonthPatterns.filter(EarthPatternUtil.isBadPattern)];
    const 月日關係 = [...monthDayPatterns.filter(_ => !EarthPatternUtil.isBadPattern(_)), ...monthDayPatterns.filter(EarthPatternUtil.isBadPattern)];
    const 年日關係 = [...yearDayPatterns.filter(_ => !EarthPatternUtil.isBadPattern(_)), ...yearDayPatterns.filter(EarthPatternUtil.isBadPattern)];

    return {
        年月關係,
        月日關係,
        年日關係,
    };
};
