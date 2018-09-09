/*
*
* currency convertion
*
*/

$('#flagstrap2').change(function() {
  // var currency = $('#flagstrap2').val();
  var token=$('#token').val();
  var currency = $("#flagstrap2").find("select").val();

  ajax_currency(token,currency);
  // console.log("cu"+currency);
});

// Function to show the available manufacturers in the home page
function ajax_currency(token,currency) {
  console.log('manufacturer listing triggerghgh');
  $.ajax({
             url: "/caterpartsonthefly/user/ajax_currency",
             method: "POST",
             data: {
               _token : token,
               currency : currency
             },
             success: function(result) {
              //  console.log("RETURN DATA =" + result);
               if(result.status == true) {
                 var manufacturer = document.getElementById('manufacturer');
                 for (var i = 0; i < result.manufacturer.length; i++) {
                  //  console.log("ID =" + result.manufacturer[i].manufacturer_id);
                   var opt = document.createElement('option');
                   opt.value = result.manufacturer[i].manufacturer_id;
                   opt.innerHTML = result.manufacturer[i].manufacturer_name;
                   manufacturer.appendChild(opt);
                 }
               }
               else {
                 console.log("No manufacturers");
               }
             }
       });
}
