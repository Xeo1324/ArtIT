import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { app } from "./firebase.js";

const auth = getAuth(app);

const registerBtn = document.getElementById("register-btn");
const loginBtn = document.getElementById("login-btn");
const message = document.getElementById("auth-message");

registerBtn.addEventListener("click", () => {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      message.textContent = "Registered successfully. You can now log in.";
      message.style.color = "green";
    })
    .catch(error => {
      message.textContent = error.message;
    });
});

loginBtn.addEventListener("click", () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html"; // 👈 Change to your desired page
    })
    .catch(error => {
      message.textContent = error.message;
    });
});
