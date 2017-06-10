var Module1;
(function (Module1) {
    var MessagePrinter = (function () {
        function MessagePrinter() {
        }
        MessagePrinter.prototype.Print = function (message) {
            console.log(message);
        };
        return MessagePrinter;
    }());
    Module1.MessagePrinter = MessagePrinter;
})(Module1 || (Module1 = {}));
var Module2;
(function (Module2) {
    var Main = (function () {
        function Main() {
        }
        Main.prototype.Do = function () {
            var printer = new Module1.MessagePrinter();
            printer.Print("Hello, Debugging with Typescript in VSCode!");
        };
        return Main;
    }());
    Module2.Main = Main;
})(Module2 || (Module2 = {}));
var main = new Module2.Main();
main.Do();
//# sourceMappingURL=Hello.js.map