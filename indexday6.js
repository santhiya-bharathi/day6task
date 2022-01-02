
// https://medium.com/@reach2arunprakash/guvi-zen-class-find-the-culprits-and-nail-them-9ee6c67c44fb
// task question 2

//1. alert( "I’m JavaScript!");
//2. alert("I’m invoked!");


//3. Find the culprit and invoke the alert

// alert("I'm JavaScript!");
// alert('Hello') // this line is not having semicolon
// alert(`Wor
//  ld`)
// alert(3 +
// 1
// + 2); // this is multiple line code and its working


//4. Fix the below to alert hello Guvi geek

// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = fname+lname;
// alert( admin ); // "Guvi geek"

//5. Fix the below to alert hello Guvi geek

// let fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// let name = fname+lname;
// alert( `hello ${name}` );


//6. Fix the below to alert sum of two numbers

// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(+a + +b);


//7. Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

// var a = 2 > 12;

// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }
//  because of using ""

//8. How to get the success in console.

// let a = prompt("Enter a number?");

// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// }

//9. How to get the correct score in console.

// let value = prompt('How many runs you scored in this ball');
// if (value == 4) {
//       console.log("You hit a Four");
// } else if (value == 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }

//10. Fix the code to welcome the Employee
// let login = 'Employee';
// let message = (login == 'Employee') ? 'Greetings' :'No login';
// console.log(message);

//11. Fix the code to welcome the boss
// let message;
// if (null || 2 || undefined )
// {
//  message = "welcome boss";
// }
// else
// {
//  message = "Go away";
// }
//   console.log(message);
// 12.
// let message;
// let lock;

// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);

// 13.
// let message;
// let lock;

// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);


// 14.
// let i = 3;
// while (i) {
//   console.log( i-- );
// }


// 15. Change the code to print even numbers
// for (let num = 2; num <= 20; num += 2) {
//     console.log(num)
//   }

// 16. Change the code to print all the gifts
// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log(`Wrapped ${gifts[i]} and added a bow!`);
// }

// 17.Fix the code to disarm the bomb.
// let countdown = 100;
// while (countdown > 0) {
//   countdown--;
//   if(countdown == 0)
//   {
//    console.log("bomb triggered");
//   }
// }

// 18.Whats the msg printed and why?
// var lemein = "0";
// var lemeout = 0;
// var msg = "";
// if (lemein) {
//  msg += "hi";
//  }
// if (lemeout) {
//  msg += "Hello";
// }
// console.log(msg);



// https://medium.com/@reach2arunprakash/www-guvi-io-zen-4fa483a7d359
// task question 3

// 1.

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";
 
// for (var i = 0; i < 11; i++) {
//  new_string += numsArr[i] 
// }
// console.log(new_string);


// 2.
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";
 
// for (var i = 0; i < 11; i++) {
//  new_string += numsArr[i] + "," ;
// }
// console.log(new_string);

// 3.
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";
 
// for (var i = 10; i >= 0; i--) {
//  new_string += numsArr[i] + " "
// }
// console.log(new_string);

// 4.
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i] %2 == 0 )
//  {
//  numsArr[i] = "even"
//  }
// }
// console.log(numsArr);

// 5.
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i] %2 != 0 )
//  {
//  numsArr[i] = "even"
//  }
// }
// console.log(numsArr);

// 6.
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum = 0;
// for (var i = 0; i <=10; i++) {
//  sum += numsArr[i]
// }
// console.log(sum);

// 7.
// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=0;
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i]%2==0)
//  sum += numsArr[i]
// }
// console.log(sum);

// 8.
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=100;
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i]%2 != 0)
//  {
//  sum -= numsArr[i]
//  }
//  else
//  {
//  sum += numsArr[i]
//  }
// }
// console.log(sum);

// 9.
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// for (var i = 0; i < numsArr.length; i++) {
//  console.log( numsArr[i])
// }

// 10.
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all="";
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;i++ ){
//      str_all +=inner_array[j] 
//  }
// }
// console.log(str_all);


// 11.
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=[];
// for (var i = 1; i >= 0; i--) {
//  var inner_array = numsArr[i];
//  for(var j = inner_array.length-1; j >= 0 ;j-- )
//      str_all.push(inner_array[j])
// }
// console.log(str_all);


// 12.
// var numsArr = [[1,2,3,4,5],[6,7,8,9,10,11]];
// var sum_odd=0;
// var sum_even=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
  
//     for(var j = 0 ; j < inner_array.length;j++ ){
//  if(inner_array[j]%2!=0)
//  {
//  sum_odd += parseInt(inner_array[j])
//  }
//  else
//  {
//  sum_even += parseInt(inner_array[j])
//  }
// }
// }
// console.log(sum_odd);
// console.log(sum_even);

