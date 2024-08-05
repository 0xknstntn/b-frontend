export const formatCash = (n: number) => {
        if (n < 1e3) return n;
        if (n >= 1e3) return +(n / 1e3).toFixed(1) + "K";
};

export function toFixed(x: number, d: number) {
        if (!d) return x.toFixed(d); // don't go wrong if no decimal
        return x.toFixed(d).replace(/\.?0+$/, '');
}
