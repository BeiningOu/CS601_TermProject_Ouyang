function get(id) {
  return document.getElementById(id);
}

let menuLabel = get("menu-label");
let navBar = get("nav-bar");

navBar.style.display = "none";

menuLabel.onclick = function () {
  if (navBar.style.display == "block") {
    navBar.style.display = "none";
  } else {
    navBar.style.display = "block";
  }
};

let yourName = get("your-name");
let yourEmail = get("your-email");
let yourMessage = get("your-message");
let error = get("error");

// validation code:
form.addEventListener("submit", validate);
function validate(event) {
  let messages = [];
  if (
    yourName.value.length < 2 ||
    yourEmail.value.length < 2 ||
    yourMessage.value.length < 2
  ) {
    messages.push("A minimum length of two characters required in fields");
  }

  let pattern = /^[A-Za-z]+[\s\S]*[A-Za-z]+$/;
  if (!yourName.value.match(pattern)) {
    messages.push("Only alpha characters are allowed in names");
  }

  if (messages.length > 0) {
    event.preventDefault();
    error.innerText = "Error: " + messages.join("; ") + ".";
  }
}
