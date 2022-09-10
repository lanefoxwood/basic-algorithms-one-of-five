function booWho(bool) {
    if(typeof bool === 'boolean'){
        return true;
    }
        return false;
  } 
  
  booWho(null);
/*Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
0. check the type of using typeOf()
1.if typeOf() === bool return true
2.else, false
*/



// adding comments to demonstrate my logical thought process

// this function should accept any type of value and check if it is a boolean primitve. boolean primitives are only, true and false. 

//TODO: i think the nature of this prompt is finding the differences between the  "==" and  "===" equals... it seems straightforward enough, but it could get tricky.

//TODO: i need to define this function:

function booWho(anyValue){
    //inside this function i need to do the following:
    //TODO: 1. make a comparison with the "===" operators and the logical OR || operator.
    //TODO: 2. return a boolean.
};

// should look something like this:
/* 
    (anyValue === true || anyValue === false) ? true : false;
*/

//solid one-liner... maybe lol idk. 