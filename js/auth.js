function login() {
  const username = document.querySelector("input[type='text']").value;

  if (username === "") {
    alert("Enter username");
    return;
  }

  localStorage.setItem("user", username);
  window.location.href = "index.html";
}

function signup() {
  const username = document.querySelector("input[type='text']").value;

  if (username === "") {
    alert("Fill all fields");
    return;
  }

  alert("Account created successfully!");
  window.location.href = "login.html";
}
