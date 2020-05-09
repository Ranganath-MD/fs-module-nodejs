const fs = require('fs')

// rename the folder1 to new-folder
fs.rename('folder1', 'new-folder', err => {
    if (err) {
        console.error(err)
        return
    }
    //done
})