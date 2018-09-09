/*
*
* Show manufacturer list
*
*/

$(document).ready(function() {
  var token = $('#token').val();
  ajax_mnftr(token);
});

// Function to show the available manufacturers in the home page
function ajax_mnftr(token) {
  $.ajax({
             url: "/caterpartsonthefly/user/ajax_manufacturer",
             method: "POST",
             data: {
               _token : token
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

// Function to show the model available for the selected manufacturer
function ajax_model() {
  var manufacturer = document.getElementById("manufacturer");
  var manufacturer_id = manufacturer.options[manufacturer.selectedIndex].value;
  var token = $('#token').val();
  console.log("manufacturer id= "+ manufacturer_id);
  $.ajax({
             url: "/caterpartsonthefly/user/ajax_model",
             method: "POST",
             data: {
               _token : token,
               id: manufacturer_id
             },
             success: function(result) {
              if(result.status == true) {
                 var model = document.getElementById('model');
                 var model_length = model.length;
                 for(var i=0; i<=model_length; i++) {
                   model.remove(model.i);
                 }

                 var select = document.createElement('option');
                 select.value = '';
                 select.innerHTML = 'Select Model';
                 model.appendChild(select);

                 for (var i = 0; i < result.model.length; i++) {
                   var opt = document.createElement('option');
                   opt.value = result.model[i].model_id;
                   opt.innerHTML = result.model[i].model_name;
                   model.appendChild(opt);
                 }
              }
              else {
                var model = document.getElementById("model");
                   var model_length = model.length;
                   for(var i=0; i<=model_length; i++) {
                     model.remove(model.i);
                   }

                   var opt = document.createElement('option');
                   opt.value = '';
                   opt.innerHTML = 'Select Model';
                   model.appendChild(opt);
              }


             }
       });
}

// Function to show available manual type according to selected manufacturer & model
  function ajax_manual_type() {
    console.log("M Type Trigger");
    var token = $('#token').val();
    var manufacturer = document.getElementById("manufacturer");
    var manufacturer_id = manufacturer.options[manufacturer.selectedIndex].value;
    console.log("manufacturer ID= " + manufacturer_id);
    var model = document.getElementById("model");
    var model_id = model.options[model.selectedIndex].value;
    console.log("Model ID= " + model_id);
    $.ajax({
               url: "/caterpartsonthefly/user/ajax_manual_type",
               method: "POST",
               data: {
                 _token : token,
                 manufacturer_id: manufacturer_id,
                 model_id: model_id
               },
               success: function(result) {
                 console.log("Result" + result);
                 if(result.status == true) {
                  //  console.log("In");
                   var type = document.getElementById('manual_type');
                   var type_length = type.length;
                   for(var i=0; i<=type_length; i++) {
                     type.remove(type.i);
                   }
                   var replace = result.replace;
                   console.log("REPLACE CHEKER");
                   console.log(replace[0]);
                  //  console.log("REPAPC END");

                   var select = document.createElement('option');
                   select.value = '';
                   select.innerHTML = 'Select Document Type';
                   type.appendChild(select);

                   for (var i = 0; i < result.manual.length; i++) {
                     var opt = document.createElement('option');
                     opt.value = result.manual[i].manual_type;
                     opt.innerHTML = result.manual[i].manual_type_name;
                     type.appendChild(opt);
                   }

                   if(replace != undefined || replace != '') {
                     var rpt = document.createElement('option');
                     rpt.value = '100';
                     rpt.innerHTML = replace[0];
                     type.appendChild(rpt);
                   }
                   else {

                   }

                 }
                 else {
                   var type = document.getElementById('manual_type');
                   var type_length = type.length;

                   for(var i=0; i<=type_length; i++) {
                     type.remove(type.i);
                   }
                   var select = document.createElement('option');
                   select.value = '';
                   select.innerHTML = 'No manuals found..';
                   type.appendChild(select);
                 }
               }
         });
  }

// Open document in a new window
  function get_manual() {
    var token = $('#token').val();
    var manufacturer = document.getElementById("manufacturer");
    var manufacturer_id = manufacturer.options[manufacturer.selectedIndex].value;
    console.log("manufacturer ID= " + manufacturer_id);
    var model = document.getElementById("model");
    var model_id = model.options[model.selectedIndex].value;
    var type = document.getElementById("manual_type");
    var manual_type = type.options[type.selectedIndex].value;
    console.log("manual =" + manual_type);

      $.ajax({
                 url: "/caterpartsonthefly/user/ajax_manual",
                 method: "POST",
                 async:    false,
                 data: {
                   _token : token,
                   manufacturer_id: manufacturer_id,
                   model_id: model_id,
                   manual_type: manual_type
                 },
                 success: function(result) {
                   if(result.status == true) {

                     if(result.replacement == true) {
                       var data = result.parts.data;
                       var size = data.length;
                       console.log("Size =" + size);
                       window.location = "/caterpartsonthefly/manufacturer/" + result.manufacturer_name;
                       // To show number of products
                       if(size == 1) {
                         product = size + " Product";
                         document.getElementById('product_count').innerHTML = product;
                       }
                       else {
                         product = size + " Products";
                         document.getElementById('product_count').innerHTML = product;
                        //  $('#load_more_parts').hide();
                        //  $('#load_more_parts').html('No products available');
                       }

                       // to set height of container showing models
                       if(model_count == 1) {
                         document.getElementById('model_container').style.height = "37px";
                         $('#view_more_model').hide();
                       }
                       if(model_count == 2) {
                         document.getElementById('model_container').style.height = "60px";
                         $('#view_more_model').hide();
                       }
                       if(model_count == 3) {
                         document.getElementById('model_container').style.height = "80px";
                         $('#view_more_model').hide();
                       }
                       if(model_count == 4) {
                         document.getElementById('model_container').style.height = "110px";
                         $('#view_more_model').hide();
                       }
                       if(model_count == 5) {
                         document.getElementById('model_container').style.height = "138px";
                         $('#view_more_model').hide();
                       }
                       else if(model_count >= 6) {
                         document.getElementById('model_container').style.height = "138px";
                       }
                       else {
                         // do nothing
                       }

                       // to set height of container showing parts type
                       if(parts_typeCount == 1) {
                         document.getElementById('parts_type_container').style.height = "37px";
                         $('#view_more_parts_type').hide();
                       }
                       else if(parts_typeCount == 2) {
                         document.getElementById('parts_type_container').style.height = "60px";
                         $('#view_more_parts_type').hide();
                       }
                       else if(parts_typeCount == 3) {
                         document.getElementById('parts_type_container').style.height = "80px";
                         $('#view_more_parts_type').hide();
                       }
                       else if(parts_typeCount == 4) {
                         document.getElementById('parts_type_container').style.height = "110px";
                         $('#view_more_parts_type').hide();
                       }
                       else if(parts_typeCount == 5) {
                         document.getElementById('parts_type_container').style.height = "138px";
                         $('#view_more_parts_type').hide();
                       }
                       else if(parts_typeCount >= 6) {
                         document.getElementById('parts_type_container').style.height = "138px";
                       }
                       else {
                         // do nothing
                       }

                       var content = '';
                       for(var i=0; i < size; i++) {
                         if(data[i].sess != 1) {
                           content += `
                           <div class="col-md-4 col-sm-6">
                              <div class="productbox">
                                <div class="prodname">` +
                                  `<a class="link_black" target="_blank" href="/caterpartsonthefly/parts_details/`+ data[i].parts_id +`">` + data[i].parts_title
                                +`</a> </div>
                                <div class="prodimage">
                                  <img src="/caterpartsonthefly/assets/img/parts/`+ data[i].parts_image  +`" class="img-responsive" alt="">
                                </div>
                                <div class="modelno">
                                  Model: `+ data[i].model_name
                                +` </div>
                                <div class="prodids">
                                  Caterpartsonthefly #:`+ data[i].parts_caterparts_number +` <br/>
                                  Mfr Pt #:`+ data[i].parts_manufacturer_number +`<br/>
                                  Mfr: `+ data[i].manufacturer_name  + `<br/>
                                </div>
                                <div class="quantitydiv">
                                  Quantity: `+ data[i].parts_quantity
                                +` </div>
                                <div class="pricediv1">
                                  <span> `+ data[i].country + ` ` + data[i].parts_price + `</span><br/> `+
                                  data[i].country  + ` ` + data[i].parts_list_price +`</div>
                                  <div class="saveitem">
                                  Save `+ data[i].discount_per
                                +`% </div>
                                <div class="greendiv">
                                <span>`+ data[i].parts_status_name +`</span>
                                </div>
                                <div class="clearfix"></div>
                                <hr/>
                                <div class="butdiv">
                                QTY:
                                  <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                                  <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                                  <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                                </div>
                              </div>
                            </div>`;
                         }
                         else {
                           content += `
                           <div class="col-md-4 col-sm-6">
                              <div class="productbox">
                                <div class="prodname">` +
                                  `<a class="link_black" target="_blank" href="/caterpartsonthefly/parts_details/`+ data[i].parts_id +`">` + data[i].parts_title
                                +`</a> </div>
                                <div class="prodimage">
                                  <img src="/caterpartsonthefly/assets/img/parts/`+ data[i].parts_image  +`" class="img-responsive" alt="">
                                </div>
                                <div class="modelno">
                                  Model: `+ data[i].model_name
                                +` </div>
                                <div class="prodids">
                                Caterpartsonthefly #:`+ data[i].parts_caterparts_number +` <br/>
                                Mfr Pt #:`+ data[i].parts_manufacturer_number +`<br/>
                                Mfr: `+ data[i].manufacturer_name  + `<br/>
                                </div>
                                <div class="quantitydiv">
                                  Quantity: `+ data[i].parts_quantity
                                +` </div>
                                <div class="pricediv1">
                                  <span> `+ data[i].country + ` ` + data[i].parts_price + `</span><br/> `+
                                  data[i].country  + ` ` + data[i].parts_list_price +`</div>
                                  <div class="saveitem">
                                  Save `+ data[i].discount_per
                                +`% </div>
                                <div class="greendiv">
                                <span>`+ data[i].parts_status_name +`</span>
                                </div>
                                <div class="clearfix"></div>
                                <hr/>
                                <div class="butdiv">
                                QTY:
                                  <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                                  <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                                  <a href="/caterpartsonthefly/cart" class="btn in_cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></a>
                                </div>
                              </div>
                            </div>`;
                         }

                            }
                       parts_content.empty();
                       parts_content.append(content);
                     }

                     else {
                       var file_name = result.manual[0].manual_file;
                       console.log("file " + file_name);
                       var location = 'assets/manual/';
                       var manufacturer = result.manufacturer;
                       var url = location+manufacturer+'/'+file_name;
                       console.log("URL =" + url);
                       var d = window.open();
                       d.location = url;
                     }

                   }
                 }
      });
}

// Feedback modal
$('.butfeedback').click(function() {
  var token = $('#token').val();
  var comment = $('#comment').val();
  var email = $('#email').val();
  console.log("comment = " + comment);
  console.log("email = " + email);

  // $('.feedbackContent div').html('Please wait...');
  $('.feedbackContent .graybox').html('');
  $('.feedbackContent .graybox').html('Please wait...');
  // elements.remove();
  $.ajax({
             url: "/caterpartsonthefly/user/send_feedback_modal",
             method: "POST",
             data: {
               _token : token,
               comment: comment,
               email: email,
             },
             success: function(result) {
               if(result.status == true) {
                 $('.feedbackContent .graybox').html(result.message);
               }
               else {
                 $('.feedbackContent .graybox').html(result.message);
               }
             }
   });
});

$('#myModal').on('hidden.bs.modal', function () {
 location.reload();
})
