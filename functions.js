 // Arrow Functions with arguments 

 /*
 const play_The = (funky)=>{
    return funky + "music";
 }

 const playThe = funky => {
    return funky + " music";    //1. if there is only one arugment , the paranthesis() can omitted.
 }

  const playthe  = funcky => funcky + "music"; //2. if there is written in  a one line then  the brackets also will  be omitted and no need of return statement.



// Arrow Functions with out an Arguments
//  so that there is no Parameters there should be paranthesis in no armugent arrow functions
 const play_That = () => "funky music";


 const playThat = ()=> 
    {
         return "funcky music" 
        //Call Backs =  a function that is passed as an argument to another function
//                  * used to handle asynchronous  operations.
//                  * Reading a file
//                  * Network Requests
//                  * Interacting with databases
//
hello(leave);

function hello(callback){
    console.log(`Hello!`); 
    callback();
}

function leave(){
    console.log("Leave"); 
}

function goodbye (){
    console.log(`Goodbye!`);
}
     "Hey, when  you are done, call this next,"
        }*/
                 
function sum(callback, x, y){
    let result = x+y;
    callback(result);
}

 function display(result){
    console.log(result);
 }
 sum(display, 3, 4);