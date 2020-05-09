const fs = require("fs")

// 1. r+ open the file for reading and writing
fs.writeFile("file2.txt", "\nr+ open the file for reading and writing", {flag: "r+"}, err => {
    if (err) {
        console.log(err)
    }
})

// 2.w + open the file for reading and writing, positioning the stream at the beginning of the file.The file is created if not existing
fs.writeFile("file2.txt", "\nw + open the file for reading and writing, positioning the stream at the beginning of the file.The file is created if not existing", { flag: "w+" }, err => {
    if (err) {
        console.log(err)
    }
})

// // 3. a open the file for writing, positioning the stream at the end of the file. The file is created if not existing
fs.writeFile("file2.txt", "\nflag a", { flag: "a" }, err => {
    if (err) {
        console.log(err)
    }
})

// //4.a+ open the file for reading and writing, positioning the stream at the end of the file. The file is created if not existing
fs.writeFile("file2.txt", "\na+ open the file for reading and writing", { flag: "a+" }, err => {
    if (err) {
        console.log(err)
    }
})