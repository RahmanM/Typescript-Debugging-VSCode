// ./Module1 is the name of the file, module1 the actual module name that it exports!!!
import { module1} from "./Module1";
//import * as module1 from "./Module1";

module module2{

    export interface IClient{
        Do():void;
    }

    export class Main implements IClient
    {
        Do(): void {
            // NB: to use the module name when initialising the class inside it!!
            let printer = new module1.MessagePrinter();
            printer.Print("Hello, Debugging with Typescript in VSCode!");
        }

        printit = () => {     
            console.log("Arrow fufnction!");
        }
     }
}


var main = new module2.Main();
main.Do();