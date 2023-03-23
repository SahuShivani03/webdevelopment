
var store = {
    fruits:['papaya', 'apple', 'cherry'],
    bakery:['biscuits', 'namkeen', 'nankhatai'],
    grocery:['spices', 'dalchini', 'garlic']
}
var shopIsOpen = true;
var order = (time,work) =>{
    return new Promise((resolve, reject)=>{
        if(shopIsOpen){
            setTimeout(()=>{
                resolve(work())
            },time)
        }else{
            reject( console.log(('our shop is closed')))
        }
    })
}
order(0,() => console.log(`${store.fruits[0]} has been selected`))
.then (()=>{
    return order(0,() => console.log('production has started'))
})
.then(() =>{
return order(0,()=> console.log(`${store.bakery[0]} & ${store.grocery[0]} has added`))
.then()
.catch()
})



var marks ={
science:[ 65,30],
math:[60,30],
english:[47,30]
}
var students = true;
var expose = (time,work) =>{
    return new Promise((resolve,reject)=>{
if(students){
setTimeout(()=>{
    resolve((work)())
},0)
}else{
    reject(console.log(('marks is not updated')))
}
    })
}
expose(0,()=> console.log(`${marks.science}has updated`))



//async 
var getData = async()=>{
    var data =  'hello world';
    return data;
}
getData().then(data=> console.log(data))


//await    // console prints 2 before hello world due to usage of await keyword
var getData = async() => {
    var y = await 'hello hi ! shivani';
    console.log(y);
}
console.log(1);
getData();
console.log(2)


function asyncOpMethod(){
    var firstPromise = new Promise((resolve,reject)=> resolve('hello'));
    var secPromise = new Promise((resolve,reject)=>  {
        setTimeout(() => {
resolve ('hi shivani');
        },1000);
    });
    var combinedPromise = Promise.all([firstPromise, secPromise])
    return combinedPromise;
}
async function display(){
    var data = await asyncOpMethod();
    console.log(data);
}
display()

//try catch finally
function fn(){
try{
    console.log('try ');
}
catch(e){
    console.log('catch');
}finally{
    console.log('finally')
}
}
fn()




var family ={
    shivani:['hi', 40],
    sahu:['hello',30],
}
var members= true;
var go = (time,work)=>{
    return new Promise((resolve,reject)=>{
        if(members){
            setTimeout(()=>{
                resolve(work())
            },2000)
        }else{
            reject(console.log(('today they are going delhi')))
        }
    })
}
go(0,()=> console.log(`${family.shivani[0]} we are going to mumbai`))
.then(()=>{
    return go(0,()=> console.log('we meet '))
})
.then(()=>{
    return go(0,()=> console.log(`${family.sahu}`))
    .then()
    .catch()
})


//async await
var getValue = async()=>{
    var value = 'love';
    return value;
}
getValue().then(value => console.log(value))


var getData = async()=>{
    var data = await 'hello shivani'
    console.log(data)
}
console.log(1)
getData()
console.log(2)
