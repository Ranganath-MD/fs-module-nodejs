const fs = require("fs")

fs.writeFile("file.txt", "some content Asynchronously", err => {
    if (err)
        console.log(err)
    else return "file written successfully"
})

//Synchronous version

try {
    const data = fs.writeFileSync("file.txt", "some content syncronously")
} catch (err) {
    console.log(err)
}

//both writeFile() and writeFileSync() API will replace the contents of the file if it does already exist.

// appendFile() to append content to the end of a file
const content = 'Some content!'

fs.appendFile('file.log', content, err => {
    if (err) {
        console.error(err)
        return
    }
})