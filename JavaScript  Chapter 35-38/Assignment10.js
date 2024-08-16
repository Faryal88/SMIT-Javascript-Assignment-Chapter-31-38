//Question 01
function displayDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString(); 
    document.write(dateTimeString + "</br>"); 
}
displayDateTime();


//Question 02
function greetUser() {
    var firstName = prompt("Enter you first name")
    var lastName = prompt ("Enter your last name")
    const fullName = firstName + " " + lastName;
    const greeting = "Hello, " + fullName + "! Welcome to our website."; 
    document.write(greeting +"</br>"); 
}
greetUser();


//Question 03
function addTwoNumbers() {
    const num1 = parseFloat(prompt("Enter the first number:")); 
    const num2 = parseFloat(prompt("Enter the second number:")); 
    const sum = num1 + num2; 
    document.write("The sum of " + num1 + " and " + num2 + " is: " + sum + "</br>"); 
}

addTwoNumbers();


//Question 04
function calculate(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            result = "Invalid operator!";
    }
    document.write("The result of " + num1 + " " + operator + " " + num2 + " is: " + result + "<br>");
}
var number1 = parseFloat(prompt("Enter the first number:"));
var number2 = parseFloat(prompt("Enter the second number:"));
var operator = prompt("Enter the operator (+, -, *, /, %):");
calculate(number1, number2, operator);


//Question 05
function squareNumber(num) {
    var square = num * num;
    document.write("The square of " + num + " is: " + square + "<br>"); 
}
var number = parseFloat(prompt("Enter a number to square:"));
squareNumber(number);

//Question 06
function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    document.write("The factorial of " + num + " is: " + result);
    
var number1 = parseInt(prompt("Enter a number to compute its factorial:"));
}
factorial(number1);


//Question 07
function displayCounting(start, end) {
    document.write("Counting from " + start + " to " + end + ":<br>");
    for (let i = start; i <= end; i++) {
        document.write(i + "<br>"); 
    }
}
var startNumber = parseInt(prompt("Enter the start number:"));
var endNumber = parseInt(prompt("Enter the end number:"));
displayCounting(startNumber, endNumber);


//Question 08
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(number) {
        return number * number;
    }
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
    var hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);
    document.write("The hypotenuse of the triangle with base " + base + " and perpendicular " + perpendicular + " is: " + hypotenuse);
}
var base = parseFloat(prompt("Enter the base of the triangle:"));
var perpendicular = parseFloat(prompt("Enter the perpendicular of the triangle:"));
calculateHypotenuse(base, perpendicular);


//Question 09
function calculateArea(width, height) {
    return width * height;
}

// i. Arguments as values
var areaWithValues = calculateArea(10, 5); 
document.write("The area of the rectangle with width 10 and height 5 is: " + areaWithValues + "<br>");

// ii. Arguments as variables
var width = 8;
var height = 6;
var areaWithVariables = calculateArea(width, height); 
document.write("The area of the rectangle with width " + width + " and height " + height + " is: " +  areaWithVariables + "<br>");


//Question 10
function isPalindrome(str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]/g, '');
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
console.log(isPalindrome("madam")); 
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal, Panama" + "<br>"));


//Question 11
function capitalizeFirstLetter(sentence) {
    var words = sentence.split(' ');
    var capitalizedWords = words.map(word => {
        if (word.length > 0) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        return word;
    });
    return capitalizedWords.join(' ');
}
var userInput = prompt("Enter a sentence to capitalize the first letter of each word:");
var result = capitalizeFirstLetter(userInput);
document.write("Capitalized Sentence: " + result + "<br>");

//Question 12
function findLongestWord(sentence) {
    var words = sentence.split(' ');
    let longestWord = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
var userInput = prompt("Enter a sentence to find the longest word:");
var result = findLongestWord(userInput);
document.write("The longest word in the sentence is: " + result + "<br>")


//Question 13
function countLetterOccurrences(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}
var inputString = prompt("Enter a string:");
var inputLetter = prompt("Enter the letter to count:");
var result = countLetterOccurrences(inputString, inputLetter);
document.write("The letter '" + inputLetter + "' occurs " + result + " times in the string." + "<br>");


//Question 14
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("The circumference is " + circumference.toFixed(2) + "<br>"); // Display the result with 2 decimal places
}
function calcArea(radius) {
    var area = Math.PI * radius * radius; 
    document.write("The area is " + area.toFixed(2) + "<br>"); 
}
var radius = parseFloat(prompt("Enter the radius of the circle:"));
calcCircumference(radius);
calcArea(radius);