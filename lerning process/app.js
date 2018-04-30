/*
learning about process
process argv : basically getting the argument passed within the script 
*/
console.log (process.argv);

function grab(flag) {
	var index = process.argv.indexOf(flag);
	return (index === -1) ? null : process.argv[index+1];
}

var greeting = grab('-s');
var user = grab('--user');

if (!user || !greeting) {
	console.log("You Blew it!");
} else {
	console.log(`Welcome ${user}, the flags are passed ${greeting}`);
}

