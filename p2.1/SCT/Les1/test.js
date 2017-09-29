console.log('hallo wereld');

const fs = require("fs");

fs.writeFile('message.txt', 'Hi',  ()=>{
  console.log("Done");
})

fs.readFile('text.txt','utf-8', (err,data)=>{
  console.log(data);
});
