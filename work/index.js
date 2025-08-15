let size12 = 5;
let row12 = 1;
while (row12 <= size12) {
  let result = "";
 
  let column = 1;
  while (column <= size12 - row12) {
    result = result + " ";
    column = column + 1;
  }
 
  let starCount = row12;
  while (starCount > 0) {
    result = result + "*";
    starCount = starCount - 1;
  }
  console.log(result);
  row12 = row12 + 1;
}
 