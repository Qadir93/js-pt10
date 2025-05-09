// Chapter 21 (Changing Case)

var allLower = userInput.toLowerCase(); 

var x = "HELLO";
x = x.toLowerCase(); 

var y = "hello";
y = y.toUpperCase(); 

var originalString = "HELLO WORLD";
var newString = originalString.toLowerCase(); 

var array = ["HELLO", "WORLD", "JAVA"];
var lowercaseElement = array[0].toLowerCase();

var text = "hello world";
alert(text.toUpperCase()); 

var cityName = "kaRacHi";
cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase(); 




// Chapter 22-25 (Strings)

var sameWords = "captain";
var sliced = sameWords.slice(1, 3); 

var sameWords = "captain";
var sliced = sameWords.slice(1, 3); 

var animal = "elephant";
var seg = animal.slice(3, 7); 

var string = "elephant";
var numChars = string.length;

var string = "elephant";
var length = string.length; 
var slicedString = string.slice(1, length - 3); 

var text = "To be or not to be.";
var indx = text.indexOf("be"); 

var text = "To be or not to be.";
var indx = text.lastIndexOf("be"); 

var text = "go to go";
var indx = text.lastIndexOf("go"); 

if (string.indexOf(indexNum) !== -1) {
   
  }

  var str = "abcde";
var charAtIndex2 = str.charAt(2); 

var text = "The quick brown fox jumps over the lazy dog.";
var cha = text.charAt(9); 

var str = "Hello!";
var x = str.charAt(str.length - 1); 

var input = "abcdef";
var cha = input.charAt(4); 

if (string.charAt(2) === "x") { 
  }

  var str = "hello";
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    arr.push(str.charAt(i)); 
  }

  var reply = "no one is here";
  var revisedReply = reply.replace("no", "yes"); 

  var str = "1 is the first number";
var newStr = str.replace("1", "one"); 

var y = x.replace(/a/g, "z"); 




// Chapter 26 (Rounding Numbers)

var roundedNumber = Math.round(4.5); 

var origNum = 4.2;
var roundNum = Math.ceil(origNum); 

var origNum = 4.8;
var roundNum = Math.floor(origNum); 

var origNum = 3.7;
var roundedNum = Math.round(origNum); 

var roundToZero = Math.round(0.5);





// Chapter 27 (Random Numbers)

var randomNumber = Math.floor(Math.random() * 50) + 1; 

var randomNum = Math.random();

var diceRoll = Math.floor(Math.random() * 6) + 1; 

var toss = Math.random() < 0.5 ? "Heads" : "Tails";




// Chapter 28-29 (Converting Strings)

var str = "123";
var num = parseInt(str);

var num2 = Number(str);

function convertToInt(str) {
    return parseInt(str);
  }
  
  var result = convertToInt("123");
  console.log(result);

  var str = "3.14";
var num = parseFloat(str); 
var num2 = Number(str);
var str = "123.45";
if (!isNaN(str)) {
  var num = parseFloat(str); 
  console.log(num);
} else {
  console.log("Cannot convert to a number");
}

var num = 42;
var str = num.toString(); 

var str2 = num + "";

function convertToString(num) {
    return num.toString(); 
  }
  
  var result = convertToString(42);
  console.log(result); 

  var str = "3.14";
var integerPart = parseInt(str); 
console.log(integerPart); 





// Chapter 30 (Controlling the Length of Decimals)

var num = 3.14159265359; 
var newNum = num.toFixed(4).toString(); 
console.log(newNum); 

var num = 3.14159265359; 
num = Number(num.toFixed(2)); 
console.log(num); 

var num = 3.14159265359;
if (num.toFixed(2).toString().length > 4) {
  console.log("The number has more than 4 characters.");
}

var num = 7.987654321; 
alert(num.toFixed(2).toString()); 

