const fs = require('fs');

// // creating a folder called "practice files"

// // fs.mkdir('./practice-files', (err)=>{
// //     if(err){
// //          return err
// //     }
// //     console.log('Folder Created');
// // }
// // );
// // fs.writeFile('./practice-files/notes.txt','Learning Node.js Node.js FS module is fun !',(err)=>{
// //     if(err){
// //         return err
// //     }
// //     console.log('file created and written');
// // });

// // fs.appendFile('./practice-files/notes.txt','\n Appending some extra text', (err)=>{
// // if(err){
// //     return err
// // }
// // console.log('added a notes successfully!');
// // })

// // fs.readFile('./practice-files/notes.txt', (err, data)=>{
// //     if(err){
// //         return err
// //     }
// //     console.log(data.toString());
// // })

// // fs.rename('./practice-files/notes.txt', './practice-files/finalnotes.txt', (err)=>{
// //     if(err){
// //         console.log(err);
// //     }
// //      console.log(`renamed it`);
// // })

// // let me try to do some thing see  what i try do

// if(!fs.existsSync('./practice-files/finalnotes.txt')){
//    // fs.writeFile('./practice-files/notes.txt','Learning Node.js Node.js FS module is fun !',(err)=>{
//         //     if(err){
//         //         return err
//         //     }
//         //     console.log('file created and written');
//         // });
//         // fs.appendFile('./practice-files/notes.txt','\n Appending some extra text', (err)=>{
// // if(err){
// //     return err
// // }
// // console.log('added a notes successfully!');
// // })
// //fs.readFile('./practice-files/notes.txt', (err, data)=>{
//     //     if(err){
//     //         return err
//     //     }
//     //     console.log(data.toString());
//     // })
//    // fs.rename('./practice-files/notes.txt', './practice-files/finalnotes.txt', (err)=>{
//         //     if(err){
//         //         console.log(err);
//         //     }
//         //      console.log(`renamed it`);
//         // })
    
// if(fs.existsSync(`./practice-online/finalnotes.txt`)){
//     fs.unlink(`practice-files/finalnotes.txt`, (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log(`File Deleted`);
//     })
// }