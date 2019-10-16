var myArray = ['a', 'b', 'c', 'd'];
myArray.push('end');
myArray.unshift('start');

console.log(myArray);

// myArray = ['start', ...myArray];
// myArray = [...myArray, 'end'];

// console.log(myArray);

// myArray = ['start', ...myArray, 'end'];
// console.log(myArray);

//reverse the string
function reverseString(str) {
  console.log(
    str
      .split('')
      .reverse()
      .join('')
  );
}
reverseString('hello');

// to check a palindrome you need to take in the string
// reverse it
// compsare it
// if it matches the original word then
// retunr true
function isPalindrome(str) {
  const revString = str
    .split('')
    .reverse()
    .join('');
  console.log(revString === str);
  //return revString === str;
}
isPalindrome('hello');

// turn the int to a string
// reverse the order of a number
// join them back together
// parseint the string
function reverseInt(int) {
  const revString = int
    .toString()
    .split('')
    .reverse()
    .join('');
  console.log(parseInt(revString));
  //return revString === str;
}
reverseInt(54321);

function capLetter(str) {
  console.log(
    str
      .toLowerCase()
      .split(' ')
      .map(word => word[0].toUpperCase() + word.substr(1))
      .join(' ')
  );
}
capLetter('i love you');

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}
fizzBuzz();
// var arr = new Array(10, 20, 30, 40, 50);
// console.log('arr.length is : ' + arr.length);
