//https://www.geeksforgeeks.org/find-the-point-where-maximum-intervals-overlap/

const arrl = [1, 2,10, 5, 5]
const exit = [4, 5, 12, 9, 12]

arrl.sort(function(a, b){return a - b});
exit.sort(function(a, b){return a - b});

// guests_in indicates number of guests at a time
let guests_in = 1, max_guests = 1, time = arrl[0];
let i = 1, j = 0;
const n=5;

while (i < n && j < n)
{
   if (arrl[i] <= exit[j])
   {
       guests_in++;
       if (guests_in > max_guests)
       {
           max_guests = guests_in;
           time = arrl[i];
       }
       i++;
   }
   else 
   {     
       guests_in--;
       j++;
   }
}

console.log("guests_in:",time,':',max_guests)