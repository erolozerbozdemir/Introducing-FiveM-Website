// assets/signup.js
import { Auth, Profile } from "./firebase.js";

const form   = document.getElementById("signupForm");
const btn    = document.getElementById("signupBtn");

const nameEl = document.getElementById("isim");
const surEl  = document.getElementById("soyisim");
const email  = document.getElementById("email");
const pass   = document.getElementById("sifre");
const roleEl = document.getElementById("rol");
const telEl  = document.getElementById("telefon");
const bDay   = document.getElementById("birthday-day");
const bMon   = document.getElementById("birthday-month");
const bYear  = document.getElementById("birthday-year");

// 18+ kuralı: 2007 ve öncesi
bYear?.setAttribute("max", "2007");

// Telefonu rakama zorla
telEl?.addEventListener("input", () => (telEl.value = telEl.value.replace(/\D/g, "")));

function isAdult(d, m, y) {
  const day = +d, mon = +m, yr = +y;
  if (!day || !mon || !yr) return false;
  const today = new Date();
  const birth = new Date(yr, mon - 1, day);
  let age = today.getFullYear() - yr;
  const before = today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate());
  if (before) age--;
  return age >= 18;
}

form?.addEventListener("submit", async (e) => {
  // 1) her koşulda doğal submiti durdur
  e.preventDefault();

  // 2) butonu işlemler bitene kadar kilitle
  if (btn) { btn.disabled = true; btn.style.opacity = ".6"; }

  try {
    // basit doğrulamalar
    if (!isAdult(bDay.value, bMon.value, bYear.value)) {
      throw new Error("Kayıt için 18 yaşından büyük olmalısınız (2007 ve öncesi).");
    }
    if (!email.value || !pass.value) {
      throw new Error("Email ve parola zorunludur.");
    }

    // 3) auth + profil kaydı
    const cred = await Auth.signUp(email.value.trim(), pass.value);
    await Profile.save(cred.user.uid, {
      name: nameEl.value.trim(),
      surname: surEl.value.trim(),
      email: email.value.trim(),
      roleType: roleEl.value,
      phone: telEl.value.trim(),
      birthday: { day: +bDay.value, month: +bMon.value, year: +bYear.value },
      createdAt: Date.now(),
    });

    // 4) yönlendir
    window.location.href = "login.html";
  } catch (err) {
    alert(err?.message || String(err));
  } finally {
    // 5) (hata varsa) butonu tekrar aç
    if (btn) { btn.disabled = false; btn.style.opacity = ""; }
  }
});
