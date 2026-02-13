const form = document.getElementById("regForm");
const submitBtn = document.getElementById("submitBtn");
const successMsg = document.getElementById("successMsg");
const topError = document.getElementById("topError");

successMsg.innerText = "";

form.addEventListener("input", validateForm);

function validateForm() {
    let valid = true;
    topError.innerText = "";
    successMsg.innerText = "";

    if (firstName.value.trim() === "") {
        firstError.innerText = "First name required";
        valid = false;
    } else firstError.innerText = "";

    if (lastName.value.trim() === "") {
        lastError.innerText = "Last name required";
        valid = false;
    } else lastError.innerText = "";

    if (!email.value.includes("@")) {
        emailError.innerText = "Invalid email";
        valid = false;
    } else emailError.innerText = "";

    if (!/^[0-9]{10}$/.test(phone.value)) {
        phoneError.innerText = "Phone must be 10 digits";
        valid = false;
    } else phoneError.innerText = "";

    if (password.value.length < 6) {
        strength.innerText = "Weak Password";
        strength.style.color = "red";
        valid = false;
    } else if (password.value.length < 10) {
        strength.innerText = "Medium Password";
        strength.style.color = "orange";
    } else {
        strength.innerText = "Strong Password";
        strength.style.color = "green";
    }

    if (password.value !== confirmPassword.value || confirmPassword.value === "") {
        confirmError.innerText = "Passwords do not match";
        valid = false;
    } else confirmError.innerText = "";

    if (!terms.checked) {
        termsError.innerText = "Please accept terms";
        valid = false;
    } else termsError.innerText = "";

    submitBtn.disabled = !valid;

    if (!valid) {
        topError.innerText = "Please fix the errors below";
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    successMsg.innerText = "Registration Successful!";
    topError.innerText = "";
    form.reset();
    submitBtn.disabled = true;
});
