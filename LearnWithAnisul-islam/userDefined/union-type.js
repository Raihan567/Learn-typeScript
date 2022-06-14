// Union data types:
var randomUser;
var user;
// user = 234 undefined
// user = true undefined
user = "Raihan"; // Correct
randomUser = true;
randomUser = "true";
randomUser = 23424;
function displayUserInfo(userId) {
    console.log(userId);
}
displayUserInfo(234);
displayUserInfo("raihan");
displayUserInfo(true);
