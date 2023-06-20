// Generic => Generic common function
interface Animal {
    name: string;
}
interface Human {
    firstName: string;
    lastName: string;
}

export const getDisplayName = <TItem extends Animal | Human>(item: TItem): TItem extends Human ? { humanName: string } : { animalName: string } => {
    if ('name' in item) {
        return {
            animalName: item.name
        } as TItem extends Human ? { humanName: string } : { animalName: string }
    }

    return {
        humanName: item.firstName + ' ' + item.lastName
    } as TItem extends Human ? { humanName: string } : { animalName: string };
};

// console.log(getDisplayName({ name: "con mèo" }));
// console.log(getDisplayName({ lastName: "vuong", firstName: "ho van" }));

// => Remove a member of a Union Type
export type Letters = "a" | "b" | "c";
type RemoveC<TType> = TType extends "c" ? "d" : TType;
type WowWithoutC = RemoveC<Letters>;

//=> Omit<T,K>
/**
 * Omit<T,K>
Sử dụng Pick rất tiện lợi. Tuy nhiên đôi khi chúng ta muốn làm ngược lại. Chúng ta cần tạo 1 type bao gồm tất cả trừ 1 vài field từ 1 type trước đó.
-----------------
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type Person = { name: string; age: number }
type Name = Omit<Person , 'age'>;
const n: Name = {name: 'John'}; // ok
const err: Name = {name: 'John', age: 26} // error
 */
// type IconSize = "sm" | "xs" | Omit<string, "xs" | "sm">;
// Replace by
type LooseAutocomplete<T extends string> = T | Omit<string, T>;
type IconSize = LooseAutocomplete<"sm" | "xs">;
interface IconProps {
    size: IconSize
}
// export const Icon = (props: IconProps) => {
//     return <></>;
// }
// const Comp1 = () => {
//     return (
//         <div>
//             <Icon size="xs" > </Icon>
//             <Icon Icon size="something" > </Icon>
//         </div>
//     )
// }

/**
 * Dynamic function arguments with GENERICS
 * https://www.totaltypescript.com/tips/use-generics-to-dynamically-specify-the-number-and-type-of-arguments-to-functions
 */
export type Event = | {
    type: "LOG_IN"
    payload: {
        userId: string
    }
} | {
    type: "SIGN_OUT"
};
const sendEvent = (eventType: Event["type"], payload?: any) => { }

const sendEvent1 = <Type extends Event["type"]>(
    ...args: Extract<Event, { type: Type }> extends { payload: infer TPayload }
        ? [Type, TPayload]
        : [Type]
) => { }

const sendEvent2 = <Type extends Event["type"]>(
    ...args: Extract<Event, { type: Type }> extends { payload: infer TPayload }
        ? [type: Type, payload: TPayload]
        : [type: Type]
) => { }

sendEvent("LOG_IN");    // Allow Nullable
sendEvent1("LOG_IN", {
    userId: '1'
});
sendEvent2("LOG_IN", {
    userId: '1'
});

/**
 * noUncheckedIndexedAccess
 */
export const myObj: Record<string, string[]> = {};
myObj.foo?.push("bar");
// or
if (!myObj.foo) {
    myObj.foo = [];
}
myObj.foo.push("bar");


/**
 * Using DECLARE GLOBAL for amazing inference
 * https://www.youtube.com/watch?v=byCYSXVmH6E&list=PLIvujZeVDLMx040-j1W4WFs1BxuTGdI_b&index=6&ab_channel=MattPocock
 * https://www.totaltypescript.com/tips/use-declare-global-to-allow-types-to-cross-module-boundaries
 */


import { GlobalReducer } from '../types/types';
export const todosReducer: GlobalReducer<{ todos: { id: string }[] }> = (
    state,
    event
) => {
    return state;
};
