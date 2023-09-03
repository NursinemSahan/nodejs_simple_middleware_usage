const express = require("express");

const app = express();

// app.get("/favicon.ico",(req, res)=>{
//     res.status(204);
// })

// app.use((req, res, next)=>{
//     console.log("it's the first middleware", req.originalUrl);
//     next();
// });

// app.use("/",(req, res)=>{
//     console.log("it's the second middleware");
//     res.send("the front page");
// });

app.use("/users", (req, res)=>{
    console.log("the user middleware");
    res.send("<h1>this is the user page</h1>");
});

app.use("/", (req, res)=>{
    console.log("the main page middleware");
    res.send("<h1>this is the main page</h1>");
});

app.listen(3000);