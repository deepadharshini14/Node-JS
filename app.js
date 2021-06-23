//GLOBAL - NO WINDOWS!!

//__dirname-path to current directory
//__filename-file name
// require-function to use modules(commonJS)
// module-info about current module(file)
// process-info about env where the program is being executed

//console.log(__dirname);
//setInterval(()=>{
  //  console.log('hello world');
//},20);
//modules
// const Deva='Deva'
// const haris='haris'
// const sayHi= (name) =>{
//     console.log(`hello there ${name}`);
// }
// const name=require('./name')
// const sayHi=require('./utils')
// require('./mind-granede')
// //console.log(name)


// sayHi('Deepa')
// sayHi(name.Deva)
// sayHi(name.haris)

// const path=require('path')
// console.log(path.sep);
const { readFileSync,writeFileSync } = require('fs');



//console.log('start');
// const first=readFileSync('./content/first.txt','utf8')
// const second=readFileSync('./content/second.txt','utf8')
//  writeFileSync(
//      './content/result-sync.txt',
//      `here is the result: ${first},${second}`
     
//  )
// //console.log('done with this task');
//console.log('starting next one');
//  const http=require('http');

//  const server=http.createServer((req,res)=>{
//  if(req.url === '/') {
   
//  res.end('welcome to our homepage')
//  }
//  if(req.url === '/about') {
//    res.end ('Here is our short history')
//  }
//  res.end(`
//  <h1>Oops!</h1>
//  <p> we can't seem to find the page you are looking for</p>
//  <a href="/">back home</a>
//  `)
//  })

//  server.listen(5000)

const _ =require('lodash');
const items=[1,[2,[3,[4]]]]
const newItems= _.flattenDeep(items);
console.log(newItems);
console.log('hello people');