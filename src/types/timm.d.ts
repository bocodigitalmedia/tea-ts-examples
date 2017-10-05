declare module 'timm' {
  type Key = number | string
  type ArrayOrObject = any[] | object

  function set<T extends {}> (obj: T, key: (string|number), val: any): T
  function omit<T extends {}> (obj: T, attrs: string|string[]): T
}
