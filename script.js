//contraints
var constraints = {
    firstName: {
      presence: true,
      length: {
        minimum: 2,
      },
      format: {
        pattern: "[a-z ]+",
        flags: "i",
        message: "can only contain letters"
      }
    },
    lastName: {
        presence: true,
        length: {
          minimum: 2,
        },
        format: {
          pattern: "[a-z ]+",
          flags: "i",
          message: "can only contain letters"
        }
    },
    mobile: {
        presence: true,
        length: {
            minimum: 10,
            maximum: 10,
        },
        format: {
            pattern: "[0-9]",
            message: "must be 10 digits"
        }
    },
    email: {
        presence: true,
        email: true
    }
}


var form = document.querySelector(".form");
  form.addEventListener("submit", function(ev) {
    ev.preventDefault();

    handleFormSubmit(form);
});


function handleFormSubmit(form, input) {
    var errors = validate(form, constraints);
    updateLocalStorage();
    window.location.href = "memberhome.html";
    // showErrors(form, errors || {});
    // if (!errors) {
    //   showSuccess();
    // }
}

function showErrors(form, errors) {
    var errorPrint = document.getElementsByClassName("errors");
    errorPrint.innerText = errors;
}

function addError(messages, error) {
    //create list of errors
    var errorPrint = document.getElementsByClassName("errors");
    errorPrint.innerHTML = errors;
}

function showSuccess() {
    //put stuff in local storage
    window.location.href = "memberhome.html";
}

function updateLocalStorage(){
    localStorage.clear();
    localStorage.setItem("0", document.getElementById("firstName").value);
    localStorage.setItem("1", document.getElementById("lastName").value);
    localStorage.setItem("2", document.getElementById("mobile").value);
    localStorage.setItem("3", document.getElementById("email").value);
    localStorage.setItem("4", document.getElementById("birthday").value);
    localStorage.setItem("5", document.getElementById("cardNumber").value);
    localStorage.setItem("6", document.getElementById("streetAddress").value);
    localStorage.setItem("7", document.getElementById("state").value);
    localStorage.setItem("8", document.getElementById("postcode").value);
}
