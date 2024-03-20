// let person={
//     name: "John",
//     age: 25,
//     empid:2345,
//     basic_pay:25000,
//     address:{
//         city: "Bangalore",
//         state: "Karnataka"
//     },

//     getSalary:function(basic_pay){
//         let basic=basic_pay;
//         hra=0.15*basic;
//         da=0.1*basic;
//         let salary=basic+hra+da;
//         return salary;
//     }
// }

// console.log(person.name);
// console.log(person.address);
// console.log(person.getSalary(250000));

let emp=[
    {Name:"bhanu",Basic:300},
    {Name:"jyo",Basic:6000},
    {Name:"deepak",Basic:2500},
];

// //find emp with least basic 
// for(x in emp){
//     if(emp[x].Basic<emp[0].Basic){
//         emp[0]=emp[x];
//     }
// }
// console.log("Minimum pay:",emp[0]);

// //find emp with max basic
// for(x in emp){
//     if(emp[x].Basic>emp[0].Basic){
//         emp[0]=emp[x];
//     }
// } 
// console.log("Maximum pay:",emp[0]);

//give hike 10% to each emp..
for(let i=0;i<emp.length;i++){
    emp[i].Basic=emp[i].Basic*1.1;
}
console.log(emp);