const fs = require('fs')
const path = require("path")
const folderPath = 'new-folder'

// read the content of the given directory
const folder = fs.readdirSync(folderPath)
console.log(folder)  // [ 'file.log', 'file.txt', 'file2.txt' ]

// read the path for every file
// result
    //folder1\file.log
    // folder1\file.txt
    // folder1\file2.txt
fs.readdirSync(folderPath).map(fileName => {
    const folderpath = path.join(folderPath, fileName)
    console.log(folderpath)
})
