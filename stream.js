const fs = require("fs");
const path = require("path")

const readStream = fs.createReadStream(path.join(__dirname,".","lorem.txt"),{ encoding: "utf-8" })
const writeStream = fs.createWriteStream(path.join(__dirname,".", "newLorem.txt"))

// readStream.on("data",(dataStream) => {
//     writeStream.write(dataStream);
// }); 

readStream.pipe(writeStream);