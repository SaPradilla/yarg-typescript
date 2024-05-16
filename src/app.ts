import { yarg } from './config/plugins/args.plugin';
import { ServerApp } from './presentation/server-app';

(async()=>{
    await main();
})();

async function main(){
    
    const { b:base,l:limit,s:displayTable,n:fileName,d:destination } = yarg;


    ServerApp.run({base,limit,displayTable,fileName,destination});
    
}