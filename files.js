const { isUtf8 } = require('buffer');
const fs = require('fs'); // filesystem


//reading files
// fs.readFile('./docs/blog.txt',(err, data)=>{
//   if(err){
//     console.log(err);
//   }
//     console.log(data.toString());
   
// });

// writing files
// fs.writeFile('./docs.blog2.txt', 'Learning Fs using node', (error)=>{
//     if(error){
//     console.log(error);
//     }
// else{
// console.log(`File written`);
// }
// });




// // directories
// if(!fs.existsSync('./ass')){
// fs.mkdir('./ass', (err)=>{
// if(err){
// console.log(err);
// }
// console.log(`folder created`);
// })
// }
// else{
//     fs.rmdir('./ass', (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log(`Folder Deleted`);
//     })
// }




// deleting files
if(fs.existsSync('./docs/blog.txt',)){
    fs.rm('./docs/blog.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log(`Deleted`);
    })
}