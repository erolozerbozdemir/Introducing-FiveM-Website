// assets/login.js
import { Auth } from "./firebase.js";

const form  = document.getElementById("loginForm");
const email = document.getElementById("email");
const pass  = document.getElementById("sifre");

form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    await Auth.signIn(email.value.trim(), pass.value);
    window.location.href = "user.html";
  } catch (err) {
    alert("Giriş hatası: " + (err?.message || err));
  }
});
