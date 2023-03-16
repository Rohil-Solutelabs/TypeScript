// class App {
//   test() {
//     console.log("test function works");
//   }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let a1 = new App();
// a1.test();
// let num1 = 1;
// function calculate(num1: number, num2: number) {
//   return num1 + num2;
// }
// console.log(calculate(num1, 3));
// function getTotal(numArray: Array<number>) {
//   return numArray.reduce((acc, curr) => {
//     return acc + curr;
//   }, 0);
// }
// console.log(getTotal([4, 2, 5, 1]));
// const person = {
//   firstName: "rohil",
//   lastName: "Gajera",
//   role: "Programmer",
// };
// console.log(person);
// number
// string
// string[]
// boolean
// ------------------------------------------------------------ Type alias--------------------------------------------------------------------------
// type User = {
//   name: string;
//   age: number;
//   address?: string;
// };
// const user: User = {
//   name: "rohil",
//   age: 21,
//   // address: "surat",
// };
// function login(userData: User): User {
//   return userData;
// }
// console.log(login(user));
// type ID = number | string;
// const userId: ID = "213";
// var a: number;
// var b: string;
// var myArr: number[];
// myArr = [1, 2, 3, 4];
// myArr.push(1);
// console.log(myArr);
// a = myArr.pop(); //
// // ---------------------------------------------------- tuple ----------------------------------------------------------------------------------------
// var myArr1: [number, boolean];
// myArr1 = [1, true];
// myArr1 = [100, false];
// // myArr1 = [1];  // this gives an error bcoz there is only one element
// console.log(myArr1);
// // optional parameter in function
// function add(a: number, b: number, c?) {
//   return a + b;
// }
// var sum = add(3, 5);
// console.log(sum);
// ---------------------------------------------------- Implicit typing----------------------------------------------------------------
// var a = 19;
// var b = true;
// var c = "rohil";
// Gives an error:- Type 'boolean' is not assignable to type 'number'
// a = true;
// function greet() {
//   return "Good Morning";
// }
// // this greeting hover there is "string"
// // var greeting = greet();
// // this greeting hover there is "ANY" bcoz declaration is in next line -------------
// var greeting1;
// greeting1 = greet();
// // there is no type restriction bcoz of next line declaration ---------
// greeting1 = 10;
// ---------------------------------------------------- Any types-----------------------------------------------------------------------
// we can assign "Any" datatype, that can used for no "type checking"
// var a: any;
// // we can see that there is no error
// a = 10;
// a = true;
// a = "String";
//  ---------------------------------------------------- Union types----------------------------------------------------------------------
// type ID = number | string;
// // var id:ID = "Rohil";
// function printId(id: ID) {
//   if (typeof id == "string") {
//     console.log(id.toUpperCase());
//   } else {
//     console.log(id);
//   }
// }
// printId("Hello world!");
// ---------------------------------------------------- classes -----------------------------------------------------------------------------
// class Person {
//   firstName: string;
//   lastName: string;
// }
// var aPerson: Person = new Person();
// aPerson.firstName = "Rohil";
// aPerson.lastName = "Gajera";
// console.log(aPerson);
// ---------------------------------------------------- Methods and constructors --------------------------
// class Person1 {
//   firstName: string;
//   lastName: string;
//   // ---------------------------------------------------- constructor -----------------------------------------------------------------
//   constructor(firstName: string, lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   // ---------------------------------------------------- method ----------------------------------------------------------------------
//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// var aPerson1: Person1 = new Person1("Rohil", "Gajera");
// // aPerson1.firstName = "Rohil";
// // aPerson1.lastName = "Gajera";
// console.log(aPerson1.getFullName());
// //  ---------------------------------------------------- Inheritance and Polymorphism  ------------------------------
// class Rohil {
//   firstName: string;
//   lastName: string;
//   greet() {
//     console.log("Hey, how you doing?");
//   }
// }
// class Programmer extends Rohil {
//   // override the greet
//   greet() {
//     console.log("Hey, how are you?");
//   }
//   // this keyword gives Programmer class greet -----
//   greetLikeNormalPeople() {
//     this.greet();
//   }
//   // super keyword gives parent class Rohil greet -----
//   // You can also use super() inside a constructor to call the parent class constructor -----
//   greetLikeNormalPeople1() {
//     super.greet();
//   }
// }
// var aProgrammer = new Programmer();
// aProgrammer.greetLikeNormalPeople();
// aProgrammer.greetLikeNormalPeople1();
// // Polymorphism ------------------------------
// var aProgrammer1: Rohil = new Programmer();
// aProgrammer1.greet();
// ---------------------------------------------------- Interfaces ----------------------------------------------------------------
// interface Transaction {
//   payer_AccountNumber: number;
//   payee_AccountNumber: number;
// }
// interface BankAccount {
//   accountNumber: number;
//   accountHolder: string;
//   balance: number;
//   isActive: boolean;
//   transactions: Transaction[];
// }
// const transaction1: Transaction = {
//   payer_AccountNumber: 345,
//   payee_AccountNumber: 567,
// };
// const transaction2: Transaction = {
//   payer_AccountNumber: 345,
//   payee_AccountNumber: 987,
// };
// const bankAccount: BankAccount = {
//   accountNumber: 345,
//   accountHolder: "Rohil Vinubhai Gajera",
//   balance: 734567872,
//   isActive: true,
//   transactions: [transaction1, transaction2],
// };
// // --------------------------------------------------- Extend Interfaces ---------------------------------------------
// interface Book {
//   name: string;
//   price: number;
// }
// interface EBook extends Book {
//   // name: string;
//   // price: number;
//   fileSize: number;
//   fileFormat: string;
// }
// interface AudioBook extends EBook {
//   // name: string;
//   // price: number;
//   // fileSize: number;
//   // fileFormat: string;
//   duration: number;
// }
// const book: AudioBook = {
//   name: "Atomic habits",
//   price: 499,
//   fileSize: 312,
//   fileFormat: "pdf",
//   duration: 4,
// };
// ---------------------------------------- Merge Two Interfaces -----------------------------------------------------------------------
// Create same name interface and they will be merged itself
// interface Book {
//   name: string;
//   price: number;
// }
// interface Book {
//   size: number;
// }
// const book: Book = {
//   name: "No Way Home comic",
//   price: 1499,
//   size: 45,
// };
// Type method does not support merging with other type methods
// type Book = {
//   name: string;
//   price: number;
// };
// type Book = {
//   size: number;
// };
// ----------------------------------------------------- Member visibility --------------((Public and private))--------------------------
// class Rohil {
//   private firstName: string;
//   private lastName: string;
//   greet() {
//     console.log("Hey, how you doing?");
//   }
//   getFirstName() {
//     return this.firstName;
//   }
//   setFirstName(firstName: string) {
//     this.firstName = firstName;
//   }
//   getLastName() {
//     return this.lastName;
//   }
//   setLastName(lastName: string) {
//     this.lastName = lastName;
//   }
//   getFullname() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// class Programmer extends Rohil {
//   // override the greet
//   greet() {
//     console.log("Hey, how are you?");
//   }
//   // this keyword gives Programmer class greet -----------------------------------------
//   greetLikeNormalPeople() {
//     this.greet();
//   }
//   // super keyword gives parent class Rohil greet ---------------------------------------
//   // You can also use super() inside a constructor to call the parent class constructor -----
//   greetLikeNormalPeople1() {
//     super.greet();
//   }
// }
// var aProgrammer: Rohil = new Programmer();
// aProgrammer.greet();
// aProgrammer.getFullname();
// -------------------------------------- Readonly modifier--------------------------------------------------------------------------------------------------------
// class Person {
//   readonly name;
//   constructor(name: string) {
//     this.name = name;
//   }
//   // we can write this too-------------------
//   //   constructor(readonly name: string) {
//   //     this.name = name;
//   //   }
// }
// var aPerson = new Person("Rohil");
// console.log(aPerson.name);
// // can not assign to "name" because it is a read-only property ... You have to set value with readonly...
// aPerson.name = "John";
// -------------------------------------------- Enums -----------------------------------------------------------------------
// enum DayOfTheWeek {
//   SUN,
//   MON,
//   TUE,
//   WED,
//   THU,
//   FRI,
//   SAT,
// }
// let day: DayOfTheWeek;
// day = DayOfTheWeek.MON;
// if (day === DayOfTheWeek.MON) {
//   console.log("Got to go to work");
// }
// --------------------------------- Generics ---------------------------------------------------------------------------------------------
// there is no need for repeatation of all value--------
// function logString(arg: string) {
//   console.log(arg);
//   return arg;
// }
// function logNumber(arg: number) {
//   console.log(arg);
//   return arg;
// }
// function logArray(arg: any[]) {
//   console.log(arg);
//   return arg;
// }
// logString("Logged in");
// logNumber(2);
// logArray([4, 3, 2, 5, 6]);
// function logAnything<T>(arg: T): T {
//   console.log(arg);
//   return arg;
// }
// logAnything([4, 5, 3]);
// interface HasAge {
//   age: number;
// }
// function getOldest<T extends HasAge>(people: T[]): T {
//   return people.sort((a, b) => b.age - a.age)[0];
// }
// const people: HasAge[] = [
//   { age: 30 },
//   { age: 80 },
//   { age: 40 },
//   { age: 20 },
//   { age: 90 },
// ];
// interface Player {
//   name: string;
//   age: number;
// }
// const players: Player[] = [
//   { name: "Rohil", age: 30 },
//   { name: "parth", age: 50 },
//   { name: "palak", age: 10 },
//   { name: "joshi", age: 80 },
//   { name: "mayank", age: 53 },
//   { name: "bala", age: 50 },
//   { name: "nirmit", age: 70 },
// ];
// // Assertion-----------
// // const person = getOldest(players) as Player;
// // generics
// const person = getOldest(people);
// console.log(person);
// ---------------------------------- Structural Typing or Duck Typing------------------------------------------------------------------------
// interface Icredentials {
//   username: string;
//   password: string;
//   isAdmin?: boolean;
// }
// function login(credentials: Icredentials): boolean {
//   console.log(credentials);
//   return true;
// }
// // here we have not assign user as Icredentials but
// //  still function take user as credentials because of typescript understand the user type
// const user = {
//   username: "Rohil",
//   password: "secret",
//   isAdmin: true,
// };
// // here we have assign the Icredentials interface to the user
// // const user: Icredentials = {
// //   username: "Rohil",
// //   password: "secret",
// //   // isAdmin: true,
// // };
// login(user);
// ex 2 how we an create interface of function which is inside object----------------------------------------------------
// interface IAuth {
//   username: string;
//   password: string;
//   login(username: string, password: string): boolean;
// }
// const auth: IAuth = {
//   username: "Rohil",
//   password: "secret",
//   login(username: "hello", password: "world") {
//     return true;
//   },
// };
// ---------------------------------------------- Assertion -----------------------------------------------------------------------
// ------------------------Type assertions have two forms.
// -------------------------------One is the "angle - brackets" syntax:
// -------------------------------Second is the "as-Syntax"
// let example;
// example = "Rohil";
// // One is the "angle - brackets" syntax:
// (<string>example).length;
// // Second is the "as-Syntax"
// (example as string).length;
// ------------------------------------------- utility types in Typescript-------------------------------------------------------
// // Utility types covered
// // 1. Omit -----------------------
// // 2. Pick -----------------------
// // 3. Partial  -----------------------
// // 4. Required  -----------------------
// // 5. Record  -----------------------
// // 6. Parameter  -----------------------
// // 7. ReturnType  -----------------------
// import { User } from "./user";
// // it creates a new type that omits a subset of properties from an existing type "User" and remove passwword and email.
// type UserProfileOmit = Omit<User, "password" | "email">;
// // or
// interface UserProfileOmitInterface extends Omit<User, "password" | "email"> {}
// // create a new type that contains only a subset of properties from an existing type "User" and add only this specific value what we need.
// type UserProfilePick = Pick<User, "name" | "age" | "address" | "password">;
// interface UserProfilePickInterface
//   extends Pick<User, "name" | "age" | "address" | "password"> {}
// // Set all properties to an optionals
// type UserProfileallPartial = Partial<User>;
// // all properties to an optionals but name is mandatory
// type UserProfilePartial = Partial<User> & { name: string };
// const user: UserProfilePartial = {
//   name: "Rohil",
// };
// // Set all properties to required (opposite of partial)
// type UserProfileRequired = Required<User>;
// type UserProfileRequired1 = Required<User> & { city?: string };
// // The Record<K, T> utility type is a built-in utility type in TypeScript that
// // creates a new type by mapping a set of keys K to a value type T.
// // The resulting type is an object type with keys of type K and values of type T.
// type CurrencyCode = "USD" | "EUR" | "GBP";
// type Currency = {
//   name: string;
//   symbol: string;
// };
// type CurrencyRecord = Record<CurrencyCode, Currency>;
// const currencies: CurrencyRecord = {
//   USD: { name: "US Dollar", symbol: "$" },
//   EUR: { name: "Euro", symbol: "€" },
//   GBP: { name: "British Pound Sterling", symbol: "£" },
// };
// console.log(currencies.USD.name); // Output: "US Dollar"
// console.log(currencies.EUR.symbol); // Output: "€"
// // readonly properties
// type ReadonlyPerson = Readonly<User>; // { readonly name: string; readonly age: number; }
// ------------------------------------------- Exception Handling in Typescript-------------------------------------------------------
var MyCustomException = /** @class */ (function (_super) {
    __extends(MyCustomException, _super);
    function MyCustomException(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "MyCustomException";
        return _this;
    }
    return MyCustomException;
}(Error));
function myFunction() {
    throw new MyCustomException("This is my custom exception");
}
try {
    myFunction();
}
catch (error) {
    if (error instanceof MyCustomException) {
        console.error("Caught my custom exception: " + error.message);
    }
    else {
        console.error("Caught an unknown exception");
    }
    // ---------------------------------------------------------- Finally block -------------------------------------------------------
}
finally {
    // Code that is always executed
    console.log("Finally block executed");
}
// ------------------------------------------------ Name Space ----------------------------------------------------------------------
// namespace MyNamespace {
//   export interface Person {
//     name: string;
//     age: number;
//   }
//   export function greet(person: Person) {
//     console.log(`Hello, ${person.name}!`);
//   }
// }
// const person: MyNamespace.Person = { name: "Alice", age: 30 };
// MyNamespace.greet(person);
// ---------------------------------------------------- Symbols -------------------------------------------------------------------------
// let s1 = Symbol("data1");
// let s2 = Symbol("data2");
// console.log(s1.toString());
// console.log(s2.toString());
// // we can use symbol as a key inside a object using []
// let data = {
//   [s1]: "somedata",
// };
// console.log(data[s1]);
// inside a class
// let getData = Symbol("data!");
// class Demo {
//   [getData]() {
//     return "some data with symbol";
//   }
// }
// let d = new Demo();
// console.log(d[getData]());
