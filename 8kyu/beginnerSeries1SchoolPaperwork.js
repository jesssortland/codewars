//Beginner Series #1 School Paperwork
//https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd

function paperwork(n, m) {
    if(n<0 || m<0){
        return 0;
    }
    return n*m;
}

console.log(paperwork(3,5));
console.log(paperwork(-3,5));