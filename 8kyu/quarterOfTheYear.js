//Quarter of the year
//https://www.codewars.com/kata/5ce9c1000bab0b001134f5af


const quarterOf = (month) => {
    switch (month) {
      case 1:
      case 2:
      case 3:
        return 1;
        break;
      case 4:
      case 5:
      case 6:
        return 2;
        break;
      case 7:
      case 8:
      case 9:
        return 3;
        break;
      case 10:
      case 11:
      case 12: 
        return 4;
        break;
      }
  }

  console.log(quarterOf(3));