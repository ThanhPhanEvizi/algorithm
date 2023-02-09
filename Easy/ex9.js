const arr = [1, 2, 3, 4, 5, 6]
const obj = {}
const newArr = []

for (let i = 0; i < arr.length; i++) {
    const binary = arr[i].toString(2)
    console.log("i:", arr[i], ':', binary, ':', binary.toString, ':', binary.match(/1/g).length)
    const binaryLength = binary.match(/1/g).length
    obj[binaryLength] = (obj[binaryLength] ? obj[binaryLength] : 0) + 1
    newArr.push(binaryLength)
}

const arrA = [...arr]

console.log("newArr:", newArr)
console.log("obj:", obj)