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


var form = document.querySelector("form");
  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    handleFormSubmit(form);
});

function handleFormSubmit(form, input) {
    var errors = validate(form, constraints);
    showErrors(form, errors || {});
    if (!errors) {
      showSuccess();
    }
}

function showErrors(form, errors) {
    var errorPrint = document.getElementsByClassName("errors");

}

function addError(messages, error) {
    //create list of errors
}

function showSuccess() {
    //put stuff in local storage
    window.location.href = "memberhome.html";
}
