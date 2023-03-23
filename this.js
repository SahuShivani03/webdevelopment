var  name = 'shivani'   //ot - window object
var obj1 = {
    name : 'janvi'
}
function fn(){
    console.log(this);
}
fn.call(obj1)