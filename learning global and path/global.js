var path = require("path");

console.log(`Rock on World from ${path.basename(__filename)}`);
/*DIfference between filename and dirname 
__fileName: - it shows the name of file with full path .
__dirname: it shows the upto the current directory name .

*/
console.log(__filename);
console.log(__dirname);

console.log(global);

/*
path.basename : - split the pathname or get the current file name 
*/
let dem= path.basename(__filename,".js");
console.log("path user", dem);