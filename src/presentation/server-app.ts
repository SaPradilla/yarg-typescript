import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base        :number;
    limit       :number;
    displayTable:boolean;
    fileName    :string;
    destination :string;
}



export class ServerApp{
    static run({base,limit,displayTable,fileName,destination}: RunOptions){
        console.log('server runninng...');

        const table      = new CreateTable().execute({base,limit});
        
        const wasCreated = new SaveFile().execute( { fileContent: table , destination, fileName} );

        if( displayTable ) console.log(table);

        ( wasCreated) 
            ? console.log('File created!')
            : console.log('File not created!')        
    }



}