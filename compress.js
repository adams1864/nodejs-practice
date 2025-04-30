const fs = require('fs');

const zlib = require('zlib');

const zipping = zlib.createGzip();

if(!fs.existsSync('./docs/bigdata.txt')){
fs.writeFile('./docs/bigdata.txt', "hi", (err)=>{
    if(err){
        return err
    }
    console.log(`created`);

})
}

inp = fs.createReadStream('./docs/bigdata.txt');
outp = fs.WriteStream('./docs/compressedfiles/bigdata.txt.gz');

const compressed = inp.pipe(zipping).pipe(outp);
if(compressed){
    console.log(`File Compressed Fine`);
}
else{
    console.log(`Error i don't know which one is throwing you should learn error handling`);
}

