const fs = require("fs")

//Asynchronous read file
// fs.readFile(path, flag to convert buffer to string, callback())
fs.readFile("file.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    // data is a buffer, convert it to a string to see content from the file
    console.log(data)
})

//synchronous read file

// fs.readFile(path, flag to convert buffer to string)
try {
    const filedata = fs.readFileSync("file.txt", "utf8")
    console.log(filedata, "Synchronously")
} catch (err) {
    console.log(err)
}