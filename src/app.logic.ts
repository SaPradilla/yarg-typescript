import fs from "fs";
import { yarg } from './config/plugins/args.plugin';

const {b:base, l:limit, s:displayTable } = yarg;

const createMul = () => {

    let outputMsg = '';
    const header = `
    =====================

        Tabla del ${base}

    =====================\n
    `;

    for (let i = 1; i < limit; i++) {

        outputMsg += `${ base } x ${ i } = ${ base * i}\n`;
        
    };

    if( displayTable ) {
        console.log( header + outputMsg );
    }


    //Crear archivo
    fs.mkdirSync('outputs',{recursive:true});
    fs.writeFileSync(`outputs/tabla-${base}.txt`,outputMsg)
    console.log('File created!')
}
createMul();