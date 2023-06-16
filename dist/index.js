"use strict";
var _a;
let age = 20;
if (age <= 20) {
    age = 10;
}
console.log(age); // 10
// render(age); cannot use this here. Because age is number type
let course = "Vuong Dep Trai";
course = 'Van Vuong';
let flag = false;
let anyType;
anyType = 'vuong ho van';
render(anyType); // vuong ho van
anyType = 10;
// render(anyType);    // 10
function render(param) {
    console.log(param);
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.forEach(n => console.log(n));
// Tuples
let user = [1, "vuong Dep trai"];
console.log(user); // (2) [1, 'vuong Dep trai']
user.push(1);
console.log(user); // (3) [1, 'vuong Dep trai', 1]
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
console.log(Size.Large); // 3
// Functions
function calculate(salary) {
    if (salary < 1) {
        return 2;
    }
    return salary;
}
// Define a object
let json = {
    id: 1,
    lastName: "Vương",
    firstName: "Ho Van",
    birthDay: (date) => {
        console.log("Date: " + date);
    }
};
console.log(json); // {id: 1, lastName: 'Vương', firstName: 'Ho Van', birthDay: ƒ}
let json2 = {
    id: 1,
    lastName: "Vương",
    firstName: "Ho Van",
    birthDay: (date) => {
        console.log("Date: " + date);
    }
};
console.log(json2); // {id: 1, lastName: 'Vương', firstName: 'Ho Van', birthDay: ƒ}
// Union Types
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 1.5;
    }
    return parseInt(weight) * 0.5;
}
console.log(kgToLbs(12)); // 18
console.log(kgToLbs('10')); // 5
let EmployeeModel = {
    calc(str) {
        return typeof str === 'string' ? parseInt(str) : str;
    },
    show() {
        console.log('show');
    }
};
let quanlity = 100;
// Nullable type
function greet(name) {
    if (name === null) {
        return 'nullable';
    }
    ;
    console.log(name.toLocaleUpperCase());
}
greet(null);
function getCustomer(id) {
    return id == 0 ? null : { birthday: new Date() };
}
let customer1 = getCustomer(1);
console.log((_a = customer1 === null || customer1 === void 0 ? void 0 : customer1.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear()); //  Optional property access operator
// Optional  element access operator
// customer1[0];
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=index.js.map