/*
*
*  Product listing page  - View less & view more
*
*/

// $(document).ready(function() {
  document.getElementById('manufacturer_desc_more').style.display = "none";
// });


// View more
$('#view_more').click(function() {
  console.log("click trigger");
  document.getElementById('manufacturer_desc_less').style.display = "none";
  document.getElementById('manufacturer_desc_more').style.display = "block";
});

// View less
$('#view_less').click(function() {
  document.getElementById('manufacturer_desc_less').style.display = "block";
  document.getElementById('manufacturer_desc_more').style.display = "none";
});
//
// // Filter model names
// function filter_model() {
//     // Declare variables
//     var input, filter, ul, li, a, i;
//     input = document.getElementById('model_key');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("model_list");
//     li = ul.getElementsByTagName('li');
//
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }
//
// // Filter parts types
// function filter_parts_type() {
//     // Declare variables
//     var input, filter, ul, li, a, i;
//     input = document.getElementById('parts_type_key');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("parts_type_list");
//     li = ul.getElementsByTagName('li');
//
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }
 $(document).ready(function() {

   var view_more_model = document.getElementById('view_more_model');
   view_more_model.style.display = 'block';

   var view_more_parts_type = document.getElementById('view_more_parts_type');
   view_more_parts_type.style.display = 'block';

   var view_more_price_range = document.getElementById('view_more_price_range');
   view_more_price_range.style.display = 'block';
 });

// View more models button - show the scoller
$('#view_more_model').click(function() {

  $("#model_container").mCustomScrollbar("update");
  var view_more_model = document.getElementById('view_more_model');
  var view_less_model = document.getElementById('view_less_model');

  if(view_more_model.style.display == 'block') {
    view_more_model.style.display = 'none';

    $("#model_container").mCustomScrollbar({
      scrollButtons:{enable:false},
      scrollbarPosition:"inside"
    });
    view_less_model.style.display = 'block';
  }
});

// View less models - hide the scroller
$('#view_less_model').click(function() {
  $("#model_container").mCustomScrollbar("disable");

  var view_more_model = document.getElementById('view_more_model');
  var view_less_model = document.getElementById('view_less_model');

  if(view_more_model.style.display == 'none') {
    view_more_model.style.display = 'block';
  }

  if(view_less_model.style.display = 'block') {
    view_less_model.style.display = 'none';

  }
});

// View more parts type - show the scroller
$('#view_more_parts_type').click(function() {
  $("#parts_type_container").mCustomScrollbar("update");

  var view_more_parts_type = document.getElementById('view_more_parts_type');
  var view_less_parts_type = document.getElementById('view_less_parts_type');

  if(view_more_parts_type.style.display == 'block') {
    view_more_parts_type.style.display = 'none';

    $("#parts_type_container").mCustomScrollbar({
      scrollButtons:{enable:false},
      scrollbarPosition:"inside"
    });
    view_less_parts_type.style.display = 'block';
  }
});

// View liess parts type - hide the scroller
$('#view_less_parts_type').click(function() {

  $("#parts_type_container").mCustomScrollbar("disable");

  var view_more_parts_type = document.getElementById('view_more_parts_type');
  var view_less_parts_type = document.getElementById('view_less_parts_type');

  if(view_more_parts_type.style.display == 'none') {
    view_more_parts_type.style.display = 'block';
  }
  if(view_less_parts_type.style.display = 'block') {
    view_less_parts_type.style.display = 'none'
  }
});

// View more price range - show the scroller
$('#view_more_price_range').click(function() {
  console.log("Click trigger");
    $("#price_range_container").mCustomScrollbar("update");
  var view_more_price_range = document.getElementById('view_more_price_range');
  var view_less_price_range = document.getElementById('view_less_price_range');


  if(view_more_price_range.style.display == 'block') {
    view_more_price_range.style.display = 'none';

    $("#price_range_container").mCustomScrollbar({
      scrollButtons:{enable:false},
      scrollbarPosition:"inside"
    });
    view_less_price_range.style.display = 'block';
  }
});

