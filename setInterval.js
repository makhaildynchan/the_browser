// setInterval is very similar to setTimeout in how it is called, but rather than call the function passed to it once after a specified amount of time, it calls the function every time the specified amount of milliseconds pass.
const sayHello = function() {
  alert("Hello");
}
const timer = setInterval(sayHello, 3000);

clearInterval(timer);