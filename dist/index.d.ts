declare let age: number;
declare let course: string;
declare let flag: boolean;
declare let anyType: any;
declare function render(param: string): void;
declare let numbers: number[];
declare let user: [number, string];
declare enum Size {
    Small = 1,
    Medium = 2,
    Large = 3
}
declare function calculate(salary: number): number;
declare let json: {
    readonly id: number;
    lastName: string;
    firstName: string;
    gender?: string;
    birthDay: (date: Date) => void;
};
type Employee = {
    readonly id: number;
    lastName: string;
    firstName: string;
    gender?: string;
    birthDay: (date: Date) => void;
};
declare let json2: Employee;
declare function kgToLbs(weight: number | string): number;
type subject = {
    calc: (str: number | string) => number;
};
type subject2 = {
    show: () => void;
};
type UIWidget = subject & subject2;
declare let EmployeeModel: UIWidget;
type Quanlity = 50 | 100;
declare let quanlity: Quanlity;
type Metric = 'cm' | 'inch';
declare function greet(name: string | null): "nullable" | undefined;
type Customer = {
    birthday: Date;
};
declare function getCustomer(id: number): Customer | null | undefined;
declare let customer1: Customer | null | undefined;
declare let log: any;
