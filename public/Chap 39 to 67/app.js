// **************************  Chapter 38-42   Task 1  **************************
// function power(a,b) {
//     return a**b
// }
// console.log(power(2,3))
// console.log(power(4,3))

// **************************  Chapter 38-42   Task 2  **************************
// function leapyear(year) {
//   if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) {
//     return "Leap Year";
//   } else {
//     return "Not a Leap Year";
//   }
// }
// console.log(leapyear(2016));
// console.log(leapyear(2000));
// console.log(leapyear(2020));
// console.log(leapyear(2017));
// console.log(leapyear(100));

// **************************  Chapter 38-42   Task 3  **************************
// function S(a, b, c) {
//   return (a + b + c) / 2;
// }
// s = S(10, 10, 10);
// // console.log(S(10, 10, 10));
// function area_of_triangle(s, a = 10, b = 10, c = 10) {
//   return s((s - a) * (s - b) * (s - c));
// }
// console.log(area_of_triangle());

// **************************  Chapter 38-42   Task 4  **************************
// function average(m1, m2, m3) {
//   return (m1 + m2 + m3) / 3;
// }
// function percentage(m1, m2, m3) {
//   return Math.round(((m1 + m2 + m3) / 300) * 100).toFixed(2);
// }
// function mainFunction() {
//   var sub1_marks = parseInt(prompt("Enter Your First Subject Mark's"));
//   var sub2_marks = parseInt(prompt("Enter Your Second Subject Mark's"));
//   var sub3_marks = parseInt(prompt("Enter Your Third Subject Mark's"));
//   console.log(
//     "Average Marks of Three Subjects : " +
//       average(sub1_marks, sub2_marks, sub3_marks)
//   );
//   console.log(
//     "Percentage of Three Subjects : " +
//       percentage(sub1_marks, sub2_marks, sub3_marks) +
//       "%"
//   );
// }
// mainFunction();

// **************************  Chapter 38-42   Task 5  **************************
// function indexOf(string, character) {
//   let i = 0;
//   while (i < string.length) {
//     if (string[i] == character) {
//       // yes? just return the index i
//       return i;
//     }
//     i++; // no? increase i and move on to next loop iteration
//   }
//   return -1; // made it through the loop and without returning. This means no match was found.
// }

// var string = prompt("Enter your string for checking character index");
// var character = prompt(
//   "Enter a character for checking its index in the string"
// );
// var char_index = indexOf(string, character);
// console.log("Your Entered String : " + string);
// console.log("Your Entered Character : " + character);
// console.log("Your entered character '" + character +"' is at '" + char_index + "' index in your given string");

// **************************  Chapter 38-42   Task 6  **************************
// function vowels(string) {
//   var strings = string.split();
//   newstring = strings.map((x) => x.replace(/[aeiou]/g, ""));
//   console.log("The New String After Removing Vowels From It : " + newstring);
// }
// var vol = prompt("Enter a message for removing vowels from it");
// console.log("Your Entered String : " + vol);
// vowels(vol);

// **************************  Chapter 38-42   Task 7  **************************
// function findOccurrences() {
//   var str = prompt("Please Enter Your Sentence");
//   var count = 0;
//   var haveSeenVowel = false;

//   for (var letter of str.toLowerCase()) {
//     switch (letter) {
//       case "a":
//       case "e":
//       case "i":
//       case "o":
//       case "u": {
//         if (haveSeenVowel) {
//           count++;
//           haveSeenVowel = false;
//         } else {
//           haveSeenVowel = true;
//         }
//         break;
//       }
//       default:
//         haveSeenVowel = false;
//     }
//   }
//   return count;
// }
// var found = findOccurrences();
// console.log("Your Accurancy is : " + found + " Times");

// **************************  Chapter 38-42   Task 8  **************************
// 1 km = 1000 m
// 1 km = 3280.84 feet
// 1 km = 39370.1 inches
// 1 km = 100000 centimeters

// d_km = parseInt(prompt("Enter distance between two cities (in km) : "));
// function meters(d_km) {
//   return d_km * 1000;
// }
// function feets(d_km) {
//   return d_km * 3280.84;
// }
// function inches(d_km) {
//   return d_km * 39370.1;
// }
// function centimeters(d_km) {
//   return d_km * 100000;
// }
// console.log(d_km + " km is equal to " + meters(d_km) + " meters.");
// console.log(d_km + " km is equal to " + feets(d_km) + " feets.");
// console.log(d_km + " km is equal to " + inches(d_km) + " inches.");
// console.log(d_km + " km is equal to " + centimeters(d_km) + " centimeters.");

