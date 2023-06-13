const { sum, stringLength } = require( './main' );

it ('result of the sum', ()=>{
    expect (sum(1,2)).toBe(3)
})

// Task 1

it ('stringLenght counter ', ()=>{
    expect ( stringLength('abcd') ).toBe(4)
})
//stringLength was wrapped by an arrow function to evaluate properly when the function throws an error;
it ('stringLenght counter ', ()=>{
    expect ( 
        ()=> stringLength('')
     ).toThrow('Lenght is less than 1 or more than 10');
})
