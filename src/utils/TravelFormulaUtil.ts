import {first, last} from "lodash";
import {天干} from "../interfaces/天干";
import {地支} from "../interfaces/地支";

export type ScoreLucky = "大吉" | "吉" | "凶" | "大凶";

export type BestWorstTimeType = "天顯時格" | "五不遇時";

export interface ScoreResult {
    lucky: ScoreLucky;
    poem: string;
}

const scoreMap: Record<number, ScoreResult> = {
    13: {lucky: "吉", poem: "十三遁甲見陰陽，西北乾宮老婦娘，手執棉布將小女，此時有應主亨昌。作事出門，推合陰陽，營謀嫁娶，起造營昌，子孫官貴，祿遇時良。"},
    14: {lucky: "凶", poem: "遁甲俱十四，東北有人至，白馬或青驢，弓箭身穿紫。有人著紫，或是皂衣，前有大坑，後有白虎，凶惡相及，不宜嫁娶，休去遠行，凡事難遇。"},
    15: {lucky: "吉", poem: "南方有少女，牽牛抱嬰孩，東方車與馬，更有男趕來。日月在前，光明麗天，駟馬時從，千事皆好，非但殯葬，亦宜修造。"},
    16: {lucky: "吉", poem: "東北有禽蜚，西北白色衣，老人持杖橛，脫卻西黃衣。出遇財珍，兼逢酒食，營謀起造，必遇貴人，交易婚姻，得宜獲福。"},
    17: {lucky: "凶", poem: "西北風雨雲，西方孝服子，兩個駕車人，十七必逢是。死尸在前，病符在後，營謀嫁娶，所求災咎，若遇此時，不獲良久。"},
    18: {lucky: "吉", poem: "南方有少婦，犬子或青驢，東方忽見行，剋應必無疑。不宜嫁娶，萬事吉昌，若遇此時，必要升官。"},
    19: {lucky: "凶", poem: "鴉鵲並弓弩，銅鐵東方舞，更有著白衣，西方喚驢狗。俱是凶兆，不是吉祥，故難動用，守靜為良。"},
    20: {lucky: "凶", poem: "北方有人驢，乾坤僧道尼，屠趕豬羊去，諸凶必應之。前有津梁，後有豬羊，若遇此時，萬事俱殃。"},
    21: {lucky: "吉", poem: "東方有孝子，更與婦人逢，老人持杖板，西北應乾宮。此時所游，青雲上蓋，百事吉昌，不敢移改。"},
    22: {lucky: "吉", poem: "求乞持杖子，西方鼓笛聲，坤兌應更奇，提籠有婦人。乘車駕馬，攜酒相看，萬事皆吉，必遇平安。"},
    23: {lucky: "凶", poem: "男婦攜寶劍，南方執鐵瓶，文字並豬羊，毀罵病迎門。萬事重迭，難於遠行，動則遇侵，靜則安寧。"},
    24: {lucky: "吉", poem: "南方送福仙，少女手執錢，兌宮羊又至，物色黑青纏。飛鳥在前，玉士在後，行見長官，嫁娶無咎。"},
    25: {lucky: "吉", poem: "驢子共猿猻，南方有婦人，西方老人至，剋應最為靈。見四足物，百事稱心，出逢長者，更遇知音。"},
    26: {lucky: "大吉", poem: "北方公文行，南方小兒啼，子孫封官祿，大吉不須疑。以上諸時，此時最吉，但試其事，萬無一失。"},
    27: {lucky: "大凶", poem: "白馬共紫驢，西方一騎出，東方逢覺人，寇纓來應必。以上諸數，此數最惡，先賢詳看，明應不錯。"},
};

const score = (value: 天干 | 地支) => {
    switch (value) {
        case 天干.甲:
        case 天干.己:
        case 地支.子:
        case 地支.午:
            return 9;
        case 天干.乙:
        case 天干.庚:
        case 地支.丑:
        case 地支.未:
            return 8;
        case 天干.丙:
        case 天干.辛:
        case 地支.寅:
        case 地支.申:
            return 7;
        case 天干.丁:
        case 天干.壬:
        case 地支.卯:
        case 地支.酉:
            return 6;
        case 天干.戊:
        case 天干.癸:
        case 地支.辰:
        case 地支.戌:
            return 5;
        case 地支.巳:
        case 地支.亥:
            return 4;
    }
};

const totalScore = (bazi: [string, string, string, string]) => {
    const [, , 日柱, 時柱] = bazi;
    const 日干 = first(日柱) as 天干;
    const 日支 = last(日柱) as 地支;
    const 時支 = last(時柱) as 地支;
    return score(日干) + score(日支) + score(時支);
};

export const TravelFormulaUtil = Object.freeze({
    totalScore,
    scoreMap,
});
