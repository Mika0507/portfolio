let emailAddress = 'alonsoperalbelen@gmail.com'

function toggleEmail() {
    let email = document.getElementById("email");
    if (email.style.display === "none") {
      email.textContent = emailAddress;
      email.style.display = "block";
    } else {
      email.textContent = '';
      email.style.display = "none";
    }
  }