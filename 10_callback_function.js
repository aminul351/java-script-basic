// A callback function is a function that is passed as an argument to another
// function, and it is called (executed) later.

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Aminul", sayBye);
