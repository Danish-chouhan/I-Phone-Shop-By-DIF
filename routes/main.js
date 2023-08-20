const fullname = document.getElementById("fname");
const email = document.getElementById("email");
const txtarea = document.getElementById("txtArea");
const submit = document.getElementById("btn");
let flag = 1;

function validateForm() {
  if (fullname.value == "") {
    fullname.style.border = "1px solid red";
    fullname.setAttribute("placeholder","ENTER YOUR FULL-NAME HERE")
  } else if (fullname.value !== "") {
    fullname.style.border = "1px solid green";
  }

  if (email.value == "") {
    email.style.border = "1px solid red";
    email.setAttribute("placeholder","ENTER YOUR Email HERE")
  } else if (email.value !== "") {
    email.style.border = "1px solid green";
  }
  if (txtarea.value == "") {
    txtarea.style.border = "1px solid red";
    txtarea.setAttribute("placeholder","ENTER YOUR MESSAGE HERE")
  } else if (txtarea.value !== "") {
    txtarea.style.border = "1px solid green";
  }

  const greenvalid =
    fullname.style.border === "1px solid green" &&
    email.style.border === "1px solid green" &&
    txtarea.style.border === "1px solid green"
      ? (flag = 1)
      : (flag = 0);
  if (flag) {
    return true;
  } else {
    return false;
  }
}
