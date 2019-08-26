// Elements
const emailInput = document.querySelector('#login-email');
const passwordInput = document.querySelector('#login-password');
var loginButton = document.querySelector('#login-button');
var errorForUser = document.querySelector("#error-message");

/*
    A listener that when enter is pressed on password input
    the loginbutton will be pressed.
*/
passwordInput.addEventListener("keydown", (event) => {
    if (event.keyCode == 13) {
        event.preventDefault();
        loginButton.click();
    }
});
emailInput.addEventListener("keydown", (event) => {
    if (event.keyCode == 13) {
        event.preventDefault();
        loginButton.click();
    }
});

function logIn() {
    signIn(emailInput.value, passwordInput.value, errorForUser);
}