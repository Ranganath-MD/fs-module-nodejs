const fs = require("fs")
const foldername = "practice"
const count = Math.round(Math.random() * 10)

const contents = [
    "content no1",
    "content no2",
    "content no3",
    "content no4",
    "content no5",
    "content no6",
]

var appendFile = (folder) => {
    // append the content in the file
    // if file is not there, create a file and append the content
    for (let item of contents) {
        fs.appendFile(`./${folder}/file.log`, `\n${item}`, err => {
            if (err) {
                console.log(err)
            }
            console.log("successfully append the content")
        })
    }
}

// Create a folder
fs.mkdir(foldername, err => {
    if (err) {
        if (err.code === 'EEXIST') {
            // if the folder already exists, create another folder
            fs.mkdir(`${foldername}${count}`, err => {
                if (err) {
                    console.log("error creating folder again")
                }
                appendFile(`${foldername}${count}`)
            })

        }
    }
    else {
        appendFile(foldername)
    }
})