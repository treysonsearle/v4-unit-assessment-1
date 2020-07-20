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
})
