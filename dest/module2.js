"use strict";
exports.__esModule = true;
// ./Module1 is the name of the file, module1 the actual module name that it exports!!!
var Module1_1 = require("./Module1");
//import * as module1 from "./Module1";
var module2;
(function (module2) {
    var Main = (function () {
        function Main() {
            this.printit = function () {
                console.log("Arrow fufnction!");
            };
        }
        Main.prototype.Do = function () {
            // NB: to use the module name when initialising the class inside it!!
            var printer = new Module1_1.module1.MessagePrinter();
            printer.Print("Hello, Debugging with Typescript in VSCode!");
        };
        return Main;
    }());
    module2.Main = Main;
})(module2 || (module2 = {}));
var main = new module2.Main();
main.Do();
//# sourceMappingURL=module2.js.map