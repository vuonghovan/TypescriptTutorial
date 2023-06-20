"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
main();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const single = new Promise(res => res('l4d1345'));
        const triple = new Promise(res => res(new Promise(res => res(new Promise(res => {
            res('Vin');
        })))));
        const stringResult = yield single;
        console.log(stringResult); // l4d1345
        const tripleResult = yield triple;
        console.log(tripleResult); // Vin
    });
}
function example(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield input;
        return output;
    });
}
function fetchUserName() {
    return __awaiter(this, void 0, void 0, function* () {
        const single = new Promise(res => res('fetchUserName'));
        const str = yield example(single);
        console.log(str);
    });
}
fetchUserName();
//# sourceMappingURL=awaitedUtilityType.js.map