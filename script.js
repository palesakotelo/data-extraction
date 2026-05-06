// Show selected section
function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(sec => {
        sec.style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";
}

// Generate random 6-digit PIN
function generatePIN() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Save user
function saveUser(user) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
}

// ================= REGISTER ADMIN =================
document.getElementById("adminForm").addEventListener("submit", function(e){
    e.preventDefault();

    let pin = generatePIN();

    let user = {
        role: "admin",
        name: adminName.value,
        email: adminEmail.value,
        password: adminPassword.value,
        active: false,
        pin: pin
    };

    saveUser(user);
    alert("Admin Registered! Activation PIN (simulate email): " + pin);
    showSection("pinSection");
});

// ================= REGISTER COMPANY =================
document.getElementById("companyForm").addEventListener("submit", function(e){
    e.preventDefault();

    let pin = generatePIN();

    let user = {
        role: "company",
        companyName: companyName.value,
        email: companyEmail.value,
        password: companyPassword.value,
        registrationNumber: regNumber.value,
        website: website.value,
        active: false,
        pin: pin
    };

    saveUser(user);
    alert("Company Registered! Activation PIN: " + pin);
    showSection("pinSection");
});

// ================= REGISTER USER =================
document.getElementById("userForm").addEventListener("submit", function(e){
    e.preventDefault();

    let pin = generatePIN();

    let user = {
        role: "user",
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value,
        active: false,
        pin: pin
    };

    saveUser(user);
    alert("User Registered! Activation PIN: " + pin);
    showSection("pinSection");
});

// ================= CONFIRM PIN =================
function confirmPIN() {
    let email = pinEmail.value;
    let pin = pinInput.value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u => u.email === email && u.pin === pin);

    if(user) {
        user.active = true;
        user.pin = null;
        localStorage.setItem("users", JSON.stringify(users));
        alert("Account Activated! You can now login.");
        showSection("loginSection");
    } else {
        alert("Invalid PIN.");
    }
}

// ================= LOGIN =================
function login() {
    let email = loginEmail.value;
    let password = loginPassword.value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u => u.email === email && u.password === password);

    if(!user) {
        alert("Invalid credentials.");
        return;
    }

    if(!user.active) {
        alert("Account not activated.");
        showSection("pinSection");
        return;
    }

    alert("Login successful! Role: " + user.role);

    if(user.role === "admin") {
        alert("Admin can now manage the system.");
    }
}

// ================= RECOVER PASSWORD =================
function recoverPassword() {
    let email = forgotEmail.value;
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u => u.email === email);

    if(!user) {
        alert("Email not found.");
        return;
    }

    let resetPin = generatePIN();
    user.resetPin = resetPin;

    localStorage.setItem("users", JSON.stringify(users));

    alert("Reset PIN sent (simulated): " + resetPin);
    showSection("resetSection");
}

// ================= RESET PASSWORD =================
function resetPassword() {
    let email = resetEmail.value;
    let pin = resetPin.value;
    let newPass = newPassword.value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u => u.email === email && u.resetPin === pin);

    if(!user) {
        alert("Invalid reset PIN.");
        return;
    }

    user.password = newPass;
    user.resetPin = null;

    localStorage.setItem("users", JSON.stringify(users));

    alert("Password reset successful!");
    showSection("loginSection");
}