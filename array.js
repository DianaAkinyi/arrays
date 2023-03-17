
//Find the last element of the following arrays.
//arr1 = [3,7,34,90,12]
//arr2 = [true, "green", "where",12,56]


 const arr1 =[3,7,34,90,12]     
const a =arr1[arr1.length-1]
console.log(a)
//arr2 = [true, "green", "where",12,56]
const arr2 =[true, "green","where",12,56]
const b =arr2[arr1.length-1]
console.log(b)
//arr1 = [3,7,34,90,12]
const arr =[3,7,34,90,12]
const y=arr.pop()
console.log(y)
//arr2 = [true, "green", "where",12,56]
const ar2 =[true, "green","where",12,56]
const x =ar2.pop()
console.log(x)
//Write a JS program that will join the following array elements into a string
//myPets = ["Cow", "Python", "Snake", "Dog"];
const myPets =["Cow","Python","Snake","Dog"];
console.log(myPets.join());

//Write a JS script to sort the following array items
//var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
const  arr3 =[-5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
console.log(arr3.sort())


//Write a program to remove duplicates from the following array.
//Console the array without duplicates, and console another array that only contains the duplicates
//var arr = ["apple", "mango", "apple",
            //"orange", "mango", "mango"];

const arr4 = ["apple", "mango", "apple","orange", "mango", "mango"];
const c =[ ...new Set(arr4)]
console.log(c)
 






//Write a JS script to search for the following word in the array.
//4
//If the word is present, console it else console "the search word was not found"
//let arr5 = ["the", "way", "x", 4, 23];
     const arr5 = ["the", "way", "x", 4, 23];
     const u=4
     if(u =="the"){
          console.log(u)
     }
     else{
          console.log("the search word was not found")
     }
     //write a js 
     const q="lufituaebo";
     console.log(q.split("").sort().join(""));
     

 


