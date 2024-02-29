//////////////////////////////////////////////////////*Event loops in Node JS////////////////////////////////////////////////////////////////////

//! شرح مالتها اخذتله صوره بالموبايل

//* An event loop is a fundamental concept in asynchronous programming and is a central component of how Node.js handles I / O operations
//* efficiently. Node.js is designed to be non - blocking and event - driven, and the event loop is at the core of this architecture.

//?     Here's an overview of how the event loop works in Node.js:

//! Event Loop Basics:

//* The event loop is a continuous loop that continually checks for and processes events.Events can be various I / O operations, timers,
//* or user - defined events.It allows Node.js to handle a large number of concurrent connections without the need for creating separate threads
//* for each connection.

//? Phases of the Event Loop:

//! The event loop in Node.js operates in a series of phases:

//* Timers: This phase handles callbacks scheduled by setTimeout() and setInterval().

//* I / O Callbacks: This phase executes I / O callbacks, which include results of previously started asynchronous operations, like reading from
//* files or making network requests.

//* Idle, Prepare: These are internal phases used by the event loop for optimization purposes.

//* Poll: In this phase, Node.js checks for new I / O events and processes them.If no I / O events are available, it will wait for events to arrive

//* Check: This phase allows callbacks registered via setImmediate() to be executed.

//* Close Callbacks: This phase executes callbacks for closed I / O operations, like closing a file or a network socket.

//! How It Works:

//* When you start a Node.js application, it enters the event loop.
//* During the loop, Node.js processes the different phases sequentially, checking for events in each phase.
//* When an event is encountered, the corresponding callback is added to the queue.
//* After processing each phase, Node.js checks the callback queue and executes the callbacks in the order they were added.

//!     Non - Blocking Nature:

//* Node.js operates in a single thread, which means it can't execute multiple tasks simultaneously like traditional multi-threaded environments.
//*Instead, it efficiently manages asynchronous I / O operations using the event loop.While one operation is waiting for I / O, Node.js can continue
//* processing other tasks.

//! Callbacks and Promises:

//* Node.js uses callbacks as a core mechanism for handling asynchronous operations.However, with the introduction of Promises and async / await syntax,
//* handling asynchronous operations has become more intuitive and less error - prone.

//! Concurrency and Scaling:

//* To handle high levels of concurrency, Node.js employs an event - driven architecture where many clients can be served concurrently without
//* requiring a separate thread for each connection.This makes Node.js suitable for applications with high I / O demands, such as web servers, APIs,
//*  and real - time applications.

//* Understanding the event loop is crucial for writing efficient Node.js applications.It's essential to structure your code to leverage
//* asynchronous patterns effectively and avoid blocking operations that can impact the performance of your application
