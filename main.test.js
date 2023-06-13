const { sum, stringLength, reverseString } = require( './main' );

it ('result of the sum', ()=>{
    expect (sum(1,2)).toBe(3)
})

// Task 1

it ('return 4 if string length is 4', ()=>{
    expect ( stringLength('abcd') ).toBe(4)
})

it ('return error if string is less than 1 ', ()=>{
    expect ( 
        ()=> stringLength('')
     ).toThrow('Lenght is less than 1 or more than 10');
})

it ('return error if strin is more than 10', ()=>{
    expect ( 
        ()=> stringLength('12345678901')
     ).toThrow('Lenght is less than 1 or more than 10');
})

//task 2

it ( 'check if string abcd is reversed', () => {
    expect ( reverseString('abcd') ).toBe('dcba')
} ) 
