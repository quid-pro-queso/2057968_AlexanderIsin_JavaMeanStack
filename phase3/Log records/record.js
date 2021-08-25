
function displayData(){
const fs = require('fs');
const prompt = require('prompt-sync')();

let fName = prompt('What is your First Name? ');
let lName = prompt('What is your Last Name? ');
let gen = prompt('What is your preferred Gender? ');
let email = prompt('What is your eMail? ');

let userData = {
    firstName: fName,
    lastName: lName,
    gender: gen,
    emailAddress: email
};

let data = JSON.stringify(userData, null, 2);

fs.appendFile('userData.json', data, (err) => {
    if(err) throw err;
    console.log('Data written to file');
});
}

displayData();