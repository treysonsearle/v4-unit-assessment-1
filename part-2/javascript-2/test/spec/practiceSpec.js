//Test Suite
function stringContaining(subStr) {
  return {
    asymmetricMatch: function (compareTo) {
      return compareTo.includes(subStr) ? true : false
    },
    jasmineToString: function () {
      return '[correct string]'
    },
  }
}

describe('Skills Check 1', function () {
  describe('Problem 1 - Git Definition', function () {
    it('gitDefinition variable should exist', function () {
      expect(gitDefinition).toBeDefined()
    })
    it('should be the correct data type', function () {
      expect(typeof gitDefinition).toBe('string')
    })
  })
  describe('Problem 2 - GitHub Definition', function () {
    it('faveNum variable should exist', function () {
      expect(gitHubDefinition).toBeDefined()
    })
    it('should be the correct data type', function () {
      expect(typeof gitHubDefinition).toBe('string')
    })
  })
  describe('Problem 3 - init', function () {
    it('lovesCode variable should exist', function () {
      expect(init).toBeDefined()
    })
    it('should be the correct data type', function () {
      expect(typeof init).toBe('object')
    })
    it('should contain correct keys', function () {
      expect(init).toEqual(
        jasmine.objectContaining({
          description: jasmine.any(String),
          code: jasmine.any(String),
        })
      )
    })
    it('should contain correct git command', function () {
      expect(init).toEqual(
        jasmine.objectContaining({ code: stringContaining('git init') })
      )
    })
  })
})
