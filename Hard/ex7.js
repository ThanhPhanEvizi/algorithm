const arr = [3, 1, 3, 2, 3, 2]

const map = new Map()
for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], !map.get(arr[i]) ? 1 : map.get(arr[i]) + 1);

}
let value = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (map.get(arr[i]) > map.get(arr[j]) &&
            arr[i] > arr[j])
            value = Math.max(value, map.get(arr[i]) -
                map.get(arr[j]));
        else if (map.get(arr[i]) < map.get(arr[j]) &&
            arr[i] < arr[j])
            value = Math.max(value, map.get(arr[j]) -
                map.get(arr[i]));
    }
}
console.log("ans:", value)

console.log("map:", map)