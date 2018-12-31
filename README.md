# JavaScript
* [Eloquent JavaScript](https://eloquentjavascript.net/)
* https://eloquentjavascript.net/code/#2.1
### Table of Content
* [Values](#values)
* [Expressions](#expressions)
    * [Bindings](#bindings)
    * [Functions](#functions)


* [Async/await](https://javascript.info/async-await)

## Values
### Operators
* `typeof` - 
* Operators that use two values are called binary operators, while those that take one are called unary operators. 
* There is only one value in JavaScript that is not equal to itself, and that is NaN (“not a number”).
```javascript
console.log(true && false)
// → false
console.log(true && true)
// → true

console.log(false || true)
// → true
console.log(false || false)
// → false
```
* When you do not want any type conversions to happen, there are two additional operators: === and !==.  The first tests whether a value is precisely equal to the other, and the second tests whether it is not precisely equal. So "" === false is false as expected.
* The || operator, for example, will return the value to its left when that can be converted to true and will return the value on its right otherwise. 
* The && operator works similarly but the other way around. When the value to its left is something that converts to false, it returns that value, and otherwise it returns the value on its right.
* The && operator represents logical and. It is a binary operator, and its result is true only if both the values given to it are true.
* The || operator denotes logical or. It produces true if either of the values given to it is true.
* binary operators for arithmetic (+, -, *, /, and %), string concatenation (+), comparison (==, !=, ===, !==, <, >, <=, >=), and logic (&&, ||), as well as several unary operators (- to negate a number, ! to negate logically, and typeof to find a value’s type) and a ternary operator (?:) to pick one of two values based on a third value.
#### Ternary, operating on three values. It is written with a question mark and a colon, like this:
```javascript
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2
```
 The value on the left of the question mark “picks” which of the other two values will come out. When it is true, it chooses the middle value, and when it is false, it chooses the value on the right.

## Program Structure
## Expressions
* A fragment of code that produces value.

## Statements
* Side effets - 
### Bindings
To catch and hold values, JavaScript provides a binding, or variable.
```javascript
let caught = 5 * 5;
//
let luigiDebt = 140
luigiDebt = luigiDebt - 40
console.log(luigiDebt)
//
let one = 1, two = 2
console.log(one + two)
````
* `let` indicates that this sentence is going to define a binding.  It is followed by the name of the binding and, if we want to immediately give it a value, by an = operator and an expression.
* The previous statement creates a binding called caught and uses it to grab hold of the number that is produced by multiplying 5 by 5.
* const - points to the same binding for as long as it lives
* list of keywords and reserved words:
break case catch class const continue debugger default
delete do else enum export extends false finally for
function if implements import interface in instanceof let
new package private protected public return static super
switch this throw true try typeof var void while with yield

* environment - the collection of bindings and their values that exist at a given time.
### Functions
* A function is a piece of program wrapped in a value.  
* Values given to functions are called arguments.
* Some functions produce a value and some dont, whose only result is a side effect.
* Functions that dont have a return statement return undefined.
* Parameters to a function behave like regular bindings, but their intial values are given by the caller of the function, not the code in the function itself.
* Executing a function is called invoking, calling, or applying it.
* When a function produces a value, it is said to return that value.  Anything that produces a value is an expression in JavaScript, which means function calls can be used within larger expressions.
* Bindings declared with let and const are in fact local to the block that they are declared in, so if you create one of those inside of a loop, the code before and after the loop cannot “see” it.
* JavaScript distinguishes not just global and local bindings. Blocks and functions can be created inside other blocks and functions, producing multiple degrees of locality.
* The set of bindings visible inside a block is determined by the place of that block in the program text. Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. This approach to binding visibility is called lexical scoping.
* functions can be treated as values
* local bindings are re-created everytime a function is called.
* Being able to reference a specific instance of a local binding in an enclosing scope—is called `closure`. A function that references bindings from local scopes around it is called a closure. 

```javascript
function wrapValue(n) {
  let local = n
  return () => local
}

let wrap1 = wrapValue(1)

console.log(wrap1())
```
### Recursion
* Recursive function - a function that calls itself.
* Use recursion for problems that require exploring or processing several “branches”, each of which might branch out again into even more branches.

### Control Flow
* Statement are executed from top to bottom.
```javascript
let theNumber = Number(prompt("Pick a number"))
//unless theNumber is not a number, do this
if(!Number.isNaN(theNumber)){
console.log("Your number is the sq root of " + theNumber*theNumber)
}
//function Number converts a value to a number.
//the result of prompt is a string value and we want a //number
```
* function String - converts a value into a string
* function Boolean - converts a value into a Boolean
* The `Number.isNaN` is a standard JavaScript function that returns `true` only if the argument it is given is NaN.
### Conditional Statements
```javascript
let num = Number(prompt('pick a n'))
if (num < 10) {
  console.log('small')
} else if (num < 100) {
  console.log('medium')
} else {
  console.log('Large')
}

//
let number = 0
while (number <= 12) {
  console.log(number)
  number = number + 2
}

```
* write a program that calculates and shows the value of 210 (2 to the 10th power). We use two bindings: one to keep track of our result and one to count how often we have multiplied this result by 2. The loop tests whether the second binding has reached 10 yet and, if not, updates both bindings.
```javascript
let result = 1
let counter = 0
while (counter < 10) {
  result = result * 2
  counter = counter + 1
}
console.log(result)
```
#### do loop
```javascript 
let yourName
do {
  yourName = prompt("Who are you?")
} while (!yourName) {
  console.log(yourName)
}
```
#### For Loop
The parentheses after a for keyword must contain two semicolons. The part before the first semicolon initializes the loop, usually by defining a binding. The second part is the expression that checks whether the loop must continue. The final part updates the state of the loop after every iteration. In most cases, this is shorter and clearer than a while construct.
```javascript
for ( let number = 0; number < 10; number = number + 2){
  console.log(number)
}
//
let result = 1
for ( let counter = 0; counter < 10; counter + 1) {
  result = result * 2
}
console.log(result)
//
let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
// → 1024
for (let current = 20; ;current = current + 1) {
  if(current % 7 == 0) {
    console.log(current)
    break
  }
}
```

`counter = counter + 1` - count upward
same as `counter += 1`

`result *= 2` to double `result`

`counter -= 2` to count downward

* For `counter += 1` the shortcut is `counter++`
* For `counter -= 1` the shortcut is `counter--`

```javascript
for(let line = "#"; line.length < 8; line++) {
  console.log(line)
}
```

### Statements
* conditional (if, else, and switch) and looping (while, do, and for) statements.
* Bindings can be used to file pieces of data under a name, and they are useful for tracking state in your program. The environment is the set of bindings that are defined. JavaScript systems always put a number of useful standard bindings into your environment.
* Functions are special values that encapsulate a piece of program. You can invoke them by writing functionName(argument1, argument2). Such a function call is an expression and may produce a value.

### Call Stack
The place where the computer stores this context is the call stack. Every time a function is called, the current context is stored on top of this stack. When a function returns, it removes the top context from the stack and uses that context to continue execution.

## React
`onChange = {this.onInputChange}` - callback function = callback method
- if we add (), this function will be automatically called whenever the render method is called or the component is rendered.  Every time somebody types something in input, our callback is going to be revoked.

Defining a separate method on a class: 
```javascript
onInputChange(event) {
  console.log(event.target.value)
}

=

onChange = {
  (event) => console.log(event.target.value)
}

=

onChange = {(e) => console.log(e.target.value)}

```