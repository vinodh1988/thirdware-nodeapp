const fs = require('fs');
const obj = require('./server/second')
const obj2 = require('./server/third')

obj.message();
console.log(obj.people)
console.log(obj.person)
console.log(obj2.test())
console.log(obj2.funny);


fs.readFile("package.json","utf-8",function(error,data){
    if(error)
       console.log("file not read")
    else
        console.log(data);
})

console.log("After reading file logic")
