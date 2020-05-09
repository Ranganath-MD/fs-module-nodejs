const fs = require('fs')

const folder = 'folder2'

fs.rmdir(folder, err => {
    if (err) {
        console.log(err)
    }
})