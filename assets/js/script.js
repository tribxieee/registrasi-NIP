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

