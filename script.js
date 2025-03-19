//.........problems......................//...........................................

let str = [0, 0, 0, 0, 1, 0, 1, 1, 1, 0];
//find the number of 1 and 0;

let ones = str.filter(num => num === 1).length;
let zeros = str.filter(num => num === 0).length;
console.log("Number of 1s:", ones);
console.log("Number of 0s:", zeros);


//............Find the Largest element.........................//

let str1 = [50, 16, 80, 70, 10, 90];
let num = 0;
for(i = 0; i < str1.length; i++){
   num = Math.max(num, str1[i]);
}
console.log("largest number:", num);

//if we want to print 1 and 0 seperate as it is then.....................................
let one = str.filter(num => num === 1);
let zero = str.filter(num => num === 0);
console.log("Number of 1s:", one);
console.log("Number of 0s:", zero);

//..........find the smallest number...........//...............

let str2 = [50, 16, 80, 70, 10, 90];
let num2 = str2[0];
for(i = 0; i < str2.length; i++){
   num2 = Math.min(num2, str2[i]);
}
console.log("smallest number:", num2);

//...........second largest...................//..........

let arr = [50, 16, 80, 70, 10, 90];

let largest = arr[0], smallest = arr[0];

// First pass: Find the largest and smallest
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
    if (arr[i] < smallest) smallest = arr[i];
}

let secondLargest = -Infinity, secondSmallest = Infinity;

// Second pass: Find second largest and second smallest
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] < largest) {
        secondLargest = arr[i];
    }
    if (arr[i] < secondSmallest && arr[i] > smallest) {
        secondSmallest = arr[i];
    }
}

console.log("Second Largest:", secondLargest);
console.log("Second Smallest:", secondSmallest);

//Find the odd and even numbers....................//

let str3 = [2, 1, 3, 8, 4, 6, 5];
let odd = [];
let even = [];

for(let i of str3){
    if (i % 2 === 0){
        even.push(i);
    }
    else{
        odd.push(i);
    }
}
console.log("odd numbers:", odd);
console.log("even numbers:", even);

//...find the vowel and consonants...................//

let str4 = "Anshuman Vishwakarma".toLowerCase();
let vowels = [];
let consonants = [];
for(let i of str4){
    if ("aeiou".includes(i)){
        vowels.push(i);
    }
    else if(i >= 'a' && i <= 'z'){
        consonants.push(i);
    }
}
console.log("vowels", vowels);
console.log("consonants", consonants);

