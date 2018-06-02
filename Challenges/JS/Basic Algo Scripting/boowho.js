function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  let edgeChecker = bool.toString();
  // bool -> 0 or 1 is edge case because js treats the numbers 1 and 0 as boolean evaluations true and false in if statements.

  if( edgeChecker == "1" | edgeChecker == "0") {
    return false;
  }

  if(bool == true | bool == false){
    return true;
  } else {
    return false;
  }
}

console.log(booWho(true));
