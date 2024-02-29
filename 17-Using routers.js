//////////////////////////////////////////////////* Using routers ///////////////////////////////////////////////////////////
//!  التحكم في ملفات النظام عبر الروتر

//? Using routers in Express.js allows you to organize your routes and middleware in a more modular and maintainable way.
//? Routers help in breaking down your application into smaller, reusable components.
//? Here's how you can use routers in Express.js: in folder => auth => languages.js



//todo Import and Use the Router:

//* In your main Express application file(e.g., app.js or index.js), import the router module and use it.Here's how you can do that:

import express from 'express';
import langRouter from './routers/languages.js';
import authRouter from './routers/auth.js'

const app = express();
const port = 5014;


app.use(express.static('./12-forms'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json()) //! ثابت يتخلى

app.use('/api/langauge', langRouter)
app.use('/add-langauge', authRouter)


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})


//? Using routers in this way can help keep your code organized and maintainable as your Express application grows.
//? Each router can focus on a specific area or feature of your application.