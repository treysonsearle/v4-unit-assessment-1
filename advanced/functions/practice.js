//========= DO NOT TOUCH THIS CODE =========//
try {
  var a = hey
} catch (err) {
  var a
}
try {
  var b = hi
} catch (err) {
  var b
}
try {
  var c = hello
} catch (err) {
  var c
}
//============= CONTINUE BELOW =============//
//+++++++++ Start Here! All problems are below. For variables, use var. +++++++++//

///////////////////Problem 1//////////////////
//Create a function called hey, using a function
//declaration. hey should take in a 'name' parameter, and return
//the string "Hey " plus the name.

//Code here

function hey(name) {
  return `Hey ${name}`
}

///////////////////Problem 2//////////////////
//Create a function called hi, using a function
//expression (without ES6). hi should take in a 'name' parameter, and return
//the string "Hi " plus the name.

//Code here

const hi = function (name) {
  return `Hi ${name}`
}

///////////////////Problem 3//////////////////
//Create a function called hello, using an arrow
//function. hello should take in a 'name' parameter, and return
//the string "Hello " plus the name.

//Code here

const hello = (name) => `Hello ${name}`

///////////////////Problem 4//////////////////
//Create a function named fun, which takes in
//a single string parameter, and returns that string
//with "!!!!!" added to the end of it. Then, call fun
//with the string "Yay" and save the result of the function to a
//variable called funTimes.

//Code here

const fun = (str) => `${str}!!!!!`
const funTimes = fun('Yay')

//////////////////PROBLEM 5////////////////////

//Create a function called invokesCallbacks that takes
//three parameters: a number, a callback, and another callback.
//If the number is greater than 10, invokesCallbacks should
//return the FIRST callback param invoked. Else, invokesCallbacks
//should return the SECOND callback param invoked.

//Code here

const invokesCallbacks = (num, cb, cb2) => {
  if (num > 10) {
    return cb()
  } else {
    return cb2()
  }
}

//////////////////PROBLEM 6////////////////////

//Within the function timedGreeting below, create a setTimeout (a native javascript method) that assigns the result of invoking the callback parameter to the variable greeting, after 1 second.  If you don't know how to use setTimeout you can find information here: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

var greeting

function timedGreeting(callback) {
  setTimeout(() => {
    greeting = callback()
  }, 1000)
}
