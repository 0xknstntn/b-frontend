import { InputSize } from "../components/Page/Withdraw/WithdrawAmountBYTE";
import { getTextWidth } from "./useTextWidth";

export const defaultSize: InputSize = { size: 50, width: 30 };

export const getInputSize = (value: string, parent: HTMLLabelElement) => {
    const max = parent.clientWidth;
    let size = defaultSize.size;
    let width = getTextWidth(value, `400 ${size}px 'Public Sans'`);
    while (Math.round(width) > max - 135) {
        size = Math.max(1, size - 1);
        width = getTextWidth(value, `400 ${size}px 'Public Sans'`);
    }

    return {
        width: Math.max(Math.round(width) + 9, value.length * 9, 35),
        size: size
    };
};