import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname); // This should work

console.log(__filename); // This should work

setInterval(() => {
    console.log("Aseel loves Dylan");
}, 3000);

setInterval(() => {
    console.log("Aseel love Dylan");
}, 3000); // هذه فانكشن انطي امر و ينفذه وره مده اني احددها


import namesModule from './module1.js';
import funcModule from './function.js';
import { item as objsModuleItem, myPerson as objsModulePerson } from './object.js'; // Corrected import statement

import './addNumber.js'; // Importing a module for its side effects

console.log(objsModuleItem);
console.log(objsModulePerson);

funcModule(namesModule.name1);
funcModule(namesModule.name2);


////////////////////////////////////////////////////////*OS = Operating System moudles//////////////////////////////////////////////////////////