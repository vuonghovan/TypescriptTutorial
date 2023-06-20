/**
 * Union vs Intersection ~ like Inner Join vs Left Join in SQL
 */
export type Name = {
    name: string;
};
export type Age = {
    age: number;
};
/**
 * Enums are bad
 */
export declare const LoginModel: {
    readonly device: "device";
    readonly email: "email";
    readonly social: "social";
};
export type LoginModel = keyof typeof LoginModel;
export declare function initalizeLogin(mode: LoginModel): void;
/**
 * TypeScript Mapped Types as clauses // Hidden Gem
https://www.youtube.com/watch?v=gRf8ZbvLcAA&list=PLYvdvJlnTOjF6aJsWWAt7kZRJvzw-en8B&index=4&ab_channel=basarat
 */
