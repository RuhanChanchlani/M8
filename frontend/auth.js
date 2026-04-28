const AUTH_USERS = {
  guest: { username: "guest", password: "guest123" },
  staff: { username: "staff", password: "staff123" },
  manager: { username: "manager", password: "manager123" }
};

function loginRole(role) {
  const form = document.getElementById("login-form");
  const username = form.username.value.trim();
  const password = form.password.value;
  const errorEl = document.getElementById("login-error");

  errorEl.textContent = "";
  if (!username || !password) {
    errorEl.textContent = "Please enter both username and password.";
    return;
  }

  const expected = AUTH_USERS[role];
  if (!expected || username !== expected.username || password !== expected.password) {
    errorEl.textContent = "Invalid username or password.";
    return;
  }

  localStorage.setItem("rr_role", role);
  localStorage.setItem("rr_user", username);

  if (role === "guest") {
    window.location.assign("guest_sos.html");
    return;
  }
  if (role === "staff") {
    window.location.assign("responder.html");
    return;
  }
  if (role === "manager") {
    window.location.assign("dashboard.html");
  }
}

function requireRole(role, loginPage) {
  const current = localStorage.getItem("rr_role");
  if (current !== role) {
    window.location.assign(loginPage);
  }
}

function logoutAndRedirect() {
  localStorage.removeItem("rr_role");
  localStorage.removeItem("rr_user");
  window.location.assign("home.html");
}

function initializeLoginForm() {
  const roleHint = document.getElementById("login-role-hint");
  const path = window.location.pathname.split("/").pop();
  if (!roleHint) return;
  if (path.startsWith("guest_login")) roleHint.textContent = "guest";
  if (path.startsWith("staff_login")) roleHint.textContent = "staff";
  if (path.startsWith("manager_login")) roleHint.textContent = "manager";
}

window.addEventListener("DOMContentLoaded", initializeLoginForm);