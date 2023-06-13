function sum (a,b){
    return a+b;
}

/*    ---- Start Task 1 ----    */ 
function stringLength(string){
    length = string.length;
    //code bellow
    if(length >= 1 && length <= 10) {
        result = length;
    } else {
        throw new Error ("Lenght is less than 1 or more than 10");
    }

    //code upwards
    return result;
};
/*    ---- Ends Task 1 ----    */ 
/*    ---- Start Task 2 ----    */ 
function reverseString(string){
        //convertimos a array para poder manipular
        let strFromArr = [...string];
        let result = [];

        strFromArr.forEach(character => {
            result.unshift(character);
            console.log('result after loop',result)
        });

        result = result.join('');

        return result;
}
/*    ---- Ends Task 2 ----    */ 
/*    ---- Start Task 3 ----    */ 
/*    ---- Ends Task 3 ----    */ 
/*    ---- Start Task 4 ----    */ 
/*    ---- Ends Task 4 ----    */ 

module.exports = { stringLength, sum, reverseString }
