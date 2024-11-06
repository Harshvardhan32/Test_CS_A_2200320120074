const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const formSubmit = (event) => {
    event.preventDefault();

    if (passwordInput.value.length < 8) {
        alert("Password must be 8 characters long!");
        return;
    }

    alert("You have logged in successfully!");
    window.location.href = "currencyConvertor.html"
}