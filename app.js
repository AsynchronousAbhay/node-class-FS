// const fs = require("fs");
const path = require("path");

// fs.writeFileSync("dir1/dir2/demo1.txt", "Hey! Hello World");
// console.log("File Created!");

// const data = fs.readFileSync("demo1.txt", "utf-8");
// console.log(data);

// fs.appendFileSync("demo.txt", " New data from file system.");
// console.log("Data Appended.");

// try {
//     fs.unlinkSync("demo.txt");
//     console.log("file Deleted");
// } catch (error) {
//     console.log(error.message);
// }

// fs.mkdirSync("dir1/dir2");
// console.log("Folder Created.");

// const data = fs.readdirSync("dir1");
// console.log(data);

// you can rename/delete empty directory(folder) only
// fs.renameSync("h", "makade");
// console.log("helloo");

// fs.rmdirSync("makade");
// console.log("Directory Removed");

console.log(path.resolve("a", "b", "hello.txt"));
console.log(path.join("a", "b", "hello.txt"));


