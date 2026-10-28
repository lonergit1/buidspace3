const users = [
  {
    name: "Ayo",
    email: "ayo@gmail.com",
    role: "admin",
  },
  {
    name: "Ayoola",
    email: "ayoola@gmail.com",
    role: "user",
  },
  {
    name: "Mahmud",
    email: "mahmud@gmail.com",
    role: "admin",
  },
  {
    name: "Zainab",
    email: "zainab@gmail.com",
    role: "editor",
  },
];
function findUserByEmail(email) {
  return users.find((user) => user.email === email);
}
function findAdmins() {
  return users.filter((user) => user.role === "admin");
}
function userExists(email) {
  return users.some((user) => user.email === email);
}
function findUsersByRole(role) {
  return users.filter((user) => user.role === role);
}

console.log("Find user:");
console.log(findUserByEmail("ayo@gmail.com"));

console.log("All admins:");
console.log(findAdmins());

console.log("Does Amaka exist?");
console.log(userExists("ayoola@gmail.com"));

console.log("Find editors:");
console.log(findUsersByRole("editor"));

console.log("Find missing user:");
console.log(findUserByEmail("missing@gmail.com"));

console.log("Check missing user:");
console.log(userExists("missing@gmail.com"));

console.log("Find users with an unknown role:");
console.log(findUsersByRole("manager"));
