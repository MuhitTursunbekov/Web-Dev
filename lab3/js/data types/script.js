let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );
// 
function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }

//   
function random(min, max) {
    return min + Math.random() * (max - min);
  }

//   
function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }

//   
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }

//   
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }

// 
function extractCurrencyValue(str) {
    return +str.slice(1);
  }

//   
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");

// 
function getMaxSubSum(arr) {
    let maxSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
  
    return maxSum;
  }

// 
function camelize(str) {
    return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
  }
//   
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
  }
//   function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
// 
function copySorted(arr) {
    return arr.slice().sort();
  }

// 
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

// 
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }

//   
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }

//   
function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }

//   
function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }