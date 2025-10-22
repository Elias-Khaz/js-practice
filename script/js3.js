function isValidPassword(password, username) {
    return (
        password.length >= 8 &&
        !password.includes(' ') &&
        !password.toLowerCase().includes(username.toLowerCase())
    );
}

const username = prompt("Enter your username");
const password = prompt("Enter your password");

if (isValidPassword(password, username)) {
    alert("Password is valid!")
} else {
    alert("Password is invalid!")
}

const result = isValidPassword(password, username);
console.log(result);