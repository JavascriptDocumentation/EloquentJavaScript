# JavaScript
* [Eloquent JavaScript](https://eloquentjavascript.net/)
* https://eloquentjavascript.net/code/#2.1
### Table of Content
* [Values](#values)
* [Expressions](#expressions)
    * [Bindings](#bindings)
    * [Functions](#functions)
* Objects and Arrays (#object-and-arrays)


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
* The `function` keyword, when used as an expression, can create a function value.  When used as a statement, it can be used to declare a binding and give it a function as its value.

```javascript
//Define f to hold a function value
const f = function(a) {
  console.log(a + 2)
}

//Declare g to be a function
function g(a,b) "
return a * b * 3.5

//A less verbose function value
const f = () => {}
let h = a => a % 3
```


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

Steps to create a loop:
1. Initialize the loop
2. Write expression that checks if the loop must continue
3. third party updates the state of the loop after every iteration
```javascript
for (let line = "#"; line.length < 8; line += "#") {
  console.log(line)
}

function printFarmInventory(cows, chickens) {
  let cowString = String(cows)
  while(cowString.length < 3) {
    cowString = "0" + cowString
  }
  console.log(`${cowString} Cows`)

  let chickenString = String(chicken)
  while(chickenString.length < 3) {
    chickenString = "0" + chickenString
  }
  console.log(chickenString)
}
```

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
* JavaScript statemet corresponds to a full sentence.  A statement stands on its own.

String.length - access the length property of the value in string.

Almost all of the JS values have properties.  The exceptions are null and undefined.

Two main ways to access properties is through a dot (.) and [] - value.x and value[x].  When using dot, the word after the dot is the literal name of the property.

When using [], the expression between [] is evaluated to get the property name.

Property names are strings.

Numbers, Strings and Booleans are immutable (impossible to change value of that type).


#### Expression
* a fragment of code that produces a value.
* every value that is written literally is an expression
* expressions can contain other expressions



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

//initialize a state object
state = {}
```
Callback function - a function that accepts up to 3 arguments.  The map method calls the callback function one time for each element in the array.  It calls a defined callback function on each element of an array, and returns an array that contains the results.
* @param callbackfn - a function 
* @param thisArg - An object to which the `this` keyword can refer in the callback function.  It `thisArg` is omitted, undefined is used as the `this` value.
### Bind
* an object to which the `this` keyword can refer inside the new function.  For a given function, creates a bound function that has the same body as the original function.  The `this` object of the bound function is associated with the specified object, and has the specified initial parameters.  
* @param thisArg - An object to which the `this` keyword can refer inside the new function.
* @param argArray - A list of arguments to be passed to the new function.

## Objects and Arrays
* Objects can change their properties, causing a single object value to have different content at different times.
* Objects can have the same identity.
* You can use a `let` binding to keep track of a changing number by changing the value the binding points to.
* `const` binding to an object can itself not be changed and will continue to point at the same object, the contents of that object might change.
* Bindings can be changeable or constant, this is separate from the way their values behave.
`let journal = []`
```javascript
function addEntry(events, squirrel) {
  journal.push([events, squirrel])
}
```
* if a property name is a brace notation isn't followed by a value, its value is taken from the binding with the same name.
* Arrays have an `includes` method that checks whether a given value exists in the array.
```javascript
for (let i = 0; i < journal.length; i++){
  let entry = Journal[i]
}
```
* this loop is going over arrays one element at a time - run a counter over the length of the array and pick out each element in turn.
* Same loop in modern JS:
```javascript
for (let entry of Journal) {
  console.log(`${entry.events.length} events`)
}
```
* for loop will loop over the elements of the value given after `of`.
* Find every type of event in the data set:
```javascript
function journalEvents(journal) {
  let events = []
  for(let entry of journal) {
    for(let event of entry.events) {
      if(!events.includes(event)) {
        event.push(event)
      }
    }
  }
  return events
}
console.log(journalEvents(Journal))
```
* push - add elements at the end of an array
* pop - remove elements at the end of an array
* unshift - adding things at the start of an array
* shift - removing things at the start of an array


#### Correlation
* Correalation is a measure of dependence between statistical variables.  It is expressed as a value that ranges from -1 to 1.  Zero correlation means that the variables are not related.
* A correlation of one indicates that the two are perfectly related.
* Negative one also means that the variables are perfectly related but that they are opposites, where one is true, the other is false.
* To compute the measure of correlation between two Boolean variables, we can use the phi coefficent.  This is a formula whose input is a frequency table containing the number of times different combinations of the variables were observed.  
* phi = n11*n00 - n10*n01 / math.sqrt (n1*n0*n1*n0)
* notation n01 indicates the number of measurements where the first variable is false and the second variable is true.
* n1 - refers to the sum of all measurements where the first variable is true.
* n0 - refers to the sum of all measurements where the second variable is false.

##### Correlation Table in code
```javascript
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1])/
          Math.sqrt((table[2] + table[3]) *
                    (table[0] + table[1]) *
                    (table[1] + table[3]) * 
                    (table[0] + table[2]))
}
console.log(phi([76, 9, 4, 1]))
```
##
```javascript
function tableFor(event, journal) {
  let table = [0, 0, 0, 0]
  for(let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0
    if(entry.events.includes(event)) index += 1
    if(entry.squirrel) index += 2
    table[index] += 1
  }
  return table
}
console.log(tableFor("pizza", JOURNAL))
```
```javascript
// Define f to hold a function value
const f = funtion(a) {
    console.log(a + 2)
}

let f1 = a => a + 2

//declare g to be a function
function g(a, b) {
    return a * b * 3.5;
}
```
### JSON
Objects and arrays (which are a specific kind of object) provide ways to group several values into a single value. Conceptually, this allows us to put a bunch of related things in a bag and run around with the bag, instead of wrapping our arms around all of the individual things and trying to hold on to them separately.

Most values in JavaScript have properties, the exceptions being null and undefined. Properties are accessed using value.prop or value["prop"]. Objects tend to use names for their properties and store more or less a fixed set of them. Arrays, on the other hand, usually contain varying amounts of conceptually identical values and use numbers (starting from 0) as the names of their properties.

There are some named properties in arrays, such as length and a number of methods. Methods are functions that live in properties and (usually) act on the value they are a property of.

You can iterate over arrays using a special kind of for loop—for (let element of array).

* properties only grasp their value, rather than contain it
* objects and arrays are stored in the computer's memory as sequences of bits holding the addresses (the place in memory) of their contents.
* an array with another array inside inside of it consists of at least one memory region for the inner array, and another for the outer array, containing a binary number that represents the position of the inner array.
* convert tangles of memory addresses to a description that can be stored or sent
* serialize the data - it is converted into a flat description
* JSON - used as a data storage and communication format on the web
* JSON.stringify - convert data to JSON
* JSON.parse - convert data from JSON

### Higher-order Functions
Arrays provide a number of useful higher-order methods. You can use forEach to loop over the elements in an array. The filter method returns a new array containing only the elements that pass the predicate function. Transforming an array by putting each element through a function is done with map. You can use reduce to combine all the elements in an array into a single value. The some method tests whether any element matches a given predicate function. And findIndex finds the position of the first element that matches a predicate.
### Objects
So objects do more than just hold their own properties. They have prototypes, which are other objects. They’ll act as if they have properties they don’t have as long as their prototype has that property. Simple objects have Object.prototype as their prototype.

Constructors, which are functions whose names usually start with a capital letter, can be used with the new operator to create new objects. The new object’s prototype will be the object found in the prototype property of the constructor. You can make good use of this by putting the properties that all values of a given type share into their prototype. There’s a class notation that provides a clear way to define a constructor and its prototype.

You can define getters and setters to secretly call methods every time an object’s property is accessed. Static methods are methods stored in a class’s constructor, rather than its prototype.

The instanceof operator can, given an object and a constructor, tell you whether that object is an instance of that constructor.

One useful thing to do with objects is to specify an interface for them and tell everybody that they are supposed to talk to your object only through that interface. The rest of the details that make up your object are now encapsulated, hidden behind the interface.

More than one type may implement the same interface. Code written to use an interface automatically knows how to work with any number of different objects that provide the interface. This is called polymorphism.

When implementing multiple classes that differ in only some details, it can be helpful to write the new classes as subclasses of an existing class, inheriting part of its behavior.
### Encapsulation
* underscore (_) character at the start of property names to indicate that those properties are private.
* Separating interface from implementation is a great idea. It is usually called encapsulation.
### Methods
* Methods are properties that hold function values
* Usually a method needs to do something with the object it was called on.  When a function is called as a method—looked up as a property and immediately called, as in `object.method()` — the binding called `this` in its body automatically points at the object that it was called on.
### Prototypes
* In addition to their set of properties, most objects also have a prototype. 
* A prototype is another object that is used as a fallback source of properties. 
*  When an object gets a request for a property that it does not have, its prototype will be searched for the property, then the prototype’s prototype
* the entity behind almost all objects, Object.prototype
* `Object.getPrototypeOf` returns the prototype of an object.
### Classes
 A class defines the shape of a type of object—what methods and properties it has. Such an object is called an instance of the class.

Prototypes are useful for defining properties for which all instances of a class share the same value, such as methods. Properties that differ per instance, such as our rabbits’ type property, need to be stored directly in the objects themselves.

So to create an instance of a given class, you have to make an object that derives from the proper prototype, but you also have to make sure it, itself, has the properties that instances of this class are supposed to have. This is what a constructor function does.
```javascript
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}
```

It is important to understand the distinction between the way a prototype is associated with a constructor (through its prototype property) and the way objects have a prototype (which can be found with Object.getPrototypeOf). The actual prototype of a constructor is Function.prototype since constructors are functions. Its prototype property holds the prototype used for instances created through it.

* JavaScript classes are constructor functions with a prototype property.
### Maps
There are two uses of Map keyword:
* `map` used for an operation that transforms a data structure by applying a function to its elements.
* `Map` - a data structure that associated values (the keys) with other values.
* The methods `set`, `get`, and `has` are part of the interface of the Map object. 
### Getters, Setters and Statics
* Inside a class declaration, methods that have static written before their name are stored on the constructor. 
### Bugs and Errors
* "use strict" at the top of your program rarely hurts and might help you spot a problem.