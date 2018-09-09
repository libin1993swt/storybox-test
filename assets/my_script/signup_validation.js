// Name
  function name_validation(data) {
    var name = data.value;
    var name_result = name.match(/^[a-zA-Z\s]+$/);
    if(name == "") {
        data.setCustomValidity('Enter name');
        $("#name").addClass("invalid");
    }
    else if(name_result == null) {
      data.setCustomValidity('Name should be alphabets.');
        $("#name").addClass("invalid");
    }
    else {
      data.setCustomValidity('');
      $("#name").removeClass("invalid").addClass("valid");
    }
  }

// Email
  function email_validation(data) {
    var email = data.value;
    var email_result = email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
    if(email == "") {
        data.setCustomValidity('Enter Email');
        $("#email").addClass("invalid");
    }
    else if(email_result == null) {
      data.setCustomValidity('Enter a valid Email.');
        $("#email").addClass("invalid");
    }
    else {
      data.setCustomValidity('');
      $("#email").removeClass("invalid").addClass("valid");
    }
  }

// New password
  function new_password_validation(data) {
    var new_pass = data.value;
    var len = new_pass.length;
    if(new_pass == "") {
        data.setCustomValidity('Enter New Password');
        $("#password").addClass("invalid");
    }
    else if(len < 6) {
        data.setCustomValidity('Password atleast contains 6 characters.');
        $("#password").addClass("invalid");
    }
    else {
      data.setCustomValidity('');
      $("#password").removeClass("invalid").addClass("valid");
    }
  }

// Confirm password
  function confirm_password_validation(data) {
    var confirm_pass = data.value;
    var len = confirm_pass.length;
    var new_pass = $("#password").val();
    if(confirm_pass == "") {
        data.setCustomValidity('Enter Confirm Password');
        $("#confirm_password").addClass("invalid");
    }
    else if(len < 6) {
        data.setCustomValidity('Password atleast contains 6 characters.');
        $("#confirm_password").addClass("invalid");
    }
    else if(new_pass != confirm_pass) {
      data.setCustomValidity('New and Confirm password does not match.');
        $("#confirm_password").addClass("invalid");
    }
    else {
      data.setCustomValidity('');
      $("#confirm_password").removeClass("invalid").addClass("valid");
    }
  }
