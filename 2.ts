// let age: number = 50;
// let firstName: string = "Max";
// let toggle: boolean = true;
// let empty: null = null;
// let notInitialize: undefined = undefined;
// let callback = (a: number) => {
//   return 100 + a;
// };

//!

// let anything: any = -20;
// anything = "Text";
// anything = {};

//!

// let some: string;
// some = "Text";

// let str: string;

// str = some;

//!

// let person: [string, number];

// person = ["Max", 21];

//!

// enum Loader {
//   LOADING,
//   READY,
// }

// const windows = { status: Loader.READY };

// if (windows.status === Loader.LOADING) {
//   console.log("Please, await");
// } else {
//   console.log("You page ready!");
// }
// console.log(1);

//!

// let union: number | string;

// union = 22;
// union = "cars";

//!

// let literal: "enable" | "disable";

//!

// function showMessage(message): void {
//   console.log(message);
// }

// function calc(num1: number, num2: number): number {
//   return num1 + num2;
// }

// function customError(): never {
//   throw new Error("Error");
// }

//!

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: string;
    updateAt: string;
  };
};

const page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

const page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
