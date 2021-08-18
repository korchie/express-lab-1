// import express from "express";

// const route = express.Router();

// route.get("/", (req, res) => {
//     res.json("You are on the home page.")
// })


// route.get("/students", (req, res) => {
//     res.json("hello class.")
// })
// // route.get("/students/jim", (req, res) => {
// //     res.json("You are on Jim's page.")
// // })

// // route.get("/students/:id", (req, res) => {
// //     console.log(req.params);
// //     res.json();
// // })

// // route.get("/students", (req, res) => {
// //     console.log(req.query.presh);
// //     res.json();
// // })

// route.get("/students", (req, res) => {
//     // destructuring
//     const {a, b, c} = req.query;
//     console.log("a: ", a);
//     console.log("b: ", b);
//     console.log("c: ", c);

//     res.json();
// })


// // making a post
// let myArray = [];

// route.post("/students", (req, res) => {
//     res.status(201);
//     res.json("you made a post");

//     console.log(req.body);
// })


// export default route;