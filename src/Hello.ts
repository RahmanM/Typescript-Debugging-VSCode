

module Module1
{
    export interface IPrintMessage{
        Print(message :string):void;
    }

    export class MessagePrinter implements IPrintMessage
    {
        Print(message: string) {
            console.log(message);
        }
    }
}

module Module2{
    export interface IClient{
        Do():void;
    }

    export class Main implements IClient
    {
        Do(): void {
            var printer = new Module1.MessagePrinter();
            printer.Print("Hello, Debugging with Typescript in VSCode!");
        }
     }
}


var main = new Module2.Main();
main.Do();