import {十二月將, 十二月建} from "../interfaces/十二月建";
import {地支, 地支序} from "../interfaces/地支";

const twelveEvents: 十二月建[] = ["建", "除", "滿", "平", "定", "執", "破", "危", "成", "收", "開", "閉"];

const twelveMonthGeneralMap: Record<string, 十二月將> = {
    冬至: "大吉",
    大寒: "神后",
    雨水: "徵明",
    春分: "天魁",
    谷雨: "從魁",
    小满: "傳送",
    夏至: "小吉",
    大暑: "勝光",
    处暑: "太乙",
    秋分: "天罡",
    霜降: "太衝",
    小雪: "功曹",
};

const generals = ["神后", "大吉", "功曹", "太衝", "天罡", "太乙", "勝光", "小吉", "傳送", "從魁", "天魁", "徵明"];

const poems: string[] = [
    "月建秉執之意，此日宜出行上任、做公職辦事，不宜婚姻及開倉之事",
    "除舊布新之意，此日做事宜做萬事開端，宜診病掃除及婚姻之事，不宜上任出行經商遷移之事",
    "過滿則溢之意，此日做事宜祭祀、祈福、呈交建議，其餘不宜",
    "正立平複之意，此日做事皆平平無奇難出佳績，尤不宜婚姻",
    "平穩安定之意，此日做事宜做決策之事，宜宴請會友、簽訂協議、謀算策劃，不宜求醫上任，安置產業",
    "執正持平之意，此日做事宜守不宜攻，宜營建采購，不宜經營開市、交易納財、定親嫁娶",
    "大耗破敗之意，此日做事多會損耗諸事不宜，但宜破屋壞垣",
    "持危治亂之意，此日做事宜緩不宜急需三思而後行，宜納福安床入宅，不宜嫁娶",
    "功成名就之意，此日做事諸事皆吉，宜求醫問藥、婚姻嫁娶、開市立約、求職上任",
    "收旗卷傘之意，此日做事宜收不宜放，宜修繕、納財、進口、娶妻，不宜出行",
    "花謝複開之意，此日做事百事榮昌，宜結婚宴請、開渠修建、出行遷移、開市納財、不宜下葬",
    "閉戶息養之意，此日做事宜閉不宜開，宜休整規劃，不宜求醫手術、娶妻妄動",
];

const getEvent = (月令: 地支, 地支: 地支): 十二月建 => {
    const monthIndex = 地支序.indexOf(月令);
    const dayIndex = 地支序.indexOf(地支);

    if (dayIndex >= monthIndex) {
        return twelveEvents[dayIndex - monthIndex];
    } else {
        return twelveEvents[dayIndex + twelveEvents.length - monthIndex];
    }
};

const getGenerals = (中氣: string, 日支: 地支): 十二月將[] => {
    const currentGeneral = twelveMonthGeneralMap[中氣];
    const monthIndex = generals.indexOf(currentGeneral);
    const dayIndex = 地支序.indexOf(日支);
    const generalInOrders = [...generals.slice(monthIndex), ...generals.slice(0, monthIndex)];
    return [...generalInOrders.slice(-dayIndex), ...generalInOrders.slice(0, -dayIndex)] as 十二月將[];
};

const getGeneralDiZhi = (general: 十二月將): 地支 => {
    return 地支序[generals.indexOf(general)];
};

const poemOf = (event: 十二月建): string => {
    return poems[twelveEvents.indexOf(event)];
};

export const TwelveEventUtil = Object.freeze({getEvent, getGenerals, getGeneralDiZhi, poemOf});
