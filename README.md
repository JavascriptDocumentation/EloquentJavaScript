# JavaScript
* [Eloquent JavaScript](https://eloquentjavascript.net/)
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

## Expressions

### Bindings
To catch and hold values.
```javascript
let caught = 5 * 5;
````
* `let` indicates that this sentence is going to define a binding.  It is followed by the name of the binding and, if we want to immediately give it a value, by an = operator and an expression.
* The previous statement creates a binding called caught and uses it to grab hold of the number that is produced by multiplying 5 by 5.

* list of keywords and reserved words:
break case catch class const continue debugger default
delete do else enum export extends false finally for
function if implements import interface in instanceof let
new package private protected public return static super
switch this throw true try typeof var void while with yield

### Functions
Values given to functions are called arguments.
#### For Loop
The parentheses after a for keyword must contain two semicolons. The part before the first semicolon initializes the loop, usually by defining a binding. The second part is the expression that checks whether the loop must continue. The final part updates the state of the loop after every iteration. In most cases, this is shorter and clearer than a while construct.
```javascript
let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
// → 1024
```