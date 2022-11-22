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
var Loader;
(function (Loader) {
    Loader[Loader["LOADING"] = 0] = "LOADING";
    Loader[Loader["READY"] = 1] = "READY";
})(Loader || (Loader = {}));
var windows = { status: Loader.READY };
if (windows.status === Loader.LOADING) {
    console.log("Please, await");
}
else {
    console.log("You page ready!");
}
console.log(1);