// **************************  Chapter 38-42   Task 9  **************************
// function overtime_cal(time) {
//   if (time > 40) {
//     var overtimepay = time - 40.0;
//     overtimemoney = overtimepay * 12.0;
//     return overtimemoney;
//   } else {
//     alert("You have to work for more than 40 hours to get over time pay");
//   }
// }
// var empolytime = prompt("Enter Your Employee Time");
// console.log("Your Overtime Pay After 40 Hours Of Daily Work : " + overtime_cal(empolytime));

// **************************  Chapter 38-42   Task 10  **************************

// **************************  Chapter 43-48   Task 1  **************************
// function alert_box() {
//   return alert(
//     "You Click on Youtube Link So we will Open Youtube Page for you.."
//   );
// }

// **************************  Chapter 43-48   Task 2  **************************
// function alert_box() {
//   return alert("Thanks For Purchasing Mobile From Our Store")
// }

// **************************  Chapter 43-48   Task 3  **************************
var studentRecordes = [
  {
    Firstname: "Ali",
    Lastname: "Haider",
    Class: 14,
  },
  {
    Firstname: "Arsalan",
    Lastname: "Ahsan",
    Class: 12,
  },
  {
    Firstname: "Arfeen",
    Lastname: "Khan",
    Class: 2,
  },
  {
    Firstname: "Talha",
    Lastname: "Yousaf",
    Class: 3,
  },
  {
    Firstname: "Zohaib",
    Lastname: "Ahsan",
    Class: 10,
  },
  {
    Firstname: "Kulsoom",
    Lastname: "Siddique",
    Class: 16,
  },
  {
    Firstname: "Hasnain",
    Lastname: "Anwar",
    Class: 12,
  },
  {
    Firstname: "Hafiz",
    Lastname: "Waleed",
    Class: 9,
  },
  {
    Firstname: "Bilal",
    Lastname: "Khan",
    Class: 14,
  },
  {
    Firstname: "Uzair",
    Lastname: "Khan",
    Class: 10,
  },
];
for (let i = 0; i < studentRecordes.length; i++) {
  console.log(studentRecordes[i]);
}

// function deleteRow(r){
//   {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("myTable").deleteRow(i);
// }
// }
// **************************  Chapter 43-48   Task 4  **************************
// function defaultImg() {
//   document.getElementById("imgBackground").src = "./Background Images/bg3.jpg";
// }
// function changeImg() {
//   document.getElementById("imgBackground").src = "./Background Images/bg10.jpg";
// }

// **************************  Chapter 49-52 Task 1  **************************
// for password show or hide

function showPassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// var email = document.forms["signup_form"]["email"].value;
// var password = document.forms["signup_form"]["password"].value;
// var firstname = document.forms["signup_form"]["firstname"].value;
// var lastname = document.forms["signup_form"]["lastname"].value;
// var subject = document.forms["signup_form"]["subject"].value;
// var email = document.forms["signup_form"]["email"].value;
// var password = document.forms["signup_form"]["password"].value;
// var firstname = document.forms["signup_form"]["firstname"].value;
// var lastname = document.forms["signup_form"]["lastname"].value;
// var subject = document.forms["signup_form"]["subject"].value;
// console.log("email" + email);
// console.log("password" + password);
// console.log("firstname" + firstname);
// console.log("lastname" + lastname);
// console.log("subject" + subject);
// sessionStorage.setItem("email", email);
// sessionStorage.setItem("password", password);
// sessionStorage.setItem("firstname", firstname);
// sessionStorage.setItem("lastname", lastname);
// sessionStorage.setItem("subject", subject);
// email.value = "";
// password.value = "";
// firstname.value = "";
// lastname.value = "";
// subject.value = "";
// location.href = "/signup.html";
// d_email.innerHTML = email;
// d_password.innerHTML = password;
// d_firstname.innerHTML = firstname;
// d_lastname.innerHTML = lastname;
// d_subject.innerHTML = subject;
//   var submit = document.getElementById("submit");

// submit.onclick = function () {
//     // e.preventDefault();
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var firstname = document.getElementById("fname").value;
//     var lastname = document.getElementById("lname").value;
//     var subject = document.getElementById("subject").value;
//     document.getElementById("outputEmail").innerText = email;
//     document.getElementById("outputPassword").innerText = password;
//     document.getElementById("outputFirstname").innerText = firstname;
//     document.getElementById("outputLastname").innerText = lastname;
//     document.getElementById("outputSubject").innerText = subject;
//   };

// **************************  Chapter 49-52 Task 2  **************************
function showToggle() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
