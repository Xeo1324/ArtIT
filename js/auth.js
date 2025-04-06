// js/auth.js
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name")?.value;
  
    if (name) {
      // Register
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("name", name);
      alert("Registered successfully!");
      window.location.href = "login.html";
    } else {
      // Login
      const storedEmail = localStorage.getItem("email");
      const storedPassword = localStorage.getItem("password");
      const storedName = localStorage.getItem("name");
  
      if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
        localStorage.setItem("name", storedName);
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid credentials.");
      }
    }
  });
  