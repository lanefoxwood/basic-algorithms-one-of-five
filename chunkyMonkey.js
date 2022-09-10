function chunkArrayInGroups(arr, size) {
    const arr2 = [];
    for(let i=0;i<arr.length;i+=size){
        arr2.push(arr.slice(i,i+size));
    }
    return arr2;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

/*Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

// adding comments which reflect my logical thought process


// this function accepts an array and a size number. it should split the array into groups that are the length of the size given. It will return the result as a two dimensional array. 


//I know that i need a function:
function chunkyMonkey(array, number){
  //inside this function I need to do the following:
  //TODO: 1. I need to initalize an empty array to hold my groups, call it groupArray
  //TODO: 1.5 i need a for loop here:
      //inside of this for loop i need to do the following:
      // TODO: the loop will begin at i = 0; i < array.length; i += number
      //TODO: 2. I need to select a slice of the given array such as: array.slice([i], [i+number])
      //TODO: 3. then I will push that slice into the groupArray
  //TODO: return the groupArray as a result of running this function. 
};