// View less price range - hide the scroller
$('#view_less_price_range').click(function() {

  $("#price_range_container").mCustomScrollbar("disable");

  var view_more_price_range = document.getElementById('view_more_price_range');
  var view_less_price_range = document.getElementById('view_less_price_range');

  if(view_more_price_range.style.display == 'none') {
    view_more_price_range.style.display = 'block';
  }
  if(view_less_price_range.style.display = 'block') {


    view_less_price_range.style.display = 'none';
  }
});


// Show parts by manufacturer on page load
$(document).ready(function() {
  var token = $('#token').val();
  var mnfctr = $('#view_mftr').val();
  var parts_content = $('#parts_content');
  var filterCount = $('#filterCount').val();
  var sort_by = $('#sort_by').val();
  var model_count = $('#modelCount').val();
  var parts_typeCount = $('#parts_typeCount').val();
  console.log("Model count =" + model_count);
  $.ajax({
             url: "/caterpartsonthefly/manufacturer/ajax_manufacturer_parts",
             method: "POST",
             data: {
               _token : token,
               filterCount: filterCount,
               sort_by: sort_by,
               mnfctr: mnfctr,
             },
             success: function(result) {
               console.log("Inisde error");
               var data = result.parts.data;
               var size = data.length;
               console.log("Size =" + size);
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
                 document.getElementById('model_container').style.height = "38px";
                 $('#view_more_model').hide();
               }
               if(model_count == 2) {
                 document.getElementById('model_container').style.height = "55px";
                 $('#view_more_model').hide();
               }
               if(model_count == 3) {
                 document.getElementById('model_container').style.height = "85px";
                 $('#view_more_model').hide();
               }
               if(model_count == 4) {
                 document.getElementById('model_container').style.height = "115px";
                 $('#view_more_model').hide();
               }
               if(model_count == 5) {
                 document.getElementById('model_container').style.height = "143px";
                 $('#view_more_model').hide();
               }
               else if(model_count >= 6) {
                 document.getElementById('model_container').style.height = "143px";
               }
               else {
                 // do nothing
               }

               // to set height of container showing parts type
               if(parts_typeCount == 1) {
                 document.getElementById('parts_type_container').style.height = "38px";
                 $('#view_more_parts_type').hide();
               }
               else if(parts_typeCount == 2) {
                 document.getElementById('parts_type_container').style.height = "55px";
                 $('#view_more_parts_type').hide();
               }
               else if(parts_typeCount == 3) {
                 document.getElementById('parts_type_container').style.height = "85px";
                 $('#view_more_parts_type').hide();
               }
               else if(parts_typeCount == 4) {
                 document.getElementById('parts_type_container').style.height = "115px";
                 $('#view_more_parts_type').hide();
               }
               else if(parts_typeCount == 5) {
                 document.getElementById('parts_type_container').style.height = "143px";
                 $('#view_more_parts_type').hide();
               }
               else if(parts_typeCount >= 6) {
                 document.getElementById('parts_type_container').style.height = "143px";
               }
               else {
                 // do nothing
               }

               var content = '';
               for(var i=0; i < size; i++) {
                 if(data[i].sess != 1) {
                   if(data[i].parts_quantity == 0) {
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
                          <div class="status_red">
                          <span>`+ data[i].temp_status +`</span>
                          </div>
                          <div class="clearfix"></div>
                          <hr/>
                          <div class="butdiv">
                          QTY:
                            <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                            <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                            <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                            <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                          </div>
                        </div>
                      </div>`;
                   }
                   else if(data[i].parts_status_name == 'In Stock') {
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
                          <div class="status_green">
                          <span>`+ data[i].parts_status_name +`</span>
                          </div>
                          <div class="clearfix"></div>
                          <hr/>
                          <div class="butdiv">
                          QTY:
                            <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                            <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
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
                          <div class="status_blue">
                          <span>`+ data[i].parts_status_name +`</span>
                          </div>
                          <div class="clearfix"></div>
                          <hr/>
                          <div class="butdiv">
                          QTY:
                            <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                            <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                            <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                            <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                          </div>
                        </div>
                      </div>`;
                   }

                 }
                 else {
                   if(data[i].parts_quantity == 0) {
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
                          <div class="status_red">
                          <span>`+ data[i].temp_status +`</span>
                          </div>
                          <div class="clearfix"></div>
                          <hr/>
                          <div class="butdiv">
                          QTY:
                            <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                            <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                            <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                            <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                          </div>
                        </div>
                      </div>`;
                   }
                   else if(data[i].parts_status_name == 'In Stock') {
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
                          <div class="status_green">
                          <span>`+ data[i].parts_status_name +`</span>
                          </div>
                          <div class="clearfix"></div>
                          <hr/>
                          <div class="butdiv">
                          QTY:
                            <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                            <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
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
                          <div class="status_blue">
                          <span>`+ data[i].parts_status_name +`</span>
                          </div>
                          <div class="clearfix"></div>
                          <hr/>
                          <div class="butdiv">
                          QTY:
                            <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                            <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                            <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                            <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                          </div>
                        </div>
                      </div>`;
                   }
                 }
               }
               parts_content.append(content);
             }
  });
});

// Show parts by filtering selected model (first choice)
$('.model_change').click(function(event) {
  console.log("Value =" + this.value);
  var token = $('#token').val();
  var model = this.value;
  var filterCount = $('#filterCount').val();
  var sort_by = $('#sort_by').val();
  var parts_type = '';
  var price_range = '';
  var parts_content = $('#parts_content');
  var mnfctr = $('#view_mftr').val();

  var model_count = $('#modelCount').val();
  var parts_typeCount = $('#parts_typeCount').val();

  $.ajax({
             url: "/caterpartsonthefly/user/model_change",
             method: "POST",
             data: {
               _token : token,
               model: model,
               filterCount: filterCount,
               sort_by: sort_by,
               parts_type: parts_type,
               price_range: price_range,
               mnfctr: mnfctr
             },
             success: function(result) {
               var count = result.count;
               console.log("Count =" + count);
               if(result.status == true) {
                 var data = result.parts.data;
                 var size = data.length;
                 if(size == 1) {
                   product = size + " Product";
                   document.getElementById('product_count').innerHTML = product;
                 }
                 else {
                   product = size + " Products";
                   document.getElementById('product_count').innerHTML = product;
                 }

                 var content = '';
                 parts_content.empty();
                 for(var i=0; i < size; i++) {
                   if(data[i].sess != 1) {
                     if(data[i].parts_quantity == 0) {
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
                            <div class="status_red">
                            <span>`+ data[i].temp_status +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }
                     else if(data[i].parts_status_name == 'In Stock') {
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
                            <div class="status_green">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
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
                            <div class="status_blue">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }

                   }
                   else {
                     if(data[i].parts_quantity == 0) {
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
                            <div class="status_red">
                            <span>`+ data[i].temp_status +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }
                     else if(data[i].parts_status_name == 'In Stock') {
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
                            <div class="status_green">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
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
                            <div class="status_blue">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }
                   }
                 }

                 parts_content.append(content);
                 if(Number(count) == 0) {
                   $('#load_more').remove();
                   var content = '<div class="col-md-12 col-sm-12"><span class="text-center">No parts to display</span></div>';
                   parts_content.append(content);
                 }

               }
             }
      });

});

