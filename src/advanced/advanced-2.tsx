/**
 * Union vs Intersection ~ like Inner Join vs Left Join in SQL
 */
export type Name = { name: string };
export type Age = { age: number };

const name = { name: "Vuong" };
const age = { age: 30 };
const nameAndAge = { name: "Vuong Ho Van", age: 30 };

type Union = Name | Age;
let union: Union;
union = name;
union = age;
union = nameAndAge;

type Intersection = Name & Age;
let intersection: Intersection;
// intersection = name;    // Error
// intersection = age;     // Error
intersection = nameAndAge;


/**
 * Enums are bad
 */
export const LoginModel = {
    device: 'device',
    email: 'email',
    social: 'social',
} as const;
export type LoginModel = keyof typeof LoginModel;
export function initalizeLogin(mode: LoginModel) {

}
initalizeLogin('device');
initalizeLogin(LoginModel.device);


/**
 * TypeScript Template Literal Types
 * https://www.youtube.com/watch?v=8KIkLPQPt98&list=PLYvdvJlnTOjF6aJsWWAt7kZRJvzw-en8B&index=3&ab_channel=basarat
 */
type CSSValue = | number  // implies px
    // | string // number + px|em|rem
    | `${number}px`
    | `${number}rem`
    | `${number}em`

function size(input: CSSValue) {
    return typeof input === 'number' ? input + 'px' : input;
}

size(123);
size('123px');
size('123rem');
// size('123ex');  // Error

type Size = 'small' | 'medium' | 'large';
type Color = 'primary' | 'secondary';
type Style = `${Color}-${Size}`;
function applyStyle(style: Style) {
}

applyStyle('primary-small');
// applyStyle('small-primary');    // Error

/**
 * TypeScript Mapped Types as clauses // Hidden Gem
https://www.youtube.com/watch?v=gRf8ZbvLcAA&list=PLYvdvJlnTOjF6aJsWWAt7kZRJvzw-en8B&index=4&ab_channel=basarat
 */
