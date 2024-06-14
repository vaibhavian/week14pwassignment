function isUserPresent(username, userList) {
    if (userList.includes(username)) {
        return `Yes, ${username} is a valid user.`;
    } else {
        return `No, ${username} is not a valid user.`;
    }
}

const users = ["Mithun", "Alice", "Bob", "Charlie"];

console.log(isUserPresent("Mithun", users));  // Output: Yes, Mithun is a valid user.
console.log(isUserPresent("Someone", users)); // Output: No, Someone is not a valid user.
