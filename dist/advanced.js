"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDisplayName = void 0;
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
console.log((0, exports.getDisplayName)({ name: "con mèo" }));
console.log((0, exports.getDisplayName)({ lastName: "vuong", firstName: "ho van" }));
//# sourceMappingURL=advanced.js.map