document.addEventListener("DOMContentLoaded", function () {
  const btnGenerate = document.getElementById("generate-password");
  const getLength = document.getElementById("length");
  const getPassword = document.getElementById("password");
  const getErrorMsg = document.querySelector(".msg-error");
  btnGenerate.addEventListener("click", function () {
    function showError(message) {
      getErrorMsg.textContent = message;
      getErrorMsg.style.opacity = 1;
      setTimeout(() => {
        getErrorMsg.style.opacity = 0;
      }, 3000);
    }
    function showSuccess(message) {
      getErrorMsg.textContent = message;
      getErrorMsg.style.opacity = 1;
      getErrorMsg.style.color = "green";
      setTimeout(() => {
        getErrorMsg.style.opacity = 0;
        getErrorMsg.style.color = "red";
      }, 3000);
    }
    if (getLength.value < 4) {
      // getErrorMsg.innerHTML='<b>Length must be Greater than 4</b>'
      showError("Length must be Greater than 4");
    } else if (getLength.value >= 100000) {
      showError("Please Choose a Sensible Length");
    } else {
      console.log("Working !");
      const length = parseInt(getLength.value);
      const charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|:;<>,.?/~";
      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
      getPassword.value = password;
      // prevPassword.textContent=password
      showSuccess("Password Generated Successfully !");
    }
  });
});
