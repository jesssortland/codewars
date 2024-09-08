//Pillars
//https://www.codewars.com/kata/5bb0c58f484fcd170700063d

function pillars(numPill, dist, width) {
  if (numPill == 1){
    return 0;
  }
  return (((numPill - 1) * dist) * 100) + width * (numPill - 2);
}

console.log(pillars(2,20,25));