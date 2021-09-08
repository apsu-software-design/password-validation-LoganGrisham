const validatePassword = require('./passwordvalidation'); //import the function

// Your code goes here!
var readL = require('readL');
var post = readL.createInterface(process.stdin, process.stdout);

getPassword();

function getPassword() {
    post.question('Enter a password to validate (or :q to quit)', (password) => {

        if (validatePassword(password) == true) {
            Console.log("This is a valid password!");
            return getPassword();

        }
        else if (validatePassword(password) == false) {
            Console.log("This password is invalid, Please try again.")
            return getPassword();
        }
        else if (validatePassword(password) == ':q') {
            post.close;
        }
    });

}

