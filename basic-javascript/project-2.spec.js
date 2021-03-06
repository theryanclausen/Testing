const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('getBiggest function', ()=>{
    it('should return the bigger number', ()=>{
        expect(funcs.getBiggest(1,2)).toBe(2)
    })
    describe('should return null for non-number params',()=>{
        it('should return null for strings', ()=>{
            expect(funcs.getBiggest('hi',1)).toBe(null);
        })
        it('should return null for objects', ()=>{
            expect(funcs.getBiggest(2,{1:'any'})).toBe(null);
        })
        it('should return null for boolean values', ()=>{
            expect(funcs.getBiggest(false,3)).toBe(null);
        })
    })
})

describe('greeting function', () =>{
    it('should return a string when a string is passed', ()=>{
        const result = funcs.greeting('English')
        expect(typeof result).toBe('string')
    });
    it('should return Guten Tag for case German', ()=>{
        expect(funcs.greeting('German')).toBe('Guten Tag!')
    });
    it('should return Hola! for case Spanish', ()=>{
        expect(funcs.greeting('Spanish')).toBe('Hola!')
    })
    it('should return Hello! for default case', ()=>{
        expect(funcs.greeting('any')).toBe('Hello!')
    })

    describe('should return null for non-string params',()=>{
        it('should return null for numbers', ()=>{
            expect(funcs.greeting(1)).toBe(null);
        })
        it('should return null for objects', ()=>{
            expect(funcs.greeting({1:'any'})).toBe(null);
        })
        it('should return null for boolean values', ()=>{
            expect(funcs.greeting(false)).toBe(null);
        })
    })
})

describe('isTenOrFive function', ()=>{
    describe('should return true for 10 or 5', ()=>{
        it('5', ()=>{
          expect(funcs.isTenOrFive(5)).toBe(true);  
        });
        it('10', ()=>{
          expect(funcs.isTenOrFive(10)).toBe(true);  
        });
    });

    it('should return false for non 10 or 5 numbers', ()=>{
        expect(funcs.isTenOrFive(4)).toBe(false);
    })

    describe('should return false for non-number params',()=>{
        it('should return false for strings', ()=>{
            expect(funcs.isTenOrFive('hi')).toBe(false);
        })
        it('should return false for objects', ()=>{
            expect(funcs.isTenOrFive({1:'any'})).toBe(false);
        })
        it('should return false for boolean values', ()=>{
            expect(funcs.isTenOrFive(false)).toBe(false);
        })
    })
})

describe('isInRange function', ()=>{
    it('should return true for numbers in range', ()=>{
        expect(funcs.isInRange(21)).toBe(true);
    })
    it('should return false for numbers not in range', ()=>{
        expect(funcs.isInRange(99)).toBe(false);
    })
    describe('should return false for non-number params',()=>{
        it('should return false for strings', ()=>{
            expect(funcs.isInRange('hi')).toBe(false);
        })
        it('should return false for objects', ()=>{
            expect(funcs.isInRange({1:'any'})).toBe(false);
        })
        it('should return false for boolean values', ()=>{
            expect(funcs.isInRange(false)).toBe(false);
        })
    })
})

describe('isInteger function', ()=>{

    it('should return true for integers',()=>{
        expect(funcs.isInteger(55)).toBe(true)
    })

    it('should return false for floats',()=>{
        expect(funcs.isInteger(5.5)).toBe(false)
    })

    describe('should return false for non-number params',()=>{
        it('should return false for strings', ()=>{
            expect(funcs.isInteger('hi')).toBe(false);
        })
        it('should return false for objects', ()=>{
            expect(funcs.isInteger({1:'any'})).toBe(false);
        })
        it('should return false for boolean values', ()=>{
            expect(funcs.isInteger(false)).toBe(false);
        })
    })
})

describe('fizzBuzz function', ()=>{
    it('should return fizz for numbers divisible by 3 and not by 5', ()=>{
        expect(funcs.fizzBuzz(6)).toBe('fizz')
    })
    it('should return buzz for numbers divisible by 5 and not by 3',()=>{
        expect(funcs.fizzBuzz(10)).toBe('buzz')
    })
    it('should return fizzbuzz if number divisible by both 3 and 5', ()=>{
        expect(funcs.fizzBuzz(15)).toBe('fizzbuzz')
    })
    it('should return number if number is divisible by neither 3 nor 5', ()=>{
        expect(funcs.fizzBuzz(1)).toBe(1)
    })

    describe('should return null for non-number params',()=>{
        it('should return null for strings', ()=>{
            expect(funcs.fizzBuzz('hi')).toBe(null);
        })
        it('should return null for objects', ()=>{
            expect(funcs.fizzBuzz({1:'any'})).toBe(null);
        })
        it('should return null for boolean values', ()=>{
            expect(funcs.fizzBuzz(null)).toBe(null);
        })
    })
}) 

describe('isPrime function', ()=>{
    it('should return true for prime numbers',()=>{
        expect(funcs.isPrime(5)).toBe(true)
    })
    it('should return false for non-prime numbers',()=>{
        expect(funcs.isPrime(8)).toBe(false)
    })
    describe('should return false for non-number params',()=>{
        it('should return false for strings', ()=>{
            expect(funcs.isPrime('hi')).toBe(false);
        })
        it('should return false for objects', ()=>{
            expect(funcs.isPrime({1:'any'})).toBe(false);
        })
        it('should return false for boolean values', ()=>{
            expect(funcs.isPrime(false)).toBe(false);
        })
    }) 
})

describe('returnFirst function', ()=>{
    it('should return first value in array',()=>{
        expect(funcs.returnFirst([1,2,'a'])).toBe(1)
    })

    describe('should return null for non-array params',()=>{
        it('should return null for strings', ()=>{
            expect(funcs.returnFirst('hi')).toBe(null);
        })
        it('should return null for numbers', ()=>{
            expect(funcs.returnFirst(34)).toBe(null)
        })
        it('should return null for objects', ()=>{
            expect(funcs.returnFirst({1:'any'})).toBe(null);
        })
        it('should return null for boolean values', ()=>{
            expect(funcs.returnFirst(false)).toBe(null);
        })
    })
})

describe('returnLast function', ()=>{
    it('should return last value in array',()=>{
        expect(funcs.returnLast([1,2,'a'])).toBe('a')
    })

    describe('should return null for non-array params',()=>{
        it('should return null for strings', ()=>{
            expect(funcs.returnLast('hi')).toBe(null);
        })
        it('should return null for numbers', ()=>{
            expect(funcs.returnLast(34)).toBe(null)
        })
        it('should return null for objects', ()=>{
            expect(funcs.returnLast({1:'any'})).toBe(null);
        })
        it('should return null for boolean values', ()=>{
            expect(funcs.returnLast(false)).toBe(null);
        })
    })
})

describe('getArrayLength function', ()=>{
    it('should return last value in array',()=>{
        expect(funcs.getArrayLength([1,2,'a'])).toBe(3)
    })

    describe('should return null for non-array params',()=>{
        it('should return null for strings', ()=>{
            expect(funcs.getArrayLength('hi')).toBe(null);
        })
        it('should return null for numbers', ()=>{
            expect(funcs.getArrayLength(34)).toBe(null)
        })
        it('should return null for objects', ()=>{
            expect(funcs.getArrayLength({1:'any'})).toBe(null);
        })
        it('should return null for boolean values', ()=>{
            expect(funcs.getArrayLength(false)).toBe(null);
        })
    })
})

describe('incrementByOne function', ()=>{
    it('should increment all values in array by 1',()=>{
        expect(funcs.incrementByOne([1,2,3])).toEqual([2,3,4])
    })
    it('should return null for arrays that contain non-number values', ()=>{
        expect(funcs.incrementByOne([1,2,'three'])).toBe(null)
    }) 

    describe('should return null for non-array params',()=>{
        it('should return null for strings', ()=>{
            expect(funcs.incrementByOne('hi')).toBe(null);
        })
        it('should return null for numbers', ()=>{
            expect(funcs.incrementByOne(34)).toBe(null)
        })
        it('should return null for objects', ()=>{
            expect(funcs.incrementByOne({1:'any'})).toBe(null);
        })
        it('should return null for boolean values', ()=>{
            expect(funcs.incrementByOne(false)).toBe(null);
        })
    })
})