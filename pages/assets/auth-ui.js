// assets/auth-ui.js
import { Auth, Profile } from "./firebase.js";

const loginAnchor = document.querySelector("a[href='login.html']");
const loginBtnEl  = loginAnchor?.querySelector(".login-buton") || loginAnchor;

Auth.onChange(async (user) => {
  if (!loginAnchor || !loginBtnEl) return;
  if (user) {
    const snap = await Profile.get(user.uid);
    const data = snap.exists() ? snap.data() : {};
    loginBtnEl.textContent = data.name || "User";
    loginAnchor.setAttribute("href", "user.html");
  } else {
    loginBtnEl.textContent = "Log In";
    loginAnchor.setAttribute("href", "login.html");
  }
});
