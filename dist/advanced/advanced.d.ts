interface Animal {
    name: string;
}
interface Human {
    firstName: string;
    lastName: string;
}
export declare const getDisplayName: <TItem extends Animal | Human>(item: TItem) => TItem extends Human ? {
    humanName: string;
} : {
    animalName: string;
};
export type Letters = "a" | "b" | "c";
/**
 * Dynamic function arguments with GENERICS
 * https://www.totaltypescript.com/tips/use-generics-to-dynamically-specify-the-number-and-type-of-arguments-to-functions
 */
export type Event = {
    type: "LOG_IN";
    payload: {
        userId: string;
    };
} | {
    type: "SIGN_OUT";
};
/**
 * noUncheckedIndexedAccess
 */
export declare const myObj: Record<string, string[]>;
/**
 * Using DECLARE GLOBAL for amazing inference
 * https://www.youtube.com/watch?v=byCYSXVmH6E&list=PLIvujZeVDLMx040-j1W4WFs1BxuTGdI_b&index=6&ab_channel=MattPocock
 * https://www.totaltypescript.com/tips/use-declare-global-to-allow-types-to-cross-module-boundaries
 */
import { GlobalReducer } from '../types/types';
export declare const todosReducer: GlobalReducer<{
    todos: {
        id: string;
    }[];
}>;
export {};
