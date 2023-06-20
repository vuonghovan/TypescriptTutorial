"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initalizeLogin = exports.LoginModel = void 0;
const name = { name: "Vuong" };
const age = { age: 30 };
const nameAndAge = { name: "Vuong Ho Van", age: 30 };
let union;
union = name;
union = age;
union = nameAndAge;
let intersection;
// intersection = name;    // Error
// intersection = age;     // Error
intersection = nameAndAge;
/**
 * Enums are bad
 */
exports.LoginModel = {
    device: 'device',
    email: 'email',
    social: 'social',
};
function initalizeLogin(mode) {
}
exports.initalizeLogin = initalizeLogin;
initalizeLogin('device');
initalizeLogin(exports.LoginModel.device);
function size(input) {
    return typeof input === 'number' ? input + 'px' : input;
}
size(123);
size('123px');
size('123rem');
function applyStyle(style) {
}
applyStyle('primary-small');
// applyStyle('small-primary');    // Error
/**
 * TypeScript Mapped Types as clauses // Hidden Gem
https://www.youtube.com/watch?v=gRf8ZbvLcAA&list=PLYvdvJlnTOjF6aJsWWAt7kZRJvzw-en8B&index=4&ab_channel=basarat
 */
//# sourceMappingURL=advanced-2.js.map