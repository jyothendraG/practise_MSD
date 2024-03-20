//array
let n=[10,20,30,40,50,60,70,80];


//console.log(n[n.length-1]);

// for(let i=0; i<n.length; i++){
//     console.log(n[i]);
// }

// for(let i of n){
//     console.log(i);
// }



// //start
// n.unshift(100);
// console.log(n)

// //end
// n.push(200);
// console.log(n);

// //in between(index based)
// n.splice(2,0,222);
// console.log(n);

// //delete
// n.splice(2,10);
// console.log(n);//(a,b) a=index from where element to be deleted. a=no of elements to be deleted.




// let person={
//     name:"jyo",
//     age:"21"
// }
// console.log(person.name);




let numbers=[10,-23,45,90,2];
//smallest number

// let smallest=Math.min(...numbers);
// console.log(smallest);
let s=numbers[0];
for (let i=0; i<numbers.length; i++){
    if(s>numbers[i]){
        s=numbers[i];
    }
}
console.log(s);
//maximum number

// let largest=Math.max(...numbers);
// console.log(largest);

let m=numbers[0];
for (let i=0; i<numbers.length; i++){
    if(m<numbers[i]){
        m=numbers[i];
    }
}
console.log(m);





