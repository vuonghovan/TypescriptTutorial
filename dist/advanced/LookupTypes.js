"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserAddress = exports.getPayment = void 0;
function getPayment() {
    return {
        token: 'vuong-hovan-vuong-hovan-'
    };
}
exports.getPayment = getPayment;
;
function getUserAddress() {
    return {
        wardName: 'Đường số 9',
        districtName: 'Hiệp Bình Phước',
        providerName: 'THủ Đức'
    };
}
exports.getUserAddress = getUserAddress;
;
console.log(getPayment());
console.log(getUserAddress());
//# sourceMappingURL=LookupTypes.js.map