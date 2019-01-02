export interface Storage {
    save(key: string, value: any): boolean;
    set(key: string, value: any): boolean;
    get(key: string): any;
    remove(key: string): any;
}  