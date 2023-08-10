function onChange() {
    const password = document.querySelector("input[name=pass]");
    const confirm = document.querySelector("input[name=passcheck]");
    if (confirm.value === password.value) {
      confirm.setCustomValidity("");
    } else {
      confirm.setCustomValidity("Passwords do not match");
    }
  }
  