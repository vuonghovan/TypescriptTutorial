/**
Exclude null and undefined from T
*/
export type NoEmpty<T> = T extends null | undefined ? never : T;

type Example = NoEmpty<string | null>;
type Example0 = NoEmpty<string> | NoEmpty<null>;
type Example1 = (
    (string extends null | undefined ? never : string)
    | (null extends null | undefined ? never : string)
);
type Example2 = string | never;
type Result = string;
type TypeCond<T, U> = [T] extends [never] ? {a: U} : {b: U};

interface IUser {
    id: number;
    name?: string;
    age: number;
    email: string;
}

const user: IUser = {
    id: 1,
    age: 30,
    email: "john@example.com",
    name: 'name',
};

const term = user:Example;

console.log(user);