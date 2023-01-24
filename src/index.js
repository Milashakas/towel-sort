
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix==undefined){
    return []
  }
let arr=[];
for (let i=0;i<=matrix.length-1;i++) {
  if (i==0 || i%2==0) {
    for (let j=0;j<=matrix[i].length-1;j++){
      arr.push(matrix[i][j]);
    }
   } else {
      for (let c=matrix[i].length-1;c>=0;c--){
        arr.push(matrix[i][c]);
    }
  }
}
return arr
}
