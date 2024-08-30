//Will there be enough space?
//https://www.codewars.com/kata/5875b200d520904a04000003

function enough(cap, on, wait) {
    if (cap >= on + wait){
      return 0;
    }
    return (on + wait) - cap;
}

console.log(enough(10,5,4));
console.log(enough(10,5,10));