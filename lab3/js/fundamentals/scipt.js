let name = "Ilya";

alert( `hello ${1}` );

alert( `hello ${"name"}` );

alert( `hello ${name}` );

// 

let name1 = prompt("What is your name?", "");
alert(name1);

// 
let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b)

// 
let value = prompt('What is the "official" name of JavaScript?', '');

if (value == 'ECMAScript') {
  alert('Right!');
} else {
  alert("You don't know? ECMAScript!");
}

// 
value = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

// 
let result = (a + b < 4) ? 'Below' : 'Over';

// 
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

//   
if (age >= 14 && age <= 90) console.log('something')

// 
if (age < 14 || age > 90) console.log('seomthing')

// 
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}

// 
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
}

// 
let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

// 
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

// 
if(browser == 'Edge') {
    alert("You've got the Edge!");
  } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
  } else {
    alert( 'We hope that this page looks ok!' );
  }

  // 
  a = +prompt('a?', '');

  switch (a) {
    case 0:
      alert( 0 );
      break;
  
    case 1:
      alert( 1 );
      break;
  
    case 2:
    case 3:
      alert( '2,3' );
      break;
  }

// 
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

// 
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

//   
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }

// 
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );