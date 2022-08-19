// This file reads the contents of the file

const fsPromises = require('fs').promises;
const path = require("path")


// fspromises.readFile(path.join(__dirname,".","text.txt"),"utf8", (err,data) => {
//     if (err) throw err;
//     console.log(data);

// });

const fileOps =  async() => {
    try{

        const data = await fsPromises.readFile(path.join(__dirname,".","text.txt",),"utf8");
        console.log(data);
        await fsPromises.unlink(path.join(__dirname,".","text.txt"))
        await fsPromises.writeFile(path.join(__dirname,".","text1.txt"),"Hello Its Al Mamun Khan");
        await fsPromises.appendFile(path.join(__dirname,".","text1.txt"),"\n\nNice to Meet you");
        await fsPromises.rename(path.join(__dirname,".","text1.txt"),path.join(__dirname,".","newText"));

    }catch(err){
        console.error(err)

    }

};

fileOps();



process.on("uncaughtException", err =>{
    console.error(`There is an uncaught error  ${err} `);
    process.exit(1);
}) 



// fs.writeFile(path.join(__dirname,".","text1.txt"),"Hello\n",err=> {
//     if (err) throw err;
//     console.log("Write Completed")

//     fs.appendFile(path.join(__dirname, '.', 'text1.txt'), "Hi new line appended here", err =>{
//         if (err) throw err;
//         console.log("A new line appended to the file")
        
        
//         fs.rename(path.join(__dirname,".","text1.txt"), path.join(__dirname,".","newText1.txt"),err=> {
//             if (err) throw err;
//             console.log("Rename completed") ;
        
//         })


    
//     });
    

// })



