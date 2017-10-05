declare module 'timm'
declare type Key = number | string
declare type ArrayOrObject = any[] | object

declare function set (arr: any[], key: number, val: any): any[]
declare function set (obj: object, key: string, val: any): object
declare function omit (obj: object, attrs: string|string[]): object
