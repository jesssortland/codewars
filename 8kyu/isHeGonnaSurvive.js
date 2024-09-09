//Is he gonna survive?
//https://www.codewars.com/kata/59ca8246d751df55cc00014c

function hero(bullets, dragons){
    return bullets >= dragons * 2 ? true : false;
}

console.log(hero(10,5));