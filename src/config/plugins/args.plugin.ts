import yargs,{ options } from "yargs";
import { hideBin } from "yargs/helpers";


export const yarg = yargs(hideBin(process.argv))
    .option('b',{
        alias:'base',
        type:'number',
        demandOption:true,
        describe:"base para mulitiplicar",
    })
    .option('l',{
        alias:'limit',
        type:'number',
        default:10,
        describe:'Limite para multiplicar',

    })
    .option('s',{
        alias:'show',
        type:'boolean',
        default:false,
        describe:'mostrar la tabla de multiplicacion',
    })
    .option('n',{
        alias:'name',
        type:'string',
        default:'table',
        describe:'File name',
    })
    .option('d',{
        alias:'destination',
        type:'string',
        default:'outputs',
        describe:'File destination',
    })
    .check((argv,option)=>{
        if( argv.b < 1 ) throw 'Error: no puede ser mayor a 0';

        return true

    })
    .parseSync()