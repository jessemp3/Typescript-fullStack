"use strict";
const num = 13;
if (num > 15) {
    console.log("====================================");
    console.log(`${num} maior que 15`);
    console.log("====================================");
}
else if (num === 15) {
    console.log("====================================");
    console.log(`${num} igual a 15`);
    console.log("====================================");
}
else {
    console.log("====================================");
    console.log(`${num}  menor que 15`);
    console.log("====================================");
}
const typeUser = {
    admin: "Admin",
    student: "Eu sou um estudante",
    viewer: "eu sou um visitante"
};
function validateUser(user) {
    console.log(typeUser[user]);
}
const user = "admin";
validateUser(user);
validateUser("student");
validateUser("viewer");
