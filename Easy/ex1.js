const arr = [2, 5, 2, 6, -1, 9999999, 5, 8, 8, 8];

var setArr = new Set(arr);
const arrTwoDimensional = []

//crate array 2 dimensional 
setArr.forEach(ele=>{
  const count =arr.filter(item=> item===ele);
  arrTwoDimensional.push([ele,count.length])
})
//sort array 2 dimensional with by rows 
arrTwoDimensional.sort(function(a,b) {
  return b[1]-a[1]
})

const newArr=[]
//push value column with values rows time form array 2 dimensional to new array
for (let i=0;i<arrTwoDimensional.length;i++){
  for(let j=0;j<arrTwoDimensional[i][1];j++){
    newArr.push(arrTwoDimensional[i][0])
  }
}

console.log("arr:",newArr)



