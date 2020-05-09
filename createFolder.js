const fs = require("fs")

// mkdir() to create folder Asynchronously
fs.mkdir("folder1", (err, data) => {
    if (err) {
        console.log(err)
    }
})

// mkdirSync() to create folder synchronously

const folderName = 'folder2'

try {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName)
    }
} catch (err) {
    console.error(err)
}