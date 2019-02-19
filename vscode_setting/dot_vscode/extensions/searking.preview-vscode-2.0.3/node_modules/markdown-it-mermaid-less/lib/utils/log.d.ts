export interface ILog {
    print(msg: string): void;
}
export declare class Log {
    static print(msg: string): void;
    private static TAG;
}
