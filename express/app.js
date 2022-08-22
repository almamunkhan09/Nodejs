const { application } = require('express');
const express = require('express');
const app = express();
let dotenv = require('dotenv');
dotenv.config()

let port = process.env.PORT || 9000;
const categoryRouter = require("./src/router/categoryRouter");
const productRouter = require("./src/router/productRouter")




app.get("/",(req,res) =>{

    res.send("<h2>Hello express server </h2>");

});







app.use("/category",categoryRouter);
app.use("/products",productRouter)













// app.get("/products",(req,res) =>{
//     res.send(products);
// });

// app.get("/category",(req,res) =>{
//     res.send(category);
// });


// app.get("/category/details", (req,res) =>{
//     res.send("category details")
// });

// app.get("/details", (req,res) =>{
//     res.send("Products details")
// });

app.listen(port, err =>{
    if (err) throw err;
    console.log("express server is listening on port 900");

});

app.get("/home", (req,res) => {
    res.send("<h3>Hello from the Home pages</h3>");


});

app.get("/about", (req,res) =>{

    res.send("<h3>Hello from the about page.</h3>")
})