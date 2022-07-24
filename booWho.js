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