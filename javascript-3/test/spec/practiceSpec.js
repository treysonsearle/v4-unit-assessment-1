//Test Suite
const displayData = () => null

describe('Week Two Skills Check', function () {
  describe('Step 1', () => {
    it('groceries should exist', () => {
      expect(groceries).toBeDefined()
    })
    it('should be the correct data type', () => {
      expect(Array.isArray(groceries)).toBeTrue()
    })
  })
  describe('Step 2', () => {
    it('yourName should exist', () => {
      expect(yourName).toBeDefined()
    })
    it('should be the correct data type', () => {
      expect(typeof yourName).toBe('string')
    })
  })
  describe('Step 3', () => {
    it('setGroceryListTitle should exist', () => {
      expect(setGroceryListTitle).toBeDefined()
    })
    it('should be a function', () => {
      expect(typeof setGroceryListTitle).toBe('function')
    })
    it('should return correct value', () => {
      expect(setGroceryListTitle('name')).toBe("name's Grocery List")
    })
  })
  describe('Step 4', () => {
    it('addItem should exist', () => {
      expect(addItem).toBeDefined()
    })
    it('should be a function', () => {
      expect(typeof addItem).toBe('function')
    })
    it('should perform the correct operation', () => {
      addItem('milk')

      expect(groceries).toEqual(jasmine.arrayContaining(['milk']))
    })
  })
  describe('Step 5', () => {
    it('removeItem should exist', () => {
      expect(removeItem).toBeDefined()
    })
    it('should be a function', () => {
      expect(typeof removeItem).toBe('function')
    })
    it('should perform the correct operation', () => {
      removeItem(groceries.length - 1)
      expect(groceries).not.toEqual(jasmine.arrayContaining(['milk']))
    })
  })
  describe('Step 6', () => {
    it('checkGroceryCount should exist', () => {
      expect(checkGroceryCount).toBeDefined()
    })
    it('should be a function', () => {
      expect(typeof checkGroceryCount).toBe('function')
    })
    it('should perform the correct operation', () => {
      groceries.splice(0, Infinity)
      groceries.push(0)
      expect(checkGroceryCount()).toEqual('1 item')
    })
    it('should perform the correct operation', () => {
      groceries.splice(0, Infinity)
      groceries.push(0, 1, 2)
      expect(checkGroceryCount()).toEqual('3 items')
    })
    it('should perform the correct operation', () => {
      groceries.splice(0, Infinity)
      groceries.push(0, 1, 2, 3, 4, 5)
      expect(checkGroceryCount()).toEqual('That looks like a big trip')
    })
  })
})
