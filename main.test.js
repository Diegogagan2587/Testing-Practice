const { sum, stringLength, reverseString, calculator, capitalize } = require( './main' );

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

//Task 3

describe('add',()=>{
    test('sum 2 + 2 = 4', ()=>{
        expect(calculator.add(2,2)).toBe(4);
    });

    test('sum 200 + 300 = 500',() => {
        expect(calculator.add(200,300)).toBe(500);
    });

    test('sum 1 + 9 = 10',() => {
        expect(calculator.add(1,9)).toBe(10);
    })
});

describe('substrack',()=>{
    test('substrack 5 - 2 = 3', ()=>{
        expect(calculator.substrack(5,2)).toBe(3);
    });

    test('substrack 10 - 5 = 5',() => {
        expect(calculator.substrack(10,5)).toBe(5);
    });

    test('substrack 1000 - 900 = 100',() => {
        expect(calculator.substrack(1000,900)).toBe(100);
    })
})

describe('divide',()=>{
    test('divide 4 / 2 = 2', ()=>{
        expect(calculator.divide(4,2)).toBe(2);
    });

    test('divide 1000 / 2 = 500',() => {
        expect(calculator.divide(1000,2)).toBe(500);
    });

    test('divide 10 / 1 = 10',() => {
        expect(calculator.divide(10,1)).toBe(10);
    })
})

describe('multiply',()=>{
    test('multiply 2 * 2 = 4', ()=>{
        expect(calculator.multiply(2,2)).toBe(4);
    });

    test('multiply 10 * 2 = 20',() => {
        expect(calculator.multiply(10,2)).toBe(20);
    });

    test('multiply 1 * 9 = 9',() => {
        expect(calculator.multiply(1,9)).toBe(9);
    })
})

//task 4

test ('capitalize welcome should return = Welcome',()=>{
    expect( capitalize('welcome') ).toBe('Welcome');
})
