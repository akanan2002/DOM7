const login = document.querySelector(".login");
const user_name = document.querySelector(".user_name");
const password_1 = document.querySelector(".password_1");

const hdlLogin = e => {
    e.preventDefault();

    const usernameInput = login.querySelector("#username");
    const validateUsername = usernameInput.value.trim();

    if (
        validateUsername.length > 3 &&
        !/^\d/.test(validateUsername) &&
        !/\s/.test(validateUsername)
    ) {
        user_name.textContent = "#";
        usernameInput.style.borderColor = "initial";
    } else {
        usernameInput.style.borderColor = "red";
        user_name.textContent = 'Username ต้องมีความยาวมากกว่า 3 ตัวอักษร';
        user_name.style.color = 'red';
        return;
    }

    const passwordInput = login.querySelector("#password");
    const validatePassword = passwordInput.value.trim();
    if (validatePassword.length > 4 && /\d/.test(validatePassword) && /[a-zA-Z]/.test(validatePassword)) {
        password_1.textContent = "";
        passwordInput.style.borderColor = "initial";
    } else {
        passwordInput.style.borderColor = "red";
        password_1.textContent = 'Password ต้องมีความยาวมากกว่า 4 ตัวอักษร และต้องมีทั้งตัวเลขและตัวอักษร';
        password_1.style.color = 'red';
        return;
    }

    const selectInput = login.querySelector("#role");
    if (selectInput.value !== "") {
        selectInput.style.borderColor = "initial";
    } else {
        selectInput.style.borderColor = "red";
        return;
    }

    if (validateLogin(validateUsername, validatePassword)) {
        alert('Login successful');
        window.location.href = "https://www.example.com";
    } else {
        alert(`\nUSERNAME : ${validateUsername}\nPASSWORD : ${validatePassword}\nROLE : ${selectInput.value}`);
        window.location.href = "https://www.example.com";
    }
};

function validateLogin(username, password) {
    // Modify this function to validate against actual user credentials
    const users = [];
    return users.some(user => user.username === username && user.password === password);
}

login.addEventListener('submit', hdlLogin);
