const fs = require("fs")

fs.open("file.txt", "r+", (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data, "file opened successfully")
})