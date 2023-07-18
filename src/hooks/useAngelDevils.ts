import {Lunar} from "lunar-typescript";
import {BaziUtil} from "../utils/BaziUtil";
import {first, last} from "lodash";
import {天干} from "../interfaces/天干";
import {地支} from "../interfaces/地支";
import {AngelDevilUtil, 神煞} from "../utils/AngelDevilUtil";
import {NobleManUtil} from "../utils/NobleManUtil";

export const useAngelDevils = (lunar: Lunar) => {
    const bazi = BaziUtil.fromDate(lunar);
    const [年柱, 月柱, 日柱] = bazi;
    const 年干 = first(年柱) as 天干;
    const 年支 = last(年柱) as 地支;
    const 月支 = last(月柱) as 地支;
    const 日干 = first(日柱) as 天干;
    const 日支 = last(日柱) as 地支;

    const yearAngelDevils = [...AngelDevilUtil.getAngelDevil(年支, 月支), ...AngelDevilUtil.getAngelDevil(年支, 日支)];
    const yearNobleMen = [
        ...(NobleManUtil.is天乙貴人(年干, 年支) ? ["天乙貴人"] : []),
        ...(NobleManUtil.is天乙貴人(年干, 月支) ? ["天乙貴人"] : []),
        ...(NobleManUtil.is天乙貴人(年干, 日支) ? ["天乙貴人"] : []),
        ...(NobleManUtil.is月德貴人(年干, 月支) ? ["月德貴人"] : []),
    ];
    const yearAngels = yearAngelDevils.filter(AngelDevilUtil.isAngel);
    const yearDevils = yearAngelDevils.filter(AngelDevilUtil.isDevil);

    const 年神煞 = [...yearNobleMen, ...yearAngels, ...yearDevils];

    const dayAngelDevils = [...AngelDevilUtil.getAngelDevil(日支, 年支), ...AngelDevilUtil.getAngelDevil(日支, 月支)];
    const dayNobleMen = [
        ...(NobleManUtil.is天乙貴人(日干, 年支) ? ["天乙貴人"] : []),
        ...(NobleManUtil.is天乙貴人(日干, 月支) ? ["天乙貴人"] : []),
        ...(NobleManUtil.is天乙貴人(日干, 日支) ? ["天乙貴人"] : []),
        ...(NobleManUtil.is月德貴人(日干, 月支) ? ["月德貴人"] : []),
    ];
    const dayAngels = dayAngelDevils.filter(AngelDevilUtil.isAngel);
    const dayDevils = dayAngelDevils.filter(AngelDevilUtil.isDevil);

    const 日神煞 = [...dayNobleMen, ...dayAngels, ...dayDevils];

    const 總神煞: 神煞[] = [...年神煞, ...日神煞] as 神煞[];
    const totalNobleMen = [...yearNobleMen, ...dayNobleMen];
    const totalAngels = 總神煞.filter(AngelDevilUtil.isAngel);
    const totalDevils = 總神煞.filter(AngelDevilUtil.isDevil);

    return {
        yearNobleMen,
        yearAngels,
        yearDevils,
        dayNobleMen,
        dayAngels,
        dayDevils,
        totalNobleMen,
        totalAngels,
        totalDevils,
    };
};
