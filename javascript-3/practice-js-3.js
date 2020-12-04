//////////////////STEP 1////////////////////
/* Create an array called 'groceries' that contains three grocery items of your choice as strings. */

//CODE HERE
let groceries = ['carrot', 'bacon', 'soup']
//////////////////STEP 2////////////////////
/* Create a variable called 'yourName' that is assigned the value of your name as a string. */

//CODE HERE
let yourName = 'Treyson'
//////////////////STEP 3////////////////////
/*
    Create a function called 'setGroceryListTitle' that takes in one parameter called 'x'. 
    The function should return a string of 'XPARAM's Grocery List'.
    For example: if the string 'Joseph' is passed in for the variable x 
    the function would return 'Joseph's Grocery List'.
*/

//CODE HERE
function setGroceryListTitle(x){
    return x + "'s Grocery List"
}
//////////////////STEP 4////////////////////
/* 
    Create a function called 'addItem' that takes in one parameter called 'item'. 
    Add the item parameter to the end of the groceries array created above. 
    Inside of addItem, invoke displayData() which is a function you did not create (we did) 
    that takes care of some of the work for getting your page to display correctly.
*/

//CODE HERE
function addItem(item){
    groceries.push(item)
    displayData()
}
//////////////////STEP 5////////////////////
/*
    Create a function called 'removeItem' that takes in one parameter called 'index'. 
    Inside of the removeItem function, remove the item that corresponds to the index parameter
    from the groceries array above by using splice. 
   let  Then, invoke the displayData() function inside of your removeItem function.
*/

//CODE HERE
function removeItem(index){
    groceries.splice(groceries[index])
    displayData()
}
//////////////////STEP 6////////////////////
/*
    Create a function called 'checkGroceryCount'. Inside of checkGroceryCount, 
    you're going to check the total number of groceries in your groceries array using .length. 
    Using an if/else statement, check if the number of groceries is greater than 5. 
    If it is, return the string 'That looks like a big trip' from the function. 
    If the number of groceries is equal to one, return the string '1 item'. 
    If the amount of groceries is between 1 and 5, return the string 'NUMBEROFGROCERIES items' 
    with NUMBEROFGROCERIES replaced by the number of items in your groceries array.
*/

//CODE HERE
function checkGroceryCount(){
    if (groceries.length > 5){
        return 'That looks like a big trip'
    }
    else if (groceries.length > 1 && groceries.length <= 5){
        console.log(groceries.length + ' items')
        return groceries.length + ' items'
    }
    else if (groceries.length = 1) {
        console.log('1 item')
        return '1 item'
    }
    
}


//////////////////Check out your code!////////////////////
/*
    Open javascript-3/DO_NOT_EDIT/index.html in your browser.
    You should be see a title - 'SomeName's Grocery List' and a subheading that says '0 items.'
    If you type in the box and click the button, the item should be added to your list. 
    The items counter should change as you add more items. 
    If you double click on an item, it should be removed. 
*/