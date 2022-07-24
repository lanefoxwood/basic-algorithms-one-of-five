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
