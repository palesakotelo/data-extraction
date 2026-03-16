// ===============================
// 1. SAMPLE DATA (Simulating Database)
// ===============================

const companies = [
    { logo: "https://via.placeholder.com/50", name: "Azania Chartered  Account and Associaties", phone: "0120041530", email: "info@azaniaca.co.za" },
    { logo: "https://via.placeholder.com/50", name: "BlueMachines Solutions", phone: "0800014942", email: "info@bluebeansoftware.com" },
    {logo: "https://via.placeholder.com/50", name: "FinTech Africa Group", phone: "+27118795700", email: "info@fintech-group.com" }
];

const subscriptions = [
    { company: "BlueMachines LTD", plan: "Enterprise", status: "Active", billing: "Monthly", start: "Jan 22,2024", payment: "Paid" },
    { company: "GreenTech Corp", plan: "    Standard", status: "active", billing: "Monthly", start: "Dec 20, 2023", payment: "Paid" },
    { company: "NovaSoft Inc.", plan: "      Basic",     status: "Pending", billing: "Monthly", start: "April  18, 2024", payment: "Due" },
    { company: "Horizon Rentals LLC ", plan: "Enterprise", status: "Suspended", billing: "Yearly", start: "Sep 05, 2023 ", payment: "Overdue" },
    { company: "CloudBase Solutions", plan: "    Standard", status: "active", billing: "Monthly", start: "Oct 12, 2024", payment: "Paid" },
    { company: "GreenLeaf Supplies", plan: "    Basic", status: "active", billing: "Quarterly", start: "Oct 12, 2024", payment: "Paid" },
    { company: "Dataworks Analytics", plan: "    Enterprise", status: "active", billing: "Monthly", start: "Sep 10, 2022", payment: "Paid" },
    { company: "Quantum systems", plan: "    Standard", status: "Expired", billing: "Monthly", start: "May 01, 2023", payment: "Overdue" },
  

];


// ===============================
// 2. LOAD DATA INTO TABLES
// ===============================

// Load companies
companies.forEach(company => {
    document.getElementById("companyTable").innerHTML += `
        <tr>
            <td><img src="${company.logo}" width="50"></td>
            <td>${company.name}</td>
            <td>${company.phone}</td>
            <td>${company.email}</td>
        </tr>
    `;
});

// Load subscriptions
subscriptions.forEach(sub => {
    document.getElementById("subscriptionTable").innerHTML += `
        <tr>
            <td>${sub.company}</td>
            <td>${sub.plan}</td>
            <td>${sub.status}</td>
            <td>${sub.billing}</td>
            <td>${sub.start}</td>
            <td>${sub.payment}</td>
        </tr>
    `;
});

// Load staff
staff.forEach(member => {
    document.getElementById("staffTable").innerHTML += `
        <tr>
            <td>${member.id}</td>
            <td>${member.name}</td>
            <td>${member.phone}</td>
            <td><button onclick="alert('Edit Staff')">Edit</button></td>
        </tr>
    `;
});

// ===============================
// 3. SECTION NAVIGATION FUNCTION
// ===============================
function showSection(sectionId){

document.querySelectorAll('.section').forEach(section=>{
section.style.display="none";
});

const section=document.getElementById(sectionId);

if(section){
section.style.display="block";
}

}

// Show dashboard on load
window.onload=function(){
showSection("dashboard");
};


// ===============================
// 4. REPORT FUNCTION
// ===============================

function loadReport(days) {

    const reportData = [
        { company: "Tech Corp", plan: "Premium", status: "Active", newReg: 10, renewals: 5, revenue: 2000, date: "2026-03-01" },
        { company: "Business Ltd", plan: "Basic", status: "Inactive", newReg: 4, renewals: 2, revenue: 800, date: "2026-03-02" }
    ];

    let table = document.getElementById("reportTable");
    table.innerHTML = "";

    let revenues = [];

    reportData.forEach(report => {
        table.innerHTML += `
            <tr>
                <td>${report.company}</td>
                <td>${report.plan}</td>
                <td>${report.status}</td>
                <td>${report.newReg}</td>
                <td>${report.renewals}</td>
                <td>$${report.revenue}</td>
                <td>${report.date}</td>
            </tr>
        `;
        revenues.push(report.revenue);
    });

    drawChart(revenues);
}

