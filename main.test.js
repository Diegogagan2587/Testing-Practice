const { sum, stringLength } = require( './main' );

it ('result of the sum', ()=>{
    expect (sum(1,2)).toBe(3)
})

// Task 1

it ('stringLenght counter ', ()=>{
    expect ( stringLength('abcd') ).toBe(4)
})
