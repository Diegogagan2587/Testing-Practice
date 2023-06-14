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
class Calculator {
    constructor (result) {
        this.result = result;
        return this.result;
    }

    add(a,b){
        this.result = a+b;
        return this.result;
    }

    substrack(a,b) {
        this.result = a-b;
        return this.result;
    }

    divide(a,b){
        this.result = a/b;
        return this.result;
    }

    multiply(a,b){
        this.result = a*b;
        return this.result;
    }
}

const calculator = new Calculator;
/*    ---- Ends Task 3 ----    */ 
/*    ---- Start Task 4 ----    */ 

function capitalize(string){
    let temp = [...string]
    temp[0] = temp[0].toUpperCase();
    temp = temp.join('');
    return temp;
}

/*    ---- Ends Task 4 ----    */ 

module.exports = { stringLength, sum, reverseString, calculator, capitalize }
