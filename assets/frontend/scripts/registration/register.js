/**
*
* Registration - User
*
*/

// Check username availability
  $('#chkavailbut').click(function() {
    // alert("h0");
    console.log("trigger");
    var token = $('#token').val();
    var username = $('#username').val();
    if(username ==  '') {
      sweetAlert("Oops...", "Please provide a username.!", "error");
    }
    else {
      $.ajax({
                 url: "/caterpartsonthefly/user/check_username",
                 method: "POST",
                 data: {
                   _token : token,
                   username: username
                 },
                 success: function(result) {
                   if(result.status == true) {
                     document.getElementById('availability').style.color = '#000';
                     document.getElementById('availability').innerHTML = " &nbsp;&nbsp;&nbsp;" + result.message;
                     document.getElementById('status').value = 1;
                   }
                   else {
                     document.getElementById('availability').style.color = '#F00';
                     document.getElementById('availability').innerHTML = " &nbsp;&nbsp;&nbsp;" + result.message;
                     document.getElementById('status').value = 0;
                   }
                 }
      });
    }

  });


// Register form submit event
  $('#userRegisterForm').submit(function(event) {
    var username_status = $('#status').val();
    if(username_status == 1) {
      return true;
    }
    else {
      sweetAlert("Oops...", "Please make sure that the username is available!", "error");
      event.preventDefault();
      return false;
    }
  });
