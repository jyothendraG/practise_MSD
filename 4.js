// let person={
//     eid:100,
//     name:'Ravi'
// }

// let test ={...person,name:'vikas',city:'hyd'};

// person.eid=300;
// console.log(test);
// console.log(person);

// let [a,b,c]=[10,20,30];

// console.log(a,b,c);


let busy =false;
console.log("I prommise to my frnd that i will call him after 10 minutes");
console.log("frnd is calling....");
//create promise
const promiseObject = new Promise((fulfilled, rejected)=>{
    setTimeout(()=>{
        if(busy=== true){
            busy=false;
            rejected("sorry frnd...");
        }else{
            fulfilled("hello man...");
        }
    },1000);
});

// promiseObject
//   .then((data)=>{
//         console.log(data);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })

async function getResult(){ 
    try{
    let result= await promiseObject
    console.log(result);
    }catch(msg){
        console.log(msg);
    }
}
