document.addEventListener("DOMContentLoaded", function () {
  const form = document.forms["pw"];

  form.addEventListener("submit", validatePasswords);

  function validatePasswords(event) {
    event.preventDefault();

    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;

    let isValid = true;

    if (password1.length < 6) {
      document.getElementById("pw1_check").innerText =
        "Password must be at least 6 characters long";
      isValid = false;
    } else {
      document.getElementById("pw1_check").innerText = "";
    }

    if (password1 !== password2) {
      document.getElementById("pw2_check").innerText = "Passwords do not match";
      isValid = false;
    } else {
      document.getElementById("pw2_check").innerText = "";
    }

    if (isValid) {
      alert("Form submitted successfully!");
    }
  }
});
