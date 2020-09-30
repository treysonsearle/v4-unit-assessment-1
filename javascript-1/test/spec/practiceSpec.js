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

function showTheValue(x) {
  return x
}

const countFiles = async (path, str, count) => {
  let response = await axios.get(`http://localhost:4000/api/count?path=${path}&str=${str}&count=${count}`)
  return response.data
}

const jsFile = 'javascript-1/practice-js-1.js'

//Test Suite
describe('Skills Check 1', function () {
  describe('Problem 1 - myName', function () {
    it('myName variable should exist', function () {
      expect(myName).toBeDefined()
    })
    it('should be the correct data type', function () {
      expect(typeof myName).toBe('string')
    })
  })
  describe('Problem 2 - faveNum', function () {
    it('faveNum variable should exist', function () {
      expect(faveNum).toBeDefined()
    })
    it('should be the correct data type', function () {
      expect(typeof faveNum).toBe('number')
    })
  })
  describe('Problem 3 - lovesCode', function () {
    it('lovesCode variable should exist', function () {
      expect(lovesCode).toBeDefined()
    })
    it('should be the correct data type', function () {
      expect(typeof lovesCode).toBe('boolean')
    })
  })
  describe('Problem 4 - sum', function () {
    it('sum function should exist', function () {
      expect(sum).toBeDefined()
    })
    it('sum function should return the correct value', function () {
      expect(sum(3, 3)).toEqual(6)
    })
  })
  describe('Problem 5 - lovesCodeChecker', function () {
    it('lovesCodeChecker variable should exist', function () {
      expect(lovesCodeChecker).toBeDefined()
    })
    it('should be the correct data type', function () {
      expect(lovesCodeChecker(true)).toEqual(true)
    })
    it('should be the correct data type', function () {
      expect(lovesCodeChecker(false)).toEqual(false)
    })
  })
  describe('Problem 6 - oddChecker', function () {
    it('oddChecker should exist', function () {
      expect(oddChecker).toBeDefined()
    })
    it('should return "the number is odd" if the number is odd', function () {
      expect(oddChecker(7)).toBe('the number is odd')
    })
    it('should return "the number is even" if the number is even', function () {
      expect(oddChecker(4)).toBe('the number is even')
    })
  })

  describe('Problem 7 - iLove', function () {
    it('iLove should exist', function () {
      expect(iLove).toBeDefined()
    })
    it('should return "Bryan loves skateboarding" if passed "Bryan" and "skateboarding"', function () {
      expect(iLove('Bryan', 'skateboarding')).toBe('Bryan loves skateboarding')
    })
  })

  describe('Problem 8 - colorCopy', function () {
    it('colorCopy should exist', function () {
      expect(colorCopy).toBeDefined()
    })
    it('should contain the correct colors', function () {
      expect(faveColors[0] === colorCopy[0]).toEqual(true)
    })
    it('should use slice method', async function() {
      let response = await countFiles(jsFile, '.slice(')
      expect(response).toEqual(true)
    })
  })

  describe('Problem 9 - colorCopy add color', function () {
    it('colorCopy should have a fourth color added to it', function () {
      expect(colorCopy.length).toBe(4)
    })
    it('should use push method', async function() {
      let response = await countFiles(jsFile, '.push(')
      expect(response).toEqual(true)
    })
  })

  describe('Problem 10 - middleNums', function () {
    it('middleNums should exist', function () {
      expect(middleNums).toBeDefined()
    })
    it('middleNums should contain the correct numbers', function () {
      expect(middleNums).toEqual([2, 3, 4])
    })
  })

  describe('Problem 11 - me', function () {
    it('me should exist', function () {
      expect(me).toBeDefined()
      expect(typeof me).toBe('object')
    })
    it('me should have the correct key:value pairs', function () {
      expect(typeof me.firstName).toEqual('string')
      expect(typeof me.state).toEqual('string')
      expect(typeof me.age).toEqual('number')
      expect(typeof me.greeter).toEqual('function')
    })
  })

  describe('Problem 12 - bigOrSmall', function () {
    it('bigOrSmall should exist', function () {
      expect(bigOrSmall).toBeDefined()
    })
    it('bigOrSmall should return the correct array', function () {
      expect(bigOrSmall([100, 3, 200, 5, 101])).toEqual([
        'small',
        'small',
        'big',
        'small',
        'big',
      ])
    })
  })

  describe('Problem 13 - arrayReverser', function () {
    it('arrayReverser should exist', function () {
      expect(arrayReverser).toBeDefined()
    })
    it('arrayReverser should return the correct array', function () {
      expect(arrayReverser([1, 2, 3])).toEqual([3, 2, 1])
    })
  })
  describe('Problem 14 - ', function () {
    it('globalScope should contain only variables accessible in the global scope', function () {
      let containsGlobals = arrayIncludes(globalScope, ['global'])
      let containsOutOfScopeVars =
        globalScope.includes('inner') &&
        globalScope.includes('outer') &&
        globalScope.includes('functional')
      expect(containsGlobals && !containsOutOfScopeVars).toBe(true)
    })
    it('firstFunctionScope should contain only variables accessible in the scope of the function firstFunction', function () {
      let containsGlobals = arrayIncludes(firstFunctionScope, [
        'global',
        'outer',
      ])
      let containsOutOfScopeVars =
        firstFunctionScope.includes('inner') ||
        firstFunctionScope.includes('functional')
      expect(containsGlobals && !containsOutOfScopeVars).toBe(true)
    })
    it('innerFunctionScope should contain only variables accessible in the scope of the function innerFunction', function () {
      let containsGlobals = arrayIncludes(innerFunctionScope, [
        'global',
        'outer',
        'inner',
      ])
      let containsOutOfScopeVars = innerFunctionScope.includes('functional')
      expect(containsGlobals && !containsOutOfScopeVars).toBe(true)
    })
    it('secondFunctionScope should contain only variables accessible in the scope of the function secondFunction', function () {
      let containsGlobals = arrayIncludes(secondFunctionScope, [
        'global',
        'functional',
      ])
      let containsOutOfScopeVars =
        secondFunctionScope.includes('inner') &&
        secondFunctionScope.includes('outer')
      expect(containsGlobals && !containsOutOfScopeVars).toBe(true)
    })
  })
  describe('Problem 15 - firstItem', () => {
    it('firstItem exists', () => {
      expect(firstItem).toBeDefined()
    })
    it('should be a function', () => {
      expect(typeof firstItem).toBe('function')
    })
    it('should perform the correct operation', () => {
      const names = ['Andrew', 'Bob', 'Sawson']
      const mySpy = jasmine.createSpy('showValue', showTheValue)
      firstItem(names, mySpy)
      expect(mySpy).toHaveBeenCalledWith('Andrew')
    })
  })
  describe('Problem 16 - isItBob', () => {
    const bob = { name: 'Bob' }
    const notBob = { name: 'Bill' }
    const mySpy = jasmine.createSpy('showValue', showTheValue)
    it('isItBob exists', () => {
      expect(isItBob).toBeDefined()
    })
    it('should be a function', () => {
      expect(typeof isItBob).toBe('function')
    })
    it('should perform the correct operation', () => {
      isItBob(bob, mySpy)
      expect(mySpy).toHaveBeenCalledWith(true)
    })
    it('should perform the correct operation', () => {
      isItBob(notBob, mySpy)
      expect(mySpy).toHaveBeenCalledWith(false)
    })
  })
  describe('Problem 17 - giveMeDoubles', () => {
    it('giveMeDoubles exists', () => {
      expect(giveMeDoubles).toBeDefined()
    })
    it('should be a function', () => {
      expect(typeof giveMeDoubles).toBe('function')
    })
    it('should perform the correct operation', () => {
      const nums = [2, 4, 6, 8]
      const mySpy = jasmine.createSpy('showValue', showTheValue)
      giveMeDoubles(nums, mySpy)
      expect(mySpy).toHaveBeenCalledWith([4, 8, 12, 16])
    })
  })
  describe('Problem 18 - carFactory', () => {
    it('carFactory exists', () => {
      expect(carFactory).toBeDefined()
    })
    it('carFactory should be a function', () => {
      expect(typeof carFactory).toBe('function')
    })
    it('can create cars', () => {
      expect(carFactory('ford', 'focus', 2005)).toEqual({
        make: 'ford',
        model: 'focus',
        year: 2005,
        isNew: false,
      })
    })
    it('can create cars', () => {
      expect(carFactory('ford', 'focus', 2019)).toEqual({
        make: 'ford',
        model: 'focus',
        year: 2019,
        isNew: true,
      })
    })
  })
})
