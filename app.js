// const amount = 12;
// console.log(amount < 10 ? "Small Number" : "large Number" );
// console.log("First Node js app");


// ---------------------------------------------

// GLOBALS - NO window!!! cause there is no browser so we will use global varible for our purpose
// some of them are 

// __dirname  -  path to current dir
// __filename - current file name
// require - function to use modules
// module - info about current module(file)
// process - info about env where the program is being executed like which hosting provide or something like that

// console.log(`Directory name: ${__dirname}`);
// console.log(`File Path: ${__filename}`);


// >>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Modules: 
/*
Every file is a module by default
what modules do it encapsulate code in a file and share the minimum.


const name = require("./module1");
const sayHi = require("./module2");

// console.log(name);
sayHi(name.k);
sayHi(name.p);

output::
Hello dear: JOHN
Hello dear: PETER


const data = require('./module3');
console.log(data);

output::
{
    item: [ 'cross', 'binzer', 'light' ],      
    moreItem: { blow: 'brics', mond: 'bronze' }
}

*/


// Built in modules in Node

/*
some major modules are
OS
PATH
FS
HTTP

reference :: https://nodejs.org/dist/latest-v14.x/docs/api/

*/

// --------------->>>> OS Module <<<<<-----------

/* 
const os = require('os');

console.log(os);

// Info about current user
const user = os.userInfo();
console.log(user);
// --------------------------

// method to return system uptime in seconds
console.log(`Uptime ${os.uptime}`);

// ---------------------

// Current OS info
const currentOs = {
    name: os.type(),
    release: os.release(),
    totlaMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOs);

*/


// ---------->>>>>> PATH Module <<<<<<--------------

/*
const path = require('path');

console.log(path);

output::
{
resolve: [Function: resolve],
  normalize: [Function: normalize],
  isAbsolute: [Function: isAbsolute],
  join: [Function: join],
  relative: [Function: relative],
  toNamespacedPath: [Function: toNamespacedPath],
  dirname: [Function: dirname],
  basename: [Function: basename],
  extname: [Function: extname],
  format: [Function: bound _format],
  parse: [Function: parse],
  sep: '\\',
  delimiter: ';',
  win32: [Circular *1],
  posix: <ref *2> {
    resolve: [Function: resolve],
    normalize: [Function: normalize],
    isAbsolute: [Function: isAbsolute],
    join: [Function: join],
    relative: [Function: relative],
    toNamespacedPath: [Function: toNamespacedPath],
    dirname: [Function: dirname],
    basename: [Function: basename],
    extname: [Function: extname],
    format: [Function: bound _format],
    parse: [Function: parse],
    sep: '/',
    delimiter: ':',
    win32: [Circular *1],
    posix: [Circular *2],
    _makeLong: [Function: toNamespacedPath]
  },
  _makeLong: [Function: toNamespacedPath]
}

*/


// ------>>>>> FS Module <<<<<<----------

// const fs = require('fs');
// console.log(fs);

// ______________>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<______________
// In syncronic or blocking way 
// const {readFileSync, writeFileSync} = require("fs");

// const first = readFileSync('./Files/files.txt', 'utf8');

// const sec = readFileSync('./Files/sec.txt', 'utf8');

// console.log(first);
// console.log(sec);

// to write in a file

// This will add into the file if exist otherwise first it will create new file and then add content to the file 

// writeFileSync(
//     "./Files/new.txt", 
//     `Constent is: ${first}....${sec}`
// );

// if we want to append into the file then we will use
//  "flag" parameter in the writeFileSync function

// writeFileSync(
//     "./Files/new.txt", 
//     `Constent is: ${first}....${sec}`,
//     {flag : "a"}
// );


// >>>>>>>>>>>-----------------------<<<<<<<<<<<<<<<<<

// In Async way or non blocking way

const {readFile, writeFile } = require('fs');
/*
readFile('./Files/files.txt', (err,res) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(res);
})

output is::
<Buffer 48 65 79 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 66 69 6c 65 20 
74 6f 20 74 72 69 61 6c 20 74 68 65 20 6e 6f 64 65 20 6d 6f 64 75 6c 65 20 66 73 ... 8 more bytes>

reason it doesn't know which format this buffer should go means utf8 or something else
*/

// -------------------------------------------------
// let fir1;
// let sec1 ;
// readFile('./Files/files.txt', 'utf8', (err,res) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     fir1 = res;
//     // console.log(res);
//     readFile('./Files/sec.txt', 'utf8', (err, res) => {
//         if(err){
//             console.error(err);
//         }
//         sec1 = res;


//         writeFile(
//             './Files/new.txt',
//             `\n Here is againg content added ${fir1}...------...${sec1} \n`,
//             {flag:"a"},
//             (err, res) => {
//                 if(err){
//                     console.error(err);
//                 }
//                 console.log("successfull written");
//             },
            
//         )
//     })
// })

// console.log("thisi is value"+ fir1);
// console.log("thisi is sec value"+ sec1);

/* 
Sync vs Async
sync will do all the thing one after one and this may cause blocking of code so we will use Async 

Async will do the boring task or task which are taking time parallely so no blocking of code 

will read more some sort of topics

we can use promises async await for the non blocking process

*/





// ----<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>-----------------

// ________ HTTP Module _________________
// small info this time will do more after some topics
/* 
we use Http for setting up the server and for the apis stuff but 
we will use express for that but built in module also important if 
we wan to dig deeper


// A basic server setup
const http = require("http");

const server = http.createServer((req, res) => {
    res.write('Welcome to our end and start of new era');
    res.end()
});

server.listen(8888);



// let's play with req
const http = require("http");

const server = http.createServer((req, res) => {
    // console.log(req);
    if(req.url === "/"){
        // res.write();
        res.end('Welcome to our end and start of new era')
    }
    if(req.url === "/about"){
        // res.write('Welcome to our basic about setup');
        res.end('Welcome to our basic about setup')
    }
    if(req.url === "/contact"){
        res.write('Welcome to our contact basic setup');
        res.end()
    }

    // this is not working
    // showing unhandle error
    // res.end("<h1>Go Back</h1>")
});

server.listen(8888);

// Note::: above setup is just a basic setup for the node server we will do better things in the apis this is just for the understanding.

*/

// ...............Some NPM Commands....................
/* 
npm -g  OR npm -global to install package gloabally
npm -version ...OR... npm -v

// install local dependancies
npm install <package_name>  ...OR...  npm i <package_name>

// install gloabal dependencies.
npm i -g <package_name>


npx is just to install Pakcages/Modules/Dependencies locally. 

package.json - manifest file (stores info about the project and packges)

manual approach to create is :- create package.json in root and create properties etc.

step by step approach is "npm init" we can press enter to skip.

"npm init -y" create a package.json file where everything is default.

with npm init actually we can even create packges // this is need to be understand mr. saravjeet singh


*/


/*

// -------------------------------------------------
// let use lodash just for the trial means we don't know exact use of this till now...
const _ = require('lodash'); //means we get every method of lodash

const items = [2, [3, [4, [5, [6]]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);

// Output::: [ 2, 3, 4, 5, 6 ]


*/


// .......... Share code on Github...........