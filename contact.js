document.getElementById("contactform").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  //get values
  let firstName = getInputValue("firstName");
  let lastName = getInputValue("lastName");
  let phone = getInputValue("phone");
  let email = getInputValue("email");
  let message = getInputValue("testArea");

  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(message);
  document.getElementById("contactform").reset();
}

// function gets form values
function getInputValue(id) {
  return document.getElementById(id).value;
}
