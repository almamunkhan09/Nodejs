const express = require('express');
categoryRouter = express.Router();

let mongodb = require('mongodb').MongoClient;
let dotenv = require('dotenv');
const { response } = require('express');
dotenv.config()
url = process.env.MONGOURL

var category = [
    {
        "id":1,
        "category": "Fashion",
        "thumb":"https://i.ibb.co/56VP0Fn/cloths.jpg"
    },
    {
        "id":2,
        "category":"Electronics",
        "thumb":"https://i.ibb.co/pw5Wtdx/appliances.jpg"
    },
    {
        "id":3,
        "category":"Essentials",
        "thumb":"https://i.ibb.co/0cw34xm/essentials.jpg"
    },
    {
        "id":4,
        "category": "Footwear",
        "thumb":"https://i.ibb.co/r3SZq8S/footware.jpg"
    }
]

// let menu = [
//     { link: "/", name: "Home" },
//     { link: "/category",name: "Category" },
//     { link: "/products",name: "Products" }
// ]


function router(menu) {

    categoryRouter.route("/").get((req,res) =>{

        mongodb.connect(url,function(err,dc){
            if (err) {
                res.status(500).send("Error While connecting with database")
            }else{
                let database01 = dc.db('aug');
                database01.collection('categories').find().toArray(function(err,result){
                    if(err){
                        res.status(203).send("Error while fatching the data");

                    }else{
                        res.render('category',{title:"category page",data:result,menu})
                    }
                })
            }
        })
        // res.render('category',{title:"category page",data:category,menu})
    });
    
    categoryRouter.route("/details")
    .get((req,res) => {
        res.send("category details")
    });

    return categoryRouter;

};

// categoryRouter.route("/").get((req,res) =>{
//     res.render('category',{title:"category page",data:category,menu})
// });

// categoryRouter.route("/details")
// .get((req,res) => {
//     res.send("category details")
// });

module.exports = router;
