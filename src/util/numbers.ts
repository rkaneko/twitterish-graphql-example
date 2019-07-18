export function range(min: number, max: number): number[] {
    if (min > max) {
        throw new Error(
            `Illegal argument: min must be less than and equal to max.`
        );
    }
    if (min === max) {
        return [min];
    }
    return Array.from(Array(max - min + 1)).map((_, i) => min + i);
}

export function randomNumIn(min: number, max: number): number {
    if (min > max) {
        throw new Error(
            `Illegal argument: min must be less than and equal to max.`
        );
    }
    if (min === max) {
        return min;
    }
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}
