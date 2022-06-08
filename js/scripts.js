// function countUpBy(countBy, countTo) {
//   let countArray = [];
//     for (let i = countBy; i<=countTo; i+=countBy) {
//       countArray.push(i);
//     }
//    return countArray;
// }

function countUpBy(countBy, countTo) {
  if(Number(countBy) && Number(countTo) && countBy<=countTo && countBy>0 && countTo>0) {
    let countArray = [];
    for (let i = countBy; i<=countTo; i+=countBy) {
      countArray.push(i);
    }
   return countArray;
  } else {
    return -1;
  }
}
