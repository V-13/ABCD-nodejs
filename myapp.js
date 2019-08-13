const myos = require('os');
var userdata = myos.userInfo();
var platform =myos.platform();
var myfs=require('fs');
console.log(userdata);
console.log(platform);
console.log(userdata.username+"uses"+platform);
myfs.appendFile("mydata.txt","hello",(error)=>{
    if (error){
        throw error;
        console.log(error);
    }
});