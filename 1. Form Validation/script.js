const inputName = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
    let errors = [];

    if (inputName.value === '' || inputName.value === null) {
        errors.push("Enter a name");
    };

    if (password.value.length < 8) {
        errors.push("Enter a password that has more than 8 char");
    };

    if (errors.length > 0) {
        e.preventDefault();
        error.innerText = errors.join(', '); 
    };
});