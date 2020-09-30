//Helper Functions
const searchFiles = async (pathArr, strArr) => {
  let response = await axios.post(`http://localhost:4000/api/search`, {pathArr, strArr})
  return response.data
}

//Test Suite
describe('HTML & CSS Sections 1 & 2', () => {
  describe('The following HTML tags are used in index-1.html and/or index-2.html', () => {
    let htmlFiles = ['html-css-1/index-1.html', 'html-css-2/index-2.html']

    it('link, title, doctype, head, meta', async () => {
      let itemsToCheck = [
        '<link',
        '<title',
        '</title>', 
        '<!DOCTYPEhtml>',
        '<head',
        '</head>',
        '<meta'
      ]
      let result = await searchFiles(htmlFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('h1, h2, p, br, body, img, div', async () => {
      let itemsToCheck = [
        '<h1',
        '</h1>',
        '<h2', 
        '</h2>', 
        '<p', 
        '</p>', 
        '<br', 
        '<body', 
        '</body>', 
        '<img', 
        '<div', 
        '</div>'
      ]
      let result = await searchFiles(htmlFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

  })

  describe('The following CSS selectors and properties are used in style-1.css and/or style-2.css', function () {
    let cssFiles = ['html-css-1/style-1.css', 'html-css-2/style-2.css']
   
    it('margin, padding, border, border-radius', async () => {
      let itemsToCheck = [
        'margin:', 
        'padding:', 
        'border:', 
        'border-radius:'
      ]
      let result = await searchFiles(cssFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('height, width, box-sizing', async () => {
      let itemsToCheck = [
        'height:',
        'width:', 
        'box-sizing:'
      ]
      let result = await searchFiles(cssFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('display, font-size, text-align', async () => {
      let itemsToCheck = [
        'display:', 
        'font-size:', 
        'text-align:'
      ]
      let result = await searchFiles(cssFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('background-color, box-shadow, float, clear', async () => {
      let itemsToCheck = [
        'background-color:', 
        'box-shadow:', 
        'float:', 
        'clear:'
      ]
      let result = await searchFiles(cssFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

  })

})
