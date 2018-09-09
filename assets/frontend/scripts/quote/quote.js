// Company name validation
function company_name_validation(data) {
    var company_name = data.value;
    var nameresult = company_name.match(/^[a-zA-Z\s]+$/);
    if(company_name == '') {
        $("#company_name").addClass("invalid");
        data.setCustomValidity('Please enter a company name');
    }
    else if(nameresult == null) {
      $("#company_name").addClass("invalid");
      data.setCustomValidity('Please enter a valid company name');
    }
    else {
      data.setCustomValidity('');
      $("#company_name").removeClass("invalid").addClass("valid");
    }
}

function account_no_validation(data) {
    var account_no = data.value;
    var acc_no_result = account_no.match(/^[A-Z0-9]+$/);
    if(acc_no_result == null) {
      $("#account_no").addClass("invalid");
      data.setCustomValidity('Please enter a valid account no');
    }
    else {
      data.setCustomValidity('');
      $("#account_no").removeClass("invalid").addClass("valid");
    }
}

function address_validation(data) {
    var address = data.value;
    if(address == '') {
      $("#address").addClass("invalid");
        data.setCustomValidity('Please enter address');
    }
    else {
        data.setCustomValidity('');
        $("#address").removeClass("invalid").addClass("valid");
    }
}

function phone_no_valiadtion(data) {
    var phone_no = data.value;
    var phone_no_result = phone_no.match(/^[0-9]+$/);
    if(phone_no == ""){
      $("#phone_no").addClass("invalid");
        data.setCustomValidity('Please enter phone number');
    }
    else if(phone_no_result == null) {
      $("#phone_no").addClass("invalid");
        data.setCustomValidity('Please enter a valid phone number1');
    }
    else if(phone_no.length < 10 || phone_no.length > 15) {
      $("#phone_no").addClass("invalid");
        data.setCustomValidity('Please enter a valid phone number2');
    }
    else {
      data.setCustomValidity('');
      $("#phone_no").removeClass("invalid").addClass("valid");
    }
}

function fax_no_validation(data) {
  var fax_no = data.value;
  var fax_no_result = fax_no.match(/^[0-9]+$/);
    if(fax_no == ""){
      $("#fax_no").addClass("invalid");
        data.setCustomValidity('Please enter phone number');
    }
    else if(fax_no_result == null) {
      $("#fax_no").addClass("invalid");
        data.setCustomValidity('Please enter a valid phone number');
    }
    else if(fax_no.length < 10 || fax_no.length > 15) {
      $("#fax_no").addClass("invalid");
        data.setCustomValidity('Please enter a valid phone number');
    }
    else {
      data.setCustomValidity('');
      $("#fax_no").removeClass("invalid").addClass("valid");
    }
}

function email_validation(data) {
    var email = data.value;
    var emailresult = email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
    if(email == '') {
        $("#email").addClass("invalid");
        data.setCustomValidity('Enter an email address');
    }
    else if(emailresult == null) {
        $("#email").addClass("invalid");
        data.setCustomValidity('Enter a valid email address');
    }
    else {
      data.setCustomValidity('');
      $("#email").removeClass("invalid").addClass("valid");
    }
}

function authorized_by_validation(data) {
  var authorized_by = data.value;
  if(authorized_by == '') {
    $("#authorized_by").addClass("invalid");
    data.setCustomValidity('Enter valid data');
  }
  else {
    data.setCustomValidity('');
    $("#authorized_by").removeClass("invalid").addClass("valid");
  }
}

function order_no_validation(data) {
    var order_no = data.value;
    var order_no_result = order_no.match(/^[A-Z0-9]+$/);
    if(order_no_result == null) {
      $("#order_no").addClass("invalid");
      data.setCustomValidity('Please enter a valid order no');
    }
    else {
      data.setCustomValidity('');
      $("#order_no").removeClass("invalid").addClass("valid");
    }
}

function name_validation(data) {
    var name = data.value;
    var name_result = name.match(/^[a-zA-Z\s]+$/);
    if(name_result == null) {
      $("#name").addClass("invalid");
      data.setCustomValidity('Please enter a valid name');
    }
    else {
      data.setCustomValidity('');
      $("#name").removeClass("invalid").addClass("valid");
    }
}

function street_address_validation(data) {
    var street_address = data.value;
    if(street_address == '') {
      $("#street_address").addClass("invalid");
      data.setCustomValidity('Please enter street address');
    }
    else if(street_address == null) {
      $("#street_address").addClass("invalid");
      data.setCustomValidity('Enter street address');
    }
    else {
      data.setCustomValidity('');
      $("#street_address").removeClass("invalid").addClass("valid");
    }
}

function city_validation(data) {
    var city = data.value;
    var city_result = city.match(/^[a-zA-Z\s]+$/);
    if(city == '') {
      $("#city").addClass("invalid");
      data.setCustomValidity('Enter a city name');
    }
    else if(city_result == null) {
      $("#city").addClass("invalid");
      data.setCustomValidity('Enter valid city name');
    }
    else {
      data.setCustomValidity('');
      $("#city").removeClass("invalid").addClass("valid");
    }
}

function state_validation(data) {
    var state = data.value;
    var state_result = state.match(/^[a-zA-Z\s]+$/);
    if(state == '') {
      $("#state").addClass("invalid");
      data.setCustomValidity('Enter a state name');
    }
    else if(state_result == null) {
      $("#state").addClass("invalid");
      data.setCustomValidity('Enter valid state name');
    }
    else {
      data.setCustomValidity('');
      $("#state").removeClass("invalid").addClass("valid");
    }
}

function zipcode_validation(data) {
    var zip_code = data.value;
    var zip_code_result = zip_code.match(/^[0-9]+$/);
    if(zip_code == '') {
      $("#zip_code").addClass("invalid");
      data.setCustomValidity('Enter a zip code');
    }
    else if(zip_code_result == null) {
      $("#zip_code").addClass("invalid");
      data.setCustomValidity('Enter valid zip code');
    }
    else {
      data.setCustomValidity('');
      $("#zip_code").removeClass("invalid").addClass("valid");
    }
}

function diff_city_validation(data) {
    var city = data.value;
    var city_result = city.match(/^[a-zA-Z\s]+$/);
    if(city_result == null) {
      $("#diff_city").addClass("invalid");
      data.setCustomValidity('Enter valid city name');
    }
    else {
      data.setCustomValidity('');
      $("#diff_city").removeClass("invalid").addClass("valid");
    }
}

function diff_state_validation(data) {
    var state = data.value;
    var state_result = state.match(/^[a-zA-Z\s]+$/);
    if(state_result == null) {
      $("#diff_state").addClass("invalid");
      data.setCustomValidity('Enter valid state name');
    }
    else {
      data.setCustomValidity('');
      $("#diff_state").removeClass("invalid").addClass("valid");
    }
}

function diff_zipcode_validation(data) {
    var zip_code = data.value;
    var zip_code_result = zip_code.match(/^[0-9]+$/);
    if(zip_code_result == null) {
      $("#diff_zip_code").addClass("invalid");
      data.setCustomValidity('Enter valid zip code');
    }
    else {
      data.setCustomValidity('');
      $("#diff_zip_code").removeClass("invalid").addClass("valid");
    }
}


$('#send_quote').click(function(event) {
  var qty = document.getElementsByName('qty[]');
  var caterparts_no = document.getElementsByName('caterparts_no[]');
  var description = document.getElementsByName('description[]');
  var price = document.getElementsByName('price[]');
  var count = 0;
  for (var i = 0; i < qty.length; i++) {
    if(qty[i] !=""){
      count++;
    }
  }
  // if(qty.length != null+)
  for (var i = 0; i < count; i++) {
    if(qty[i] =="" || caterparts_no[i] == "" || description[i] == "" || price[i] ==""){
      console.log("check value");
      event.preventDefault();
    }
    else  {
      console.log("true");
    }

  }


});
