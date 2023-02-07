const a1=[4, 5, 1, 1, 3, 2]
const a2=[3, 1]
const a3=[]

a1.sort()
for(let i=0;i<a2.length;i++){
    for(let j=0;j<a1.length;j++){
        if(a2[i]===a1[j]){
            a3.push(a1[j])
            a1.splice(j, 1)
            j--;
        }
    }
}
a3.push(...a1)
console.log("a3:",a3)