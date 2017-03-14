class operators {
    public static times (x: number, y: number): number {
        return x * y;
    }
}

class functions {
    public static power (x: number, y: number): number {
        return Math.pow(x, y);
    }
}

export const pi = Math.PI;
export { operators as mathOperators };
export { functions as mathFunctions };

export default {
    pi: pi,
    operators: operators,
    functions: functions,
} 