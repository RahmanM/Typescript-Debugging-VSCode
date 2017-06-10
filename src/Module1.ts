// Export module
export module module1
{
    export interface IPrintMessage{
        Print(message :string):void;
    }

    export class MessagePrinter implements IPrintMessage
    {
        constructor(){

        }

        Print(message: string) {
            console.log(message);
        }
    }
}
