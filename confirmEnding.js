function confirmEnding(str, target) {
    let re = new RegExp(target+'$','i');
    return re.test(str);
  }
  
  confirmEnding("Bastian", "n");
/*
Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

// adding comments which demonstrate my logic process

// this function should receive a string (first argument) and a target string(second arg), and it should return a boolean, true, if the string ENDS WITH the target string. It should return a boolean, false in any other case where the string doesn't END WITH the target string.

//TODO: i think i can use the indexOf(), or subStr(), or includes() methods... but not entirely sure which methods I can call.... I'm going to try an example at the end of the file.

//TODO: more complexity here, but basically I know I need to define a function which accepts two strings...

function confirmEnding(string, targetString){
  //TODO: inside this function i need to do the following:
  //TODO: 1. double for loop! 
  //TODO: the outer loop, or i-loop, starts at a certain character, 
      // i = string[-targetString.length], which ensures that we look at only the ending.
      // the i-loop ends where i < string.length, which is all the way through the last index.
      // this completes the outer i-loop, because all it does is start at the specific character index, and runs until the end of the string.

      //TODO: 2. inside of this outer i-loop, I need an inner j-loop:
      //TODO: the inner j-loop starts at i=0 and runs until j < targetString.length, which ensures we check each letter in the target string
          // inside this inner j-loop, I need to make a '===' strict-equals comparison
          // the comparison is string[i] === targetString[j] ? true : false
          // this ensures that if at any point there is a false value, the inner-loop breaks and returns false, then the outer loop breaks and returns false.

  //TODO: 2. i need to return a boolean as a result of running this function

};


//=================================================================================================

// for example, how would you be able to tell if the string "CATS", ENDED with the target string "TS"?
// well, the two strings are easy to see and compare the letters. both strings contain "T" and "S" chracters... which is a great start. What we really want to know is the location and order of the letters. 
// in the string, "CATS", I can count:
// string[0] = "C", string[1]="A", string[2]="T", string[3]="S" and so on for every word. 
// I also know that string.length = 4, and thast targetString.length = 2. 
//what i need to make is an strict equals === comparison.
// the real question becomes, does string[-targetString.length] === targetString[0] AND
// does string[-targetString.length+1] === targetString[1]?
//so I'm sensing we can loop and use the charAt() method, as i write this out...


//TODO 1. I need start at the position: string[-targetString.length] and loop over each character in the parent string until i end at i < string.length...
  //inside this i loop, I need to do the following:
      //TODO 1. i need to run another loop from j=0 to j <= targetString.length.
          //TODO: inside this second, j loop, i need to do the following:
               //TODO 1. i need to take the character at the starting point in the string, called string[i], and compare it to the character at the first index of the targetString, called targetString[j]...... something like:
          /* 
              if (string[i] = targetString[j]) return true
          
          */
  //TODO: if they are equal, return true and continue the loop. 
  //TODO: if they are not equal, return false and break the loop. 

  //=============================================================================================
  //outlining basic algorithmic steps:
  /*
      1. calculate the length of the targetString, a number.
      2. count backwards from the end of the string that number to find your startpoint
      3. calculate the value of the string at the startpoint
      4. calculate the value of the targetString at its start, or its 0th index, targetString[0]
      5. evaluate if they are === equal.
          6. true?
              6.1 repeat steps 3, 4 and 5. when repeating step 3, you must add 1 to the index value to calculate the next value. When repeating step 4, you must add 1 to the index value to calculate the next value.
          6. false?
              retun false and end program.  
  */