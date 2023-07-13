import {groupBy} from "lodash";

const groupItems = (values: string[]) => {
    const grouped = groupBy(values);
    return Object.keys(grouped).map(_ => (grouped[_].length > 1 ? `${_}x${grouped[_].length}` : _));
};

export const DisplayUtil = Object.freeze({
    groupItems,
});