// ===============================
// 5. SIMPLE CANVAS GRAPH
// =======================================
// PASSWORD CHANGE SYSTEM
// ===============================

// Simulated stored password (in real system this is in database)
let storedPassword = "admin123";

// Show password form
function showPasswordForm() {
    document.getElementById("passwordForm").style.display = "block";
}

// Hide password form
function hidePasswordForm() {
    document.getElementById("passwordForm").style.display = "none";
    document.getElementById("passwordMessage").innerText = "";
}

// Change password function
function changePassword() {

    const current = document.getElementById("currentPassword").value;
    const newPass = document.getElementById("newPassword").value;
    const confirmPass = document.getElementById("confirmPassword").value;
    const message = document.getElementById("passwordMessage");

    // Check if current password is correct
    if (current !== storedPassword) {
        message.style.color = "red";
        message.innerText = "Current password is incorrect!";
        return;
    }

    // Check if new passwords match
    if (newPass !== confirmPass) {
        message.style.color = "red";
        message.innerText = "New passwords do not match!";
        return;
    }

    // Check password length
    if (newPass.length < 6) {
        message.style.color = "red";
        message.innerText = "Password must be at least 6 characters!";
        return;
    }

    // If everything is valid
    storedPassword = newPass;

    message.style.color = "green";
    message.innerText = "Password changed successfully!";

    // Clear inputs
    document.getElementById("currentPassword").value = "";
    document.getElementById("newPassword").value = "";
    document.getElementById("confirmPassword").value = "";

    // Hide form after 2 seconds
    setTimeout(() => {
        hidePasswordForm();
    }, 2000);
}
// ===============================
// LOGIN ACTIVITY SYSTEM
// ===============================

// Simulate login when page loads
window.onload = function () {

    // Get previous login time
    let previousLogin = localStorage.getItem("lastLoginTime");

    // Save current time as new login
    let currentTime = new Date().toLocaleString();
    localStorage.setItem("lastLoginTime", currentTime);

    // Store previous login separately
    if (previousLogin) {
        localStorage.setItem("previousLoginTime", previousLogin);
    }
};

// Show login activity
function showLoginActivity() {

    const box = document.getElementById("loginActivityBox");
    const text = document.getElementById("lastLoginText");

    let lastLogin = localStorage.getItem("previousLoginTime");

    if (!lastLogin) {
        text.innerHTML = "This is your first login.";
    } else {
        text.innerHTML = "Last login was on: <strong>" + lastLogin + "</strong>";
    }

    box.style.display = "block";
}

// Close login activity box
function closeLoginActivity() {
    document.getElementById("loginActivityBox").style.display = "none";
}
// ===============================
// API KEY MANAGEMENT SYSTEM
// ===============================

// Load saved API keys from localStorage
let apiKeys = JSON.parse(localStorage.getItem("apiKeys")) || [];

// Open API Manager
function openAPIManager() {
    document.getElementById("apiManagerBox").style.display = "block";
    renderAPIKeys();
}

// Close API Manager
function closeAPIManager() {
    document.getElementById("apiManagerBox").style.display = "none";
}

// Generate Random API Key
function generateAPIKey() {

    const randomKey =
        "sk-" +
        Math.random().toString(36).substring(2) +
        Math.random().toString(36).substring(2);

    const newKey = {
        key: randomKey,
        created: new Date().toLocaleString()
    };

    apiKeys.push(newKey);

    // Save to localStorage
    localStorage.setItem("apiKeys", JSON.stringify(apiKeys));

    renderAPIKeys();
}