// Show parts according to selected parts type (first choice)
$('.parts_type_change').click(function(event) {
  console.log("parts type ID =" + this.value);
  var token = $('#token').val();
  var model = '';
  var filterCount = $('#filterCount').val();
  var sort_by = $('#sort_by').val();
  var parts_type = this.value;
  var parts_content = $('#parts_content');
  var price_range = '';
  var mnfctr = $('#view_mftr').val();

  var model_count = $('#modelCount').val();
  var parts_typeCount = $('#parts_typeCount').val();
  $.ajax({
             url: "/caterpartsonthefly/user/model_change",
             method: "POST",
             data: {
               _token : token,
               model: model,
               filterCount: filterCount,
               sort_by: sort_by,
               parts_type: parts_type,
               price_range: price_range,
               mnfctr: mnfctr
             },
             success: function(result) {
               var count = result.count;
               console.log("Count =" + count);
               if(result.status == true) {
                 var data = result.parts.data;
                 var size = data.length;
                 if(size == 1) {
                   product = size + " Product";
                   document.getElementById('product_count').innerHTML = product;
                 }
                 else {
                   product = size + " Products";
                   document.getElementById('product_count').innerHTML = product;
                 }

                 var content = '';
                 parts_content.empty();
                 for(var i=0; i < size; i++) {
                   if(data[i].sess != 1) {
                     if(data[i].parts_quantity == 0) {
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
                            <div class="status_red">
                            <span>`+ data[i].temp_status +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }
                     else if(data[i].parts_status_name == 'In Stock') {
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
                            <div class="status_green">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
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
                            <div class="status_blue">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }

                   }
                   else {
                     if(data[i].parts_quantity == 0) {
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
                            <div class="status_red">
                            <span>`+ data[i].temp_status +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }
                     else if(data[i].parts_status_name == 'In Stock') {
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
                            <div class="status_green">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
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
                            <div class="status_blue">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }
                   }
                 }

                 parts_content.append(content);
                 if(Number(count) == 0) {
                   $('#load_more').remove();
                   var content = '<div class="col-md-12 col-sm-12"><span class="text-center">No parts to display</span></div>';
                   parts_content.append(content);
                 }

               }
             }
      });

});


// Show parts according to selected price range (first choice)
$('.price_range_change').click(function(event) {
  console.log("parts type ID =" + this.value);
  var token = $('#token').val();
  var model = '';
  var filterCount = $('#filterCount').val();
  var sort_by = $('#sort_by').val();
  var parts_type = '';
  var price_range = this.value;
  var parts_content = $('#parts_content');
  var mnfctr = $('#view_mftr').val();

  var model_count = $('#modelCount').val();
  var parts_typeCount = $('#parts_typeCount').val();

  $.ajax({
             url: "/caterpartsonthefly/user/model_change",
             method: "POST",
             data: {
               _token : token,
               model: model,
               filterCount: filterCount,
               sort_by: sort_by,
               parts_type: parts_type,
               price_range: price_range,
               mnfctr: mnfctr
             },
             success: function(result) {
               var count = result.count;
               console.log("Count =" + count);
               if(result.status == true) {
                 var data = result.parts.data;
                 var size = data.length;
                 if(size == 1) {
                   product = size + " Product";
                   document.getElementById('product_count').innerHTML = product;
                 }
                 else {
                   product = size + " Products";
                   document.getElementById('product_count').innerHTML = product;
                 }


                 var content = '';
                 parts_content.empty();
                 for(var i=0; i < size; i++) {
                   if(data[i].sess != 1) {
                     if(data[i].parts_quantity == 0) {
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
                            <div class="status_red">
                            <span>`+ data[i].temp_status +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }
                     else if(data[i].parts_status_name == 'In Stock') {
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
                            <div class="status_green">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
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
                            <div class="status_blue">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }

                   }
                   else {
                     if(data[i].parts_quantity == 0) {
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
                            <div class="status_red">
                            <span>`+ data[i].temp_status +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }
                     else if(data[i].parts_status_name == 'In Stock') {
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
                            <div class="status_green">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
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
                            <div class="status_blue">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }
                   }
                 }

                 parts_content.append(content);
                 if(Number(count) == 0) {
                   $('#load_more').remove();
                   var content = '<div class="col-md-12 col-sm-12"><span class="text-center">No parts to display</span></div>';
                   parts_content.append(content);
                 }

               }
             }
      });

});

// Show parts according to the selected result per page (12, 24, 36, 48, 60)
$('#filterCount').change(function(event) {
  var token = $('#token').val();
  var model = '';
  var filterCount = this.value;
  var sort_by = $('#sort_by').val();
  var parts_type = '';
  var price_range = '';
  var parts_content = $('#parts_content');
  var mnfctr = $('#view_mftr').val();

  $.ajax({
             url: "/caterpartsonthefly/user/model_change",
             method: "POST",
             data: {
               _token : token,
               model: model,
               filterCount: filterCount,
               sort_by: sort_by,
               parts_type: parts_type,
               price_range: price_range,
               mnfctr: mnfctr
             },
             success: function(result) {
               var count = result.count;
               console.log("Count =" + count);
               if(result.status == true) {
                 var data = result.parts.data;
                 var size = data.length;
                 if(size == 1) {
                   product = size + " Product";
                   document.getElementById('product_count').innerHTML = product;
                 }
                 else {
                   product = size + " Products";
                   document.getElementById('product_count').innerHTML = product;
                 }

                 var content = '';
                 parts_content.empty();
                 for(var i=0; i < size; i++) {
                   if(data[i].sess != 1) {
                     if(data[i].parts_quantity == 0) {
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
                            <div class="status_red">
                            <span>`+ data[i].temp_status +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }
                     else if(data[i].parts_status_name == 'In Stock') {
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
                            <div class="status_green">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
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
                            <div class="status_blue">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }

                   }
                   else {
                     if(data[i].parts_quantity == 0) {
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
                            <div class="status_red">
                            <span>`+ data[i].temp_status +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }
                     else if(data[i].parts_status_name == 'In Stock') {
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
                            <div class="status_green">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
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
                            <div class="status_blue">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }
                   }
                 }

                 parts_content.append(content);
                 if(Number(count) == 0) {
                   $('#load_more').remove();
                   var content = '<div class="col-md-12 col-sm-12"><span class="text-center">No parts to display</span></div>';
                   parts_content.append(content);
                 }

               }
             }
      });

});

// Show parts by custom filters ( Caterparts no. asc & desc etc )
$('#sort_by').change(function(event) {
  var token = $('#token').val();
  var model = '';
  var filterCount = '';
  var sort_by = this.value;
  var parts_type = '';
  var price_range = '';
  var parts_content = $('#parts_content');
  var mnfctr = $('#view_mftr').val();

  $.ajax({
             url: "/caterpartsonthefly/user/model_change",
             method: "POST",
             data: {
               _token : token,
               model: model,
               filterCount: filterCount,
               sort_by: sort_by,
               parts_type: parts_type,
               price_range: price_range,
               mnfctr: mnfctr
             },
             success: function(result) {
               var count = result.count;
               console.log("Count =" + count);
               if(result.status == true) {
                 var data = result.parts.data;
                 var size = data.length;
                 if(size == 1) {
                   product = size + " Product";
                   document.getElementById('product_count').innerHTML = product;
                 }
                 else {
                   product = size + " Products";
                   document.getElementById('product_count').innerHTML = product;
                 }

                 var content = '';
                 parts_content.empty();
                 for(var i=0; i < size; i++) {
                   if(data[i].sess != 1) {
                     if(data[i].parts_quantity == 0) {
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
                            <div class="status_red">
                            <span>`+ data[i].temp_status +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }
                     else if(data[i].parts_status_name == 'In Stock') {
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
                            <div class="status_green">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
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
                            <div class="status_blue">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }

                   }
                   else {
                     if(data[i].parts_quantity == 0) {
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
                            <div class="status_red">
                            <span>`+ data[i].temp_status +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }
                     else if(data[i].parts_status_name == 'In Stock') {
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
                            <div class="status_green">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
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
                            <div class="status_blue">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }
                   }
                 }

                 parts_content.append(content);
                 if(Number(count) == 0) {
                   $('#load_more').remove();
                   var content = '<div class="col-md-12 col-sm-12"><span class="text-center">No parts to display</span></div>';
                   parts_content.append(content);
                 }

               }
             }
      });

});

// get quantity
$('#parts_content').on("click",".qtydiv .qty_num", function() {
  console.log("QTY =" + this.value);
  var qty = this.value;
  $(this).siblings('input[name="qty"]').val(qty);
});

// Add to cart
$('#parts_content').on("click",".butdiv .cart_btn", function(event) {
  var token = $('#token').val();
  var qty = $(this).siblings('input[name="qty"]').val();
  var part = $(this).siblings('input[name="part"]').val();
  var check_qty = $(this).siblings('input[name="check_qty"]').val();
  console.log("CHECK QTY =" + check_qty);

  var btn = this;
  var curr_btn=$(this);

  if(Number(qty) > Number(check_qty)) {
    e_qty = Number(1);
    event.preventDefault();
    sweetAlert("Oops...", "Selected quantity exceeded", "error");
  }
  else if(Number(qty) <= 0 ) {
    event.preventDefault();
    sweetAlert("Oops...", "Quantity must be greater than 0", "error");
  }
  else {
    console.log(btn);
    console.log("Added to cart =" +qty + " &" + part);
    $.ajax({
               url: "/caterpartsonthefly/user/add_to_cart",
               method: "POST",
               data: {
                 _token : token,
                 part: part,
                 qty: qty
               },
               success: function(result) {
                 if(result.status == true) {
                   swal({
                     title: "Item added to Cart",
                     type: "success",
                     showCancelButton: true,
                     confirmButtonColor: "#DD6B55",
                     confirmButtonText: "Continue Shopping",
                     cancelButtonText: "Procced to Checkout",
                     closeOnConfirm: true,
                     html:true
                   },
                   function(isConfirm) {
                     if(isConfirm) {
                      var img = btn.children;
                      img[0].src = "/caterpartsonthefly/assets/frontend/images/but_incart.png";

                      var test = btn.closest('div');

                      var a = document.createElement('a');
                      a.title = "Go to Cart";
                      a.href = "/caterpartsonthefly/cart";

                      curr_btn.parent('.butdiv').append(a);
                      curr_btn.remove();

                      var img = $('<img id="dynamic">');
                      var imgurl = "/caterpartsonthefly/assets/frontend/images/but_incart.png";
                      img.attr('src', imgurl);
                      img.appendTo(a);

                      console.log("added element");
                     }
                     else {
                       window.location.href = "/caterpartsonthefly/cart";
                     }
                   });
                 }
               }
    });
  }
});

// Show popular models
$('.productboxnew').on("click",".popular_models", function() {

  var popular_model = $(this).siblings('input[name="popular_model"]').val();
  console.log("POP Model ID =" + popular_model);
  var token = $('#token').val();
  var model = popular_model;
  var filterCount = '';
  var sort_by = '';
  var parts_type = '';
  var price_range = '';
  var parts_content = $('#parts_content');
  var mnfctr = '';

  var model_count = $('#modelCount').val();
  var parts_typeCount = $('#parts_typeCount').val();

  $.ajax({
             url: "/caterpartsonthefly/user/model_change",
             method: "POST",
             data: {
               _token : token,
               model: model,
               filterCount: filterCount,
               sort_by: sort_by,
               parts_type: parts_type,
               price_range: price_range,
               mnfctr: mnfctr
             },
             success: function(result) {
               var count = result.count;
               console.log("Count =" + count);
               if(result.status == true) {
                 var data = result.parts.data;
                 var size = data.length;
                 if(size == 1) {
                   product = size + " Product";
                   document.getElementById('product_count').innerHTML = product;
                 }
                 else {
                   product = size + " Products";
                   document.getElementById('product_count').innerHTML = product;
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
                 parts_content.empty();
                 for(var i=0; i < size; i++) {
                   if(data[i].sess != 1) {
                     if(data[i].parts_quantity == 0) {
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
                            <div class="status_red">
                            <span>`+ data[i].temp_status +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }
                     else if(data[i].parts_status_name == 'In Stock') {
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
                            <div class="status_green">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
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
                            <div class="status_blue">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }

                   }
                   else {
                     if(data[i].parts_quantity == 0) {
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
                            <div class="status_red">
                            <span>`+ data[i].temp_status +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }
                     else if(data[i].parts_status_name == 'In Stock') {
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
                            <div class="status_green">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
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
                            <div class="status_blue">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }
                   }
                 }

                 parts_content.append(content);
                 if(Number(count) == 0) {
                   $('#load_more').remove();
                   var content = '<div class="col-md-12 col-sm-12"><span class="text-center">No parts to display</span></div>';
                   parts_content.append(content);
                 }

               }
               location.reload();
             }
      });
});

  // Load more parts
  var click = 3;
  // var total_product = 0;
  var product_checker = 0;
  $('#load_more').on('click', '#load_more_parts', function() {
  var token = $('#token').val();
  var filterCount = $('#filterCount').val();
  var sort_by = $('#sort_by').val();
  var mnfctr = $('#view_mftr').val();
  var parts_content = $('#parts_content');
  console.log("COUNTER Before=" + click);
  $.ajax({
             url: "/caterpartsonthefly/load_more_parts",
             method: "POST",
             data: {
               _token : token,
               filterCount: filterCount,
               sort_by: sort_by,
               mnfctr: mnfctr,
               count: click
             },
             success: function(result) {
               var count = result.parts.length;
               console.log("Count =" + count);
               if(result.status == true) {
                 var data = result.parts;
                 var size = data.length;
                 if(size == 1) {
                   product = size + " Product";
                   document.getElementById('product_count').innerHTML = product;
                 }
                 else {
                   product = size + " Products";
                   document.getElementById('product_count').innerHTML = product;

                  //  $('#total_product').val(size);
                  //  var total_product = $('#total_product').val();
                  //  product_checker = size;
                  //  var total = Number(product_checker) + Number(total_product);
                  //  console.log("TOTAL =" + total);
                  //  $('#total_product').val(total);

                 }

                 var content = '';
                 for(var i=0; i < size; i++) {
                   if(data[i].sess != 1) {
                     if(data[i].parts_quantity == 0) {
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
                            <div class="status_red">
                            <span>`+ data[i].temp_status +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }
                     else if(data[i].parts_status_name == 'In Stock') {
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
                            <div class="status_green">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
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
                            <div class="status_blue">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }

                   }
                   else {
                     if(data[i].parts_quantity == 0) {
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
                            <div class="status_red">
                            <span>`+ data[i].temp_status +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }
                     else if(data[i].parts_status_name == 'In Stock') {
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
                            <div class="status_green">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
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
                            <div class="status_blue">
                            <span>`+ data[i].parts_status_name +`</span>
                            </div>
                            <div class="clearfix"></div>
                            <hr/>
                            <div class="butdiv">
                            QTY:
                              <input type="number" class="qty_num" min="1" max="100" name="qty" value="1" />
                              <input type="hidden" id="check_qty" name="check_qty" value=" ` + data[i].parts_quantity + `" />
                              <input type="hidden" class="part" name="part" value="`+ data[i].parts_id  +`" />
                              <button type="button" class="cart_btn"><img src="`+ data[i].cart_img  +`" alt=""></button>
                            </div>
                          </div>
                        </div>`;
                     }
                   }
                 }

                 parts_content.append(content);
                 if(Number(count) == 0) {
                   $('#load_more a').hide();
                   var t = document.createElement('p');
                   t.title = 'No more parts to display';
                   t.innerHTML = 'No more parts to display';
                   t.className = 'no_data';
                  //  var no_data = "No more jobs to display";
                   $('#load_more').append(t);

                  //  parts_content.append(t);
                 }

               }
             }
  });
  click = Number(click) + 3;
  console.log("COUNTER AFTER=" + click);
});
