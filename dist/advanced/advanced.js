"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosReducer = exports.myObj = exports.getDisplayName = void 0;
const getDisplayName = (item) => {
    if ('name' in item) {
        return {
            animalName: item.name
        };
    }
    return {
        humanName: item.firstName + ' ' + item.lastName
    };
};
exports.getDisplayName = getDisplayName;
const sendEvent = (eventType, payload) => { };
const sendEvent1 = (...args) => { };
const sendEvent2 = (...args) => { };
sendEvent("LOG_IN"); // Allow Nullable
sendEvent1("LOG_IN", {
    userId: '1'
});
sendEvent2("LOG_IN", {
    userId: '1'
});
/**
 * noUncheckedIndexedAccess
 */
exports.myObj = {};
(_a = exports.myObj.foo) === null || _a === void 0 ? void 0 : _a.push("bar");
// or
if (!exports.myObj.foo) {
    exports.myObj.foo = [];
}
exports.myObj.foo.push("bar");
const todosReducer = (state, event) => {
    return state;
};
exports.todosReducer = todosReducer;
//# sourceMappingURL=advanced.js.map