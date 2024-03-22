let str="I am enjoying my training";

console.log(str.indexOf("my"));
console.log(str.indexOf("m"));

let subString1=str.substring(3);
console.log(subString1);

let subString2=str.substring(0,4);
console.log(subString2);

let newString=str.replace("training","journey");
console.log(newString);

for (let i=0;i<str.length;i++){
    console.log(str.charAt(i));
}

let str1="Hello";
let str2=" World";

console.log(str1.concat(str2));

let stringS1="abcedgedcvce";

console.log(stringS1.replaceAll("e",""));

const strString = "Hello there I am jack";
const arrayString=strString.split(" ");

console.log(arrayString);

const palidromeString="racecar";
const stringArray=palidromeString.split("").reverse();
const newArray=stringArray.join("");

if (palidromeString==newArray){
    console.log("Palinodrome")
}
else{
    console.log("Not Palindrome");;
}

const email1 = "example@example.com";
const email2 = "invalid@email";

if(email1.endsWith("@gmail.com")){
    console.log("Valid");
}
else{
    console.log("Not Valid");
}

const mainStr = "Hello, World!";
const substr = "Hello";

console.log(mainStr.startsWith(substr));