// Render API Keys in table
function renderAPIKeys() {

    const table = document.getElementById("apiKeyTable");
    table.innerHTML = "";

    apiKeys.forEach((item, index) => {

        // Mask key (show only first 6 chars)
        const maskedKey = item.key.substring(0, 6) + "**************";

        table.innerHTML += `
            <tr>
                <td>${maskedKey}</td>
                <td>${item.created}</td>
                <td>
                    <button onclick="copyAPIKey('${item.key}')">Copy</button>
                    <button onclick="deleteAPIKey(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

// Copy API Key
function copyAPIKey(key) {
    navigator.clipboard.writeText(key);
    alert("API Key copied to clipboard!");
}

// Delete API Key
function deleteAPIKey(index) {
    apiKeys.splice(index, 1);
    localStorage.setItem("apiKeys", JSON.stringify(apiKeys));
    renderAPIKeys();
}
// ===============================
// ADVANCED TWO-FACTOR AUTH SYSTEM
// ===============================

let currentOTP = null;
let otpInterval = null;
let otpTimeLeft = 30;

// Load 2FA status from localStorage
let twoFAEnabled = localStorage.getItem("twoFAEnabled") === "true";

// Open 2FA panel
function open2FA() {

    document.getElementById("twoFABox").style.display = "block";

    if (twoFAEnabled) {
        show2FAStatus();
    } else {
        start2FASetup();
    }
}

// Start setup process
function start2FASetup() {

    document.getElementById("twoFASetupSection").style.display = "block";
    document.getElementById("twoFAStatusSection").style.display = "none";

    generateSecretKey();
    generateOTP();
    startOTPTimer();
}

// Generate fake secret key
function generateSecretKey() {
    const secret = Math.random().toString(36).substring(2, 15).toUpperCase();
    document.getElementById("secretKey").innerText = secret;
}

// Generate OTP
function generateOTP() {
    currentOTP = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("generatedOTP").innerText = currentOTP;
    otpTimeLeft = 30;
    document.getElementById("otpTimer").innerText = otpTimeLeft;
}

// Start countdown timer
function startOTPTimer() {

    clearInterval(otpInterval);

    otpInterval = setInterval(() => {

        otpTimeLeft--;
        document.getElementById("otpTimer").innerText = otpTimeLeft;

        if (otpTimeLeft <= 0) {
            clearInterval(otpInterval);
            generateOTP();
            startOTPTimer();
        }

    }, 1000);
}

// Verify OTP
function verifyOTP() {

    const userInput = document.getElementById("otpInput").value;
    const message = document.getElementById("twoFAMessage");

    if (userInput == currentOTP) {

        twoFAEnabled = true;
        localStorage.setItem("twoFAEnabled", "true");

        message.style.color = "green";
        message.innerText = "Two-Factor Authentication Enabled Successfully!";

        setTimeout(() => {
            show2FAStatus();
        }, 1500);

    } else {
        message.style.color = "red";
        message.innerText = "Invalid or expired OTP code.";
    }
}

// Show enabled status
function show2FAStatus() {

    document.getElementById("twoFASetupSection").style.display = "none";
    document.getElementById("twoFAStatusSection").style.display = "block";
}

// Disable 2FA
function disable2FA() {

    twoFAEnabled = false;
    localStorage.setItem("twoFAEnabled", "false");

    clearInterval(otpInterval);

    start2FASetup();
}

// Close 2FA box
function close2FA() {
    document.getElementById("twoFABox").style.display = "none";
    document.getElementById("otpInput").value = "";
    document.getElementById("twoFAMessage").innerText = "";
    clearInterval(otpInterval);
}
const switches = document.querySelectorAll(".toggle-switch");

switches.forEach((sw) => {

  sw.addEventListener("change", function(){

    const status = this.closest(".toggle-container").querySelector(".status");

    status.textContent = this.checked ? "ON" : "OFF";

  });

});


function openHelp(section){

let content = "";

if(section === "billing"){
content = `
<h3>Billing & Payments</h3>
<input type="text" placeholder="Invoice Number">
<input type="number" placeholder="Amount">
<button>Pay Now</button>
<button>View Billing History</button>
`;
}

if(section === "subscription"){
content = `
<h3>Subscription Plans</h3>
<select>
<option>Basic Plan</option>
<option>Premium Plan</option>
<option>Enterprise Plan</option>
</select>
<button>Subscribe</button>
`;
}

if(section === "users"){
content = `
<h3>User Management</h3>
<button>Add User</button>
<button>Edit User</button>
<button>Delete User</button>
`;
}

if(section === "overview"){
content = `
<h3>System Overview</h3>
<p>Total Companies: 120</p>
<p>Total Users: 350</p>
<p>Active Subscriptions: 98</p>
`;
}

if(section === "addCompany"){
content = `
<h3>Add New Company</h3>
<input type="text" placeholder="Company Name">
<input type="text" placeholder="Company ID">
<input type="text" placeholder="Contact Number">
<button>Add Company</button>
`;
}

if(section === "createSubscription"){
content = `
<h3>Create Subscription</h3>
<input type="text" placeholder="Subscription Name">
<input type="number" placeholder="Price">
<button>Create Subscription</button>
`;
}

if(section === "generateReport"){
content = `
<h3>Generate Report</h3>
<select>
<option>Monthly Report</option>
<option>Company Report</option>
<option>Subscription Report</option>
</select>
<button>Generate</button>
`;
}

if(section === "viewReports"){
content = `
<h3>View Reports</h3>
<button>View Latest Report</button>
<button>Download Report</button>
`;
}

document.getElementById("helpContent").innerHTML = content;

}




const sampleData = [
  { company:"BlueMachines LTD", plan:"Enterprise", status:"Active", newReg:10, renew:1, revenue:425.09, date:"2026-03-10" },
  { company:"GreenTech Corp", plan:"Standard", status:"Active", newReg:4, renew:5, revenue:552.90, date:"2026-03-05" },
  { company:"NovaSoft Inc", plan:"Basic", status:"Pending", newReg:13, renew:1, revenue:321.09, date:"2026-03-04" },
  { company:"PrimeLogix Inc", plan:"Enterprise", status:"Active", newReg:8, renew:3, revenue:435.88, date:"2026-02-25" },
  { company:"AutoPro Systems", plan:"Basic", status:"Pending", newReg:12, renew:4, revenue:123.32, date:"2026-02-20" }
];

let chart = null;

// Parse "YYYY-MM-DD" strings to Date objects
function parseDate(str){
  const parts = str.split("-");
  return new Date(parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]));
}

// Filter data by last X days
function filterDays(days){
  const today = new Date();
  today.setHours(0,0,0,0);
  const past = new Date();
  past.setDate(today.getDate() - days);
  past.setHours(0,0,0,0);

  return sampleData.filter(d => {
    const recordDate = parseDate(d.date);
    return recordDate >= past && recordDate <= today;
  });
}

// Update table
function updateTable(data){
  const tbody = document.querySelector("#dataTable tbody");
  tbody.innerHTML = "";
  data.forEach(d => {
    tbody.innerHTML += `
      <tr>
        <td>${d.company}</td>
        <td>${d.plan}</td>
        <td>${d.newReg}</td>
        <td>${d.renew}</td>
        <td>${d.revenue}</td>
        <td>${d.date}</td>
      </tr>
    `;
  });
}

// Update chart
function updateChart(data){
  const labels = data.map(d => d.company);
  const revenue = data.map(d => d.revenue);

  const ctx = document.getElementById("revenueChart").getContext("2d");
  if(chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Revenue ($)",
        data: revenue,
        backgroundColor: "#28a745"
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: true } },
      scales: { y: { beginAtZero: true } }
    }
  });
}

// Load data for X days
function loadData(days){
  const filtered = filterDays(days);
  updateTable(filtered);
  updateChart(filtered);
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn7").addEventListener("click", () => loadData(7));
  document.getElementById("btn30").addEventListener("click", () => loadData(30));
  document.getElementById("btn90").addEventListener("click", () => loadData(90));

  // Show default 90-day chart
  loadData(90);
});












//reports section

document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById("revenueLineChart").getContext("2d");

    // Sort data by date to make the line graph flow correctly
    const dataRows = Array.from(document.querySelectorAll("#reportTable tbody tr"))
        .map(row => {
            return {
                company: row.cells[0].innerText,
                revenue: parseFloat(row.cells[5].innerText),
                date: row.cells[6].innerText
            };
        })
        .sort((a, b) => new Date(a.date) - new Date(b.date));

    const labels = dataRows.map(d => d.date);
    const revenue = dataRows.map(d => d.revenue);

    new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Revenue ($)",
                data: revenue,
                borderColor: "blue",
                backgroundColor: "rgba(0,0,255,0.1)",
                tension: 0.3,
                fill: true,
                pointRadius: 5
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: true } },
            scales: {
                x: { title: { display: true, text: "Date" } },
                y: { title: { display: true, text: "Revenue ($)" }, beginAtZero: true }
            }
        }
    });
});




// ===============================
// SUBSCRIPTION
// ===============================

function subscribe(){

document.getElementById("subscriptionStatus").innerHTML=
"✅ Subscription successful!";

}


// ===============================
// USER MANAGEMENT
// ===============================

// Global array
let userss = [];

// Open Help - User Management section
function openHelp(type) {
    const content = document.getElementById("helpContent");

    if (type === "users") {
        content.innerHTML = `
        <h3>User Management</h3>
        <input id="username" placeholder="Enter user name">
        <button onclick="addUser()">Add User</button>
        <table id="userTable" border="1" style="margin-top:10px; width:100%; text-align:left;">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody id="userList"></tbody>
        </table>
        `;
        renderUsers();
    }
}

// ADD USER
function addUser() {
    let name = document.getElementById("username").value.trim();
    if (name === "") {
        alert("Enter a name");
        return;
    }
    userss.push(name);
    document.getElementById("username").value = "";
    renderUsers();
}

// RENDER USERS
function renderUsers() {
    const tbody = document.getElementById("userList");
    if (!tbody) return;

    tbody.innerHTML = ""; // Clear previous

    userss.forEach((user, index) => {
        tbody.innerHTML += `
        <tr>
            <td>${user}</td>
            <td><button onclick="editUser(${index})">Edit</button></td>
            <td><button onclick="deleteUser(${index})">Delete</button></td>
        </tr>
        `;
    });
}

// EDIT USER
function editUser(index) {
    let newName = prompt("Edit user name:", userss[index]);
    if (newName && newName.trim() !== "") {
        userss[index] = newName.trim();
        renderUsers();
    }
}

// DELETE USER
function deleteUser(index) {
    if (confirm("Delete this user?")) {
        userss.splice(index, 1);
        renderUsers();
    }
}

function processPayment(){

let method = document.querySelector('input[name="paymentMethod"]:checked').value;

let message = "";

if(method === "card"){
message = "Payment successful using Credit Card.";
}

if(method === "eft"){
message = "Bank transfer instructions sent.";
}

if(method === "paypal"){
message = "Redirecting to PayPal...";
}

document.getElementById("paymentStatus").innerHTML =
"<p style='color:green;'>✅ " + message + "</p>";

}




function viewBillingHistory(){

document.getElementById("billingHistory").innerHTML = `
<ul>
<li>Invoice #1001 - Paid</li>
<li>Invoice #1002 - Paid</li>
<li>Invoice #1003 - Pending</li>
</ul>
`;

}

function subscribe(){

document.getElementById("subscriptionStatus").innerHTML =
"✅ Subscription successful!";

}

let users = [];

function addUser(){

let name = document.getElementById("username").value.trim();

if(name === ""){
alert("Enter a name");
return;
}

users.push(name);

document.getElementById("username").value="";

renderUsers();
}

function renderUsers(){

let list = document.getElementById("userList");

if(!list) return;

list.innerHTML="";

users.forEach((user,index)=>{

list.innerHTML += `
<li>
${user}

<button onclick="editUser(${index})">Edit</button>
<button onclick="deleteUser(${index})">Delete</button>

</li>
`;

});
}

function editUser(index){

let newName = prompt("Edit user name:", users[index]);

if(newName && newName.trim() !== ""){
users[index] = newName.trim();
renderUsers();
}

}

function deleteUser(index){

if(confirm("Delete this user?")){
users.splice(index,1);
renderUsers();
}

}

function openHelp(section) {
  if(section === 'billing') {
    document.getElementById('billingDetails').style.display = 'block';
  }
}

function viewBillingHistory() {
  alert('Redirecting to billing history...');
  // Replace with your billing history page
  window.location.href = 'https://example.com/billing-history';
}

function payCreditCard() {
  // Redirect to credit card payment page
  window.location.href = 'https://www.visa.com/payments'; // Example
}

function payPayPal() {
  // Redirect to PayPal website
  window.location.href = 'https://www.paypal.com/paypalme/example'; // Example
}




// Optionally, show dashboard by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('dashboard');
});

function showSection(sectionId) {

  const sections = document.querySelectorAll(".section");

  sections.forEach(section => {
      section.style.display = "none";
  });

  document.getElementById(sectionId).style.display = "block";
}

