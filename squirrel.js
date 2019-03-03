let journal = [
    {events: ["work", "touched tree", "pizza",
              "running", "television"],
     squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
              "lasagna", "touched tree", "brushed teeth"],
     squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
              "beer"],
     squirrel: true},
    /* and so on... */
  ];

  let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);

let todoList = [];
function remember(task) {
    todoList.push(task);
}
function getTask() {
    return todoList.shift();
}
function rememberUrgently(task) {
    todoList.unshift(task);
}
/**   */
let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
});
console.log(labels);