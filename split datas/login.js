
document.getElementById("loginButton").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("loginMessage");


    if (username === "aaa" && password === "aaa") {

        window.location.href = "webpage.html2";
    } else {
        loginMessage.textContent = "Invalid username or password. Please try again.";
    }
});