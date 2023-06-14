"use strict";
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
console.log(kgToLbs(12));
console.log(kgToLbs('10'));
//# sourceMappingURL=index.js.map