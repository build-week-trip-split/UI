document.getElementById("contactform").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  //get values
  let firstName = getInputValue("firstName");
  let lasttName = getInputValue("lastName");
  let phone = getInputValue("phone");
  let email = getInputValue("email");
  let message = getInputValue("testArea");

  console.log(firstName);
}
// function gets form values
function getInputValue(id) {
  return document.getElementById(id).value;
}
