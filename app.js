// BEGINNER PRACTICE QUESTIONS

// Q1: Return the Sum of Two Numbers
function addition(num1, num2) {
  return num1 + num2;
}

console.log(addition(3, 2));

// Q2: Convert Hours into Seconds
function hoursToSeconds(hours) {
  return hours * 60 * 60;
}

console.log(hoursToSeconds(2));

// Q3: Calculate the Perimeter of a Rectangle
function calcPerimeter(length, width) {
  return 2 * (length + width);
}

console.log(calcPerimeter(6, 7));

// Q4: Calculate the Area of a Triangle
function calcTriangleArea(base, height) {
  return 0.5 * base * height;
}

console.log(calcTriangleArea(3, 2));

// Q5: Extend a String
function appendFrontend(string) {
  return string + "Frontend";
}

console.log(appendFrontend("Apple"));

// Q6: Greater than 100?
function sumGreaterThan100(num3, num4) {
  return num3 + num4 > 100;
}

console.log(sumGreaterThan100(50, 60));

// Q7: Less than or Equal to Zero?
function lessThanOrEqualToZero(num5) {
  return num5 <= 0;
}

console.log(lessThanOrEqualToZero(3));

// Q8: Opposite Boolen
function oppositeBoolean(bool) {
  return !bool;
}

console.log(oppositeBoolean(false));

// Q9: Is not the number 0
function isNotZero(element) {
return element !== 0;
}

console.log(isNotZero(5));

// Q10: Calculate the Remainder
function calcRemainder(num6, num7) {
  return num6 % num7;
}

console.log(calcRemainder(4, 2));

// Q11: Is the number odd?
function isOdd(num8) {
  return num8 % 2 !== 0;
}

console.log(isOdd(1));

// Q12: If a number is even, return 1 otherwise return -1
function booleanInteger(num9) {
  return num9 % 2 !== 0 ? -1 : 1
}

console.log(booleanInteger(1))

// Q13: Check if a user is logged in AND subscribed
function isLoggedInAndSubscribed(loggedIn, subs) {
  return (loggedIn === 'LOGGED_IN') && (subs === 'SUBSCRIBED')
}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))

// Q14: Check if a user is logged in OR subscribed
function isLoggedInOrSubscribed(logged, sub) {
  return (logged === 'LOGGED_IN') || (sub === 'SUBSCRIBED')
}

console.log(isLoggedInOrSubscribed('LOGGED_OUT', 'SUBSCRIBED'))