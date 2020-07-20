//Test Suite
//Helper Function
function arrayIncludes(arr, values) {
  let allGood = true
  for (let i = 0; i < values.length; i++) {
    if (!arr.includes(values[i])) {
      allGood = false
      break
    }
  }
  return allGood
}

describe('functions 1', function () {
  describe('Problem 1 - hey', function () {
    it('should be a function', function () {
      expect(typeof hey).toEqual('function')
    })
    it('should return "Hey Anna" when passed "Anna"', function () {
      expect(hey('Anna')).toEqual('Hey Anna')
    })
    it('should be a function declaration', function () {
      expect(typeof a).toEqual('function')
    })
  })

  describe('Problem 2 - hi', function () {
    it('should be a function', function () {
      expect(typeof hi).toEqual('function')
    })
    it('should return "Hi Anna" when passed "Anna"', function () {
      expect(hi('Anna')).toEqual('Hi Anna')
    })
    it('should be a function expression', function () {
      let correct = hi.prototype && !b
      expect(correct).toBe(true)
    })
  })

  describe('Problem 3 - hello', function () {
    it('should be a function', function () {
      expect(typeof hello).toEqual('function')
    })
    it('should return "Hello Anna" when passed "Anna"', function () {
      expect(hello('Anna')).toEqual('Hello Anna')
    })
    it('should be an arrow function', function () {
      let correct = !hello.prototype && !c
      expect(correct).toBe(true)
    })
  })

  describe('Problem 4 - fun', function () {
    it('should be a function', function () {
      expect(typeof fun).toEqual('function')
    })
    it('should return "Wheeeee!!!!!" when passed "Wheeeee"', function () {
      expect(fun('Wheeeee')).toEqual('Wheeeee!!!!!')
    })
    it('should return proper value when passed a string', function () {
      let correct = fun('a') === 'a!!!!!'
      expect(correct).toEqual(true)
    })
    it('funTimes should have the correct value', function () {
      let correct = funTimes === 'Yay!!!!!'
      expect(correct).toEqual(true)
    })
  })

  describe('Problem 5 - invokesCallbacks', function () {
    function greaterThan10() {
      return 'I am greater than 10'
    }
    function lessThan10() {
      return 'I am less than or equal to 10'
    }
    it('should exist', function () {
      expect(invokesCallbacks).toBeDefined()
    })
    it('should return the first callback param invoked if the num param is greater than 10', function () {
      var a = invokesCallbacks(28, greaterThan10, lessThan10)
      var b = invokesCallbacks(15, greaterThan10, lessThan10)
      var c = invokesCallbacks(11, greaterThan10, lessThan10)
      let correct =
        a === 'I am greater than 10' &&
        b === 'I am greater than 10' &&
        c === 'I am greater than 10'
      expect(correct).toBe(true)
    })
    it('should return the first callback param invoked if the num param is less than or equal to 10', function () {
      var a = invokesCallbacks(5, greaterThan10, lessThan10)
      var b = invokesCallbacks(2, greaterThan10, lessThan10)
      var c = invokesCallbacks(7, greaterThan10, lessThan10)
      let correct =
        a === 'I am less than or equal to 10' &&
        b === 'I am less than or equal to 10' &&
        c === 'I am less than or equal to 10'
      expect(correct).toBe(true)
    })
  })

  describe('Problem 6 - greeting', function () {
    it('should be undefined less than 1 second after timedGreeting is called', function () {
      greeting = undefined
      timedGreeting(() => 'Hey!')
      expect(greeting === undefined).toBe(true)
    })
    it('should be defined 1 second after timedGreeting is called', function (done) {
      greeting = undefined
      timedGreeting(() => 'Hey!')
      let allGood = false
      setTimeout(() => {
        if (greeting === 'Hey!') allGood = true
        expect(allGood).toBe(true)
        done()
      }, 1000)
    })
  })

  describe('Problem 7 - addNumbers', function () {
    it('should return an array', function () {
      expect(Array.isArray(addNumbers(3))).toBe(true)
    })
    it('should fill the returning array with numbers up to (but not including) the value passed in', function () {
      var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      var newArr = addNumbers(10)
      expect(arrayIncludes(newArr, arr) && newArr.length === 10).toEqual(true)
    })
    it('should fill the returning array with numbers up to (but not including) the value passed in', function () {
      var arr = [0, 1, 2, 3, 4, 5, 6, 7]
      var newArr = addNumbers(8)
      let correct = arrayIncludes(newArr, arr) && newArr.length === 8
      expect(correct).toEqual(true)
    })
  })

  describe('Problem 8 - backwardsGreeting', function () {
    it('should return an array', function () {
      expect(Array.isArray(backwardsGreeting([1, 2, 3]))).toBe(true)
    })
    it('should NOT use the Array.reverse method', function () {
      let str = backwardsGreeting.toString()
      let correct = !str.includes('reverse()')
      expect(correct).toEqual(true)
    })
    it('should return ["Hello, Mary", "Hello, Bob", "Hello, George"] when passed ["George", "Bob", "Mary"]', function () {
      expect(backwardsGreeting(['George', 'Bob', 'Mary'])).toEqual([
        'Hello, Mary',
        'Hello, Bob',
        'Hello, George',
      ])
    })
    it('should return a reversed array with the correct greeting string when passed any array', function () {
      let correct =
        backwardsGreeting(['a', 'b', 'c']).toString() ===
        'Hello, c,Hello, b,Hello, a'
      expect(correct).toEqual(true)
    })
  })

  describe('Problem 9 - leapFrog', function () {
    it('should return an array', function () {
      expect(Array.isArray(leapFrog([1, 2, 3]))).toBe(true)
    })
    it('should use a for loop that increments by two', function () {
      let str = leapFrog.toString()
      let correct =
        str.includes('+=2') ||
        str.includes('+= 2') ||
        str.includes('i+2') ||
        str.includes('i+ 2') ||
        str.includes('i +2') ||
        str.includes('i + 2')
      expect(correct).toEqual(true)
    })
    it('should return ["Tree frog", "Dog", "Bull frog" , "Cat"] when passed ["Tree", "Dog", "Bull", "Cat"]', function () {
      expect(leapFrog(['Tree', 'Dog', 'Bull', 'Cat'])).toEqual([
        'Tree frog',
        'Dog',
        'Bull frog',
        'Cat',
      ])
    })
    it('should return the correct array when passed any array of strings', function () {
      let correct = leapFrog([1, 2, 3, 4]).toString() === '1 frog,2,3 frog,4'
      expect(correct).toEqual(true)
    })
  })
})
