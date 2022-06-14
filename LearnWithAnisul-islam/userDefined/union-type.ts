// Union data types:
let randomUser: boolean | string | number;
let user: string;

// user = 234 undefined
// user = true undefined
user = "Raihan"; // Correct

randomUser = true;
randomUser = "true";
randomUser = 23424;

function displayUserInfo(userId: string | boolean | number) {
  console.log(userId);
}
displayUserInfo(234);
displayUserInfo("raihan");
displayUserInfo(true);
