//string, number, boolean, interface, type, object, Array, tuple, Union, Any, Unknown, void, undefined, null, Generic, utility-types
let fullName: string = "Erfan Yousefi";
let age: number = 29;
let isTeacher: boolean = false;
//any
let anyValue: any = "string";
anyValue = 25;
anyValue = [1, 5, "dfe"];
anyValue = {};
//array
// let scores: Array<number> = []
let scores: number[] = [20, 19, 15, 14, 17];
//tuple
let person: [string, number] = ["Erfan Yousefi", 29];
type NullableString = string | null | undefined;
const [bearer = null, token = null]: [NullableString, NullableString] =
  "Bearer tokenValue".split(" ") as [string, string];

//   interface | type

type Book = {
  title: string;
  author: string;
  year: number;
};

const book: Book = {
  title: "The NodeJS for beginners",
  author: "Morteza",
  year: 2025,
};

interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}

let admin: User = {
  id: 1,
  name: "Hossein Sharifi",
  isAdmin: false,
};
interface Car {
  model: number;
  name: string;
  brand: "Benze" | "Ford" | "BMW" | "Peykan";
}

const car1: Car = {
  model: 2017,
  name: "bmw 230i",
  brand: "BMW",
};
type NumString = string | number;
let userId: NumString;
userId = 123655;
userId = "g5r6fg5r65g6f352gbv6";

function sum(a: number, b: number): number {
  return a + b;
}
function printMessage(msg: string): void {
  console.log(msg);
}
sum(6, 5);
