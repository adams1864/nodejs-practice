const fs = require("fs");

const readstream = fs.createReadStream('./docs/blog3.txt',{encoding: "utf-8"});
const writestream  = fs.createWriteStream(`./docs/blog4.txt`) //  this line of code will write on a new file 
// readstream.on('data', (chunk)=>{
//     console.log(`----- NEW CHUNK ----- `);
//     console.log(chunk);
//     writestream.write(`\n NEW CHUNK \N`);
//     writestream.write(chunk); // this  line of code will write the data that is been on the parameter chunk to blog4.txt i am little confused here.
// })

//PIPING 
 readstream.pipe(writestream); // this means whenever you  read a chunk of  by using pipe method  you will write it into the specified  writestream path


//  fs.unlink(`./docs/blog4.txt`, (err=>{
//     if(err){
//          console.log(err)
//     }
//     console.log(`Deleted`);
//  }))