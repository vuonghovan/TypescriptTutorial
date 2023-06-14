let age: number = 20;
if (age <= 20) {
    age = 10;
}
console.log(age);   // 10
// render(age); cannot use this here. Because age is number type

let course: string = "Vuong Dep Trai";
course = 'Van Vuong';
let flag: boolean = false;

let anyType;
anyType = 'vuong ho van';
render(anyType);     // vuong ho van
anyType = 10;
// render(anyType);    // 10

function render(param: string) {
    console.log(param);
}

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.forEach(n => console.log(n));

// Tuples
let user: [number, string] = [1, "vuong Dep trai"];
console.log(user);  // (2) [1, 'vuong Dep trai']
user.push(1);
console.log(user);  // (3) [1, 'vuong Dep trai', 1]

// Enum
enum Size { Small = 1, Medium = 2, Large = 3 };
console.log(Size.Large); // 3

// Functions
function calculate(salary: number): number {
    if (salary < 1) {
        return 2;
    }

    return salary;
}

// Define a object
let json: {
    readonly id: number;    // Set readonly
    lastName: string;
    firstName: string;
    gender?: string;    // Allow nullable
    birthDay: (date: Date) => void; // Special
} = {
    id: 1,
    lastName: "Vương",
    firstName: "Ho Van",
    birthDay: (date: Date) => {
        console.log("Date: " + date);
    }
}
console.log(json);  // {id: 1, lastName: 'Vương', firstName: 'Ho Van', birthDay: ƒ}
// Type Aliases: Define the type of object
type Employee = {
    readonly id: number;    // Set readonly
    lastName: string;
    firstName: string;
    gender?: string;    // Allow nullable
    birthDay: (date: Date) => void; // Special
};
let json2: Employee = {
    id: 1,
    lastName: "Vương",
    firstName: "Ho Van",
    birthDay: (date: Date) => {
        console.log("Date: " + date);
    }
}
console.log(json2);  // {id: 1, lastName: 'Vương', firstName: 'Ho Van', birthDay: ƒ}

// Union Types
function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number') {
        return weight * 1.5;
    }

    return parseInt(weight) * 0.5;
}
console.log(kgToLbs(12));   // 18
console.log(kgToLbs('10')); // 5

// Intersection Type
type subject = {
    calc: (str: number | string) => number;
}
type subject2 = {
    show: () => void;
};
type UIWidget = subject & subject2;
let EmployeeModel: UIWidget = {
    calc(str: number | string) {
        return typeof str === 'string' ? parseInt(str) : str;
    },
    show() {
        console.log('show');
    }
};

// Literal
type Quanlity = 50 | 100;
let quanlity: Quanlity = 100;

type Metric = 'cm' | 'inch';


// Nullable type
function greet(name: string | null) {
    if (name === null) {
        return 'nullable';
    };

    console.log(name.toLocaleUpperCase());
}
greet(null);


// Optional Chaining
type Customer = {
    birthday: Date,
};
function getCustomer(id: number): Customer | null | undefined {
    return id == 0 ? null : { birthday: new Date() };
}

let customer1 = getCustomer(1);
console.log(customer1?.birthday?.getFullYear());    //  Optional property access operator
// Optional  element access operator
// customer1[0];

let log: any = null;
log?.('a');

