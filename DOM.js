// https://jsfiddle.net/fradaokp/
// https://www.youtube.com/watch?v=SwMgOMfelC8&t=249s
// https://jsfiddle.net/93kx2r60/3/
// When we want to access the Document Object Model in JavaScript, we simply use JavaScript object document.

// The three methods in the example above are built-in methods of the document object that allow us to find elements in the DOM!

// You can use JavaScript to find DOM elements in more than one way, and there are indeed situations that call for one method over the other.
document.getElementById('this-element-is-unique');
document.getElementById('identifier');

// An HTML 'Tag Name' is the set of characters used in between the < and the > of an HTML tag to identify what type of tag it is.
<p id="this-element-is-unique"></p>
document.getElementsByTagName('p');

// When you want to find a set of elements that use the have the same class attribute

// Like the id attribute, the class attribute acts as an identifier of an element. However, a class doesn't have to be unique to one element. Any element can share a class attribute with any other element.
<p id="paragragh-one" class="blue large"></p>
<p id="paragragh-two" class="blue large"></p>
<p id="paragragh-tree" class="blue small"></p>
<p id="paragragh-four" class="blue small"></p>
document.getElementsByClassName('blue');
document.getElementsByClassName('blue large');
document.getElementsByClassName('class-name');

// Here we make use of the query selector method to get element with the id "name-field". You can tell that we are looking for an id by the fact that "name-field" is lead by a # character.
document.querySelector('#name-field');

// If we wanted to access an element by class name with .querySelector we would do this:
document.querySelector('.my-class');
// Or we could access an element by Tag Name like this:
document.querySelector('p');

