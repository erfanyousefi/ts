enum CounterActionType {
  Increment = "INCREMENT",
  IncrementBy = "INCREMENT_BY",
}
interface IncrementAction {
  type: CounterActionType.Increment;
}
interface IncrementByAction {
  type: CounterActionType.IncrementBy;
  payload: number;
}
type CounterAction = IncrementAction | IncrementByAction;

function reducer(state: number, action: CounterAction) {
  switch (action.type) {
    case CounterActionType.Increment:
      return state + 1;
    case CounterActionType.IncrementBy:
      return state + action.payload;
    default:
      return state;
  }
}

function isNumber(value: any) {
  return typeof value === "number";
}
const validateAge = (age: any) => {
  if (isNumber(age)) {
    console.log(age);
  } else {
    console.log("The age must be a number");
  }
};

class KeyValuePair<T, U> {
  private key!: T;
  private value!: U;

  setKeyValue(key: T, value: U): void {
    this.key = key;
    this.value = value;
  }
  display(): void {
    console.log(`Key=${this.key}, value=${this.value}`);
  }
}
// let instance1 = new KeyValuePair<number, string>();
// instance1.setKeyValue(2, "apple");
// instance1.display();
// let instance2 = new KeyValuePair<string, string>();
// instance2.setKeyValue("name", "Ali");
// instance2.display();

function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}
const myNumbers = getArray<number>([1, 2, 3, 4, 5, 6]);
// console.log(myNumbers);
const myStrings = getArray<string>(["Foo", "Bar"]);
myNumbers.push(20);
myStrings.push("Hello");

interface Person {
  name: string;
  age: number;
  email: string;
}
interface PartialPerson {
  name?: string;
  age?: number;
  email?: string;
}
type UserWithoutEmail = Omit<Person, "email">;
type UserEmail = Pick<Person, "email">;
let user1: UserWithoutEmail = {age: 25, name: "Ali"};
let user2: UserEmail = {email: "ali@gmail.com"};
function createPerson(personDto: Person): void {
  // insert a new person
}
function updatePerson(personDto: Partial<Person>): void {
  // update an exist person
}
function getRequiredPerson(personDto: Required<PartialPerson>): void {
  // update an exist person
}
createPerson({name: "Ali", age: 15, email: "ali@gmail.com"});
updatePerson({age: 20});
getRequiredPerson({name: "a", age: 20, email: ""});
