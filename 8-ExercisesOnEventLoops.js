//////////////////////////////////////////////////////* Exercises on Event loops//////////////////////////////////////////////////////////////////

// ex1

import { readFile } from 'fs';//! اعرف اني مستدعيها فوك بس للتعلم بكل درس اسوي استدعاء

console.log("Start the first task");

readFile("./content/aseel.txt", "utf-8", (err, result) => {

    if (err) {
        console.log("error");
        return;
    }
    console.log(result);
    console.log("Comblete the task");
})

console.log("done :)"); //! طلعت هاي قبل انشاء التاسك لان سويت التاسك
//?Asynchronous

setInterval(() => {
    console.log(10 * 10);

}, 9000);

console.log("Comblete the seconde task"); //! طلع هذه السطر قبل التاسك الاول والثاني لان الاول
//? Asynchronous

//! والثاني
//? setInterval
//! و تنفذ وره السطر الي جوه لان هوه يسوي عملية لووب كل مدة زمنية و سوكرنايز



////////////////////////////////////////////////* ex2/////////////////////////////////////////////////////////////////

import { createServer } from 'http';

const server = createServer((req, res) => {

    console.log('requset event');
    res.end('Aseel');
})

server.listen(4000, () => {

    console.log('Server listen on port : 4000');
})