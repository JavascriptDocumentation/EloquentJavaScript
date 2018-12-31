/**
 * 1. You can build the string by starting with an empty one ("") and repeatedly adding characters. 
 * A newline character is written "\n".
 * 2. To work with two dimensions you will need loop inside of a loop. 
 * 3. The order of the loops must follow the way we build the strings (line by line, left to right, top to bottom).
 * 4. The outer loop handles the lines, and the inner loop handles the characters on a line.
 * 5. Use two bindigs to track the progress.  To know whether to put a space or a hash sign at a given position,
 * you could test whether the sum of the two counters is even (% 2).
 * 6. Terminating a line by adding a newline character must happen after the line has been built up,
 * do this after the inner loop but inside the outer loop.
 * == outer loop controls the number of rows
 * == inner loop controls the number of columns
 * == if statement controls the even number of characters
 */

let size = 8

let board = ""

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " "
        } else {
            board += "#"
        }
    }
    board += "\n"
}

console.log(board)