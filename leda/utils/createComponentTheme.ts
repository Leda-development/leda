// eslint-disable-next-line @typescript-eslint/ban-types
export const createComponentTheme = <T extends object = {}>(defaultTheme: T | object = {}, globalTheme: Partial<T> = {}, themeProp: Partial<T> = {}): T => ({ ...defaultTheme, ...globalTheme, ...themeProp } as T);
