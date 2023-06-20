/**
Exclude null and undefined from T
*/
export type NoEmpty<T> = T extends null | undefined ? never : T;
