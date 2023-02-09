 const bitonicGenerator = (arr) => {
     const evenArr = []
     const oddArr = []

     for (let i = 0; i < arr.length; i++) {
         if (arr[i] % 2 == 0) {
             oddArr.push(arr[i])
         } else {
             evenArr.push(arr[i])
         }
     }

     evenArr.sort(function (a, b) {
         return a - b
     })
     oddArr.sort(function (a, b) {
         return a - b
     })
     return [...oddArr, ...evenArr]
 }

 const arr = [0, 1, 2, 3, 4, 5, 6, 7]

 console.log("newArr:", bitonicGenerator(arr))