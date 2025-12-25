// STEP 1 FORM HANDLER
const step1Form = document.getElementById("step1Form");
if (step1Form) {
  const savedData = JSON.parse(localStorage.getItem("registerData"));

  if (savedData) {
    document.getElementById("fullname").value = savedData.fullname || "";
    document.getElementById("email").value = savedData.email || "";
    document.getElementById("password").value = savedData.password || "";

    const termsCheckbox = document.getElementById("checkbox");
    if (termsCheckbox) {
      termsCheckbox.checked = true;
    }
  }

  step1Form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const terms = document.getElementById("checkbox").checked;

    if (!fullname || !email || !password) {
      alert("Semua field wajib diisi");
      return;
    }

    if (!terms) {
      alert("Kamu harus setuju terms & conditions");
      return;
    }

    localStorage.setItem(
      "registerData",
      JSON.stringify({ fullname, email, password })
    );

    window.location.href = "complete-profile.html";
  });
}

// STEP 2 FORM HANDLER
const step2Form = document.getElementById("step2Form");

if (step2Form) {
  step2Form.addEventListener("submit", function (e) {
    e.preventDefault();

    const step1Data = JSON.parse(localStorage.getItem("registerData"));
    if (!step1Data) {
      alert("Data step 1 hilang. Ulangi pendaftaran.");
      window.location.href = "regist-individu.html";
      return;
    }

    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const province = document.getElementById("province").value;

    if (!phone || !address || !province) {
      alert("Semua field wajib diisi");
      return;
    }

    const finalData = { ...step1Data, phone, address, province };
    console.log("FINAL REGISTER DATA:", finalData);

    localStorage.removeItem("registerData");
    window.location.href = "success.html";
  });
}


// PASSWORD TOGGLE VISIBILITY
const passwordInput = document.getElementById("password");
const toggleBtn = document.getElementById("togglePassword");
const eyeIcon = document.getElementById("eyeIcon");

if (passwordInput && toggleBtn && eyeIcon) {
  toggleBtn.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    eyeIcon.className = isPassword
      ? "bi bi-eye-slash"
      : "bi bi-eye";
  });
}

// GOOGLE OAUTH LOGIN
document.getElementById("googleLogin").addEventListener("click", () => {
  window.location.href =
    "https://accounts.google.com/o/oauth2/v2/auth" +
    "?client_id=YOUR_CLIENT_ID" +
    "&redirect_uri=http://localhost:5500/google-callback.html" +
    "&response_type=token" +
    "&scope=email profile";
});

