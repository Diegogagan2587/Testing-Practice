function sum (a,b){
    return a+b;
}

/*    ---- Start Task 1 ----    */ 
function stringLength(string){
    console.log('runing stringLength')
    console.log('string to check =',string)
    length = string.length;
    //code bellow
    if(length >= 1 && length <= 10) {
        result = length;
    } else {
        throw new Error ("Lenght is less than 1 or more than 10");
    }

    //code upwards
    console.log(result);
    return result;
};
/*    ---- Ends Task 1 ----    */ 
/*    ---- Start Task 2 ----    */ 
/*    ---- Ends Task 2 ----    */ 
/*    ---- Start Task 3 ----    */ 
/*    ---- Ends Task 3 ----    */ 
/*    ---- Start Task 4 ----    */ 
/*    ---- Ends Task 4 ----    */ 

module.exports = { stringLength, sum }
