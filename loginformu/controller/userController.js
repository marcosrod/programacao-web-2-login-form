function login(username, password) {
    if ((username && password) && password === reverseString(username)) {
        return true;
    }
    return false;
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

module.exports = { login };