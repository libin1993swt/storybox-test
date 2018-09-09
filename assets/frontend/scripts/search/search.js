var click = 0;

$(document).ready(function() {

  var mfctr_exist = $('#mfctr_exist').val();
  var model_exist = $('#model_exist').val();
  var parts_type_exist = $('#parts_type_exist').val();
  var price_range_exist = $('#price_range_exist').val();

  if(mfctr_exist == '1') {
    var more_manufacturer = document.getElementById('more_manufacturer');
    more_manufacturer.style.display = 'block';
  }

  if(model_exist == '1') {
    var more_model = document.getElementById('more_model');
    more_model.style.display = 'block';
  }

  if(parts_type_exist == '1') {
    var more_parts_type = document.getElementById('more_parts_type');
    more_parts_type.style.display = 'block';
  }

  if(price_range_exist == '1') {
    var more_price_range = document.getElementById('more_price_range');
    more_price_range.style.display = 'block';
  }
});

// Show more manufacturers - show scroller
$('#more_manufacturer').click(function() {
  console.log("MORE MODEL TRIGGER");
  $("#search_manufacturer_container").mCustomScrollbar("update");
  var more_manufacturer = document.getElementById('more_manufacturer');
  var less_manufacturer = document.getElementById('less_manufacturer');

  if(more_manufacturer.style.display == 'block') {
    console.log("inner block");
    more_manufacturer.style.display = 'none';

    $("#search_manufacturer_container").mCustomScrollbar({
      scrollButtons:{enable:false},
      scrollbarPosition:"inside"
    });
    less_manufacturer.style.display = 'block';
  }
});

// Show less manufacturer - hide scroller
$('#less_manufacturer').click(function() {
  console.log("less model trigger");
  $("#search_manufacturer_container").mCustomScrollbar("disable");

  var more_manufacturer = document.getElementById('more_manufacturer');
  var less_manufacturer = document.getElementById('less_manufacturer');

  if(more_manufacturer.style.display == 'none') {
    more_manufacturer.style.display = 'block';
  }
  if(less_manufacturer.style.display = 'block') {
    less_manufacturer.style.display = 'none'
  }
});

// Show more models - show scroller
$('#more_model').click(function() {
  console.log("MORE MODEL TRIGGER");
  $("#search_model_container").mCustomScrollbar("update");
  var more_model = document.getElementById('more_model');
  var less_model = document.getElementById('less_model');

  if(more_model.style.display == 'block') {
    console.log("inner block");
    more_model.style.display = 'none';

    $("#search_model_container").mCustomScrollbar({
      scrollButtons:{enable:false},
      scrollbarPosition:"inside"
    });
    less_model.style.display = 'block';
  }
});

// Show less models - hide scroller
$('#less_model').click(function() {
  console.log("less model trigger");
  $("#search_model_container").mCustomScrollbar("disable");

  var more_model = document.getElementById('more_model');
  var less_model = document.getElementById('less_model');

  if(more_model.style.display == 'none') {
    more_model.style.display = 'block';
  }
  if(less_model.style.display = 'block') {
    less_model.style.display = 'none'
  }
});

// Show more parts type - show scroller
$('#more_parts_type').click(function() {
  console.log("MORE PRICE RANGE TRIGGER");
  $("#search_parts_type_container").mCustomScrollbar("update");

  var more_parts_type = document.getElementById('more_parts_type');
  var less_parts_type = document.getElementById('less_parts_type');

  if(more_parts_type.style.display == 'block') {
    console.log("inner block");
    more_parts_type.style.display = 'none';

    $("#search_parts_type_container").mCustomScrollbar({
      scrollButtons:{enable:false},
      scrollbarPosition:"inside"
    });
    less_parts_type.style.display = 'block';
  }
});

// Show less parts type - hide scroller
$('#less_parts_type').click(function() {
  console.log("less model trigger");
  $("#search_parts_type_container").mCustomScrollbar("disable");

  var more_parts_type = document.getElementById('more_parts_type');
  var less_parts_type = document.getElementById('less_parts_type');

  if(more_parts_type.style.display == 'none') {
    more_parts_type.style.display = 'block';
  }
  if(less_parts_type.style.display = 'block') {
    less_parts_type.style.display = 'none'
  }
});


// Show more price range - show scroller
$('#more_price_range').click(function() {
  console.log("MORE PRICE RANGE TRIGGER");
  $("#search_price_range_container").mCustomScrollbar("update");

  var more_price_range = document.getElementById('more_price_range');
  var less_price_range = document.getElementById('less_price_range');

  if(more_price_range.style.display == 'block') {
    console.log("inner block");
    more_price_range.style.display = 'none';

    $("#search_price_range_container").mCustomScrollbar({
      scrollButtons:{enable:false},
      scrollbarPosition:"inside"
    });
    less_price_range.style.display = 'block';
  }
});

// Show less price range- hide scroller
$('#less_price_range').click(function() {
  console.log("less model trigger");
  $("#search_price_range_container").mCustomScrollbar("disable");

  var more_price_range = document.getElementById('more_price_range');
  var less_price_range = document.getElementById('less_price_range');

  if(more_price_range.style.display == 'none') {
    more_price_range.style.display = 'block';
  }
  if(less_price_range.style.display = 'block') {
    less_price_range.style.display = 'none'
  }
});

// View more price range
$('#more_price_range').click(function() {
  console.log("Click trigger");
  $("#search_price_range_container").mCustomScrollbar({
    scrollButtons:{enable:false},
    scrollbarPosition:"inside"
  });
  $('#more_price_range').hide();
});

// Search Functionality
$(document).ready(function() {
  // Get search key
  var token = $('#token').val();
  var mnfctr = $('#view_mftr').val();
  console.log("selected manufacturer_id = " + mnfctr);
  var filterCount = $('#filterCount').val();
  var sort_by = $('#sort_by').val();
  var key = $('#key').val();
  var parts_content = $('#parts_content');
  console.log(" CHCKINGNN");

  var search_manufacturer_count = $('#search_manufacturer_count').val();
  var search_model_count = $('#search_model_count').val();
  var search_parts_type_count = $('#search_parts_type_count').val();

  if(search_manufacturer_count == 2) {
    console.log("MA OKAY");
  }
  $.ajax({
             url: "/caterpartsonthefly/search_refresh",
             method: "POST",
             data: {
               _token : token,
               key: key,
               filterCount: filterCount,
               sort_by: sort_by
              //  mnfctr: '9',
             },
             success: function(result) {
               if(result.status == true) {
                 // if search key is a valid manufacturer name
                //  if(result.manufacturer !=  null) {
                    // Displaying parts
                    var data = result.parts.data;
                    var size = data.length;
                    console.log("Size =" + size);
                    if(result.count == 1) {
                      product = size + " Product";
                      top_product = '(' + size + ' Product )';
                      document.getElementById('product_count').innerHTML = product;
                      document.getElementById('upper_product_count').innerHTML = top_product;
                      document.getElementById('hidden_count').value = result.count;
                    }
                    else {
                      product = size + " Products";
                      top_product = '(' + size + ' Products )';
                      document.getElementById('product_count').innerHTML = product;
                      document.getElementById('upper_product_count').innerHTML = top_product;
                      document.getElementById('hidden_count').value = result.count;                    }

                    // set height of manufacturer listing container according to no. of data
                    if(search_manufacturer_count == 1) {
                      document.getElementById('search_manufacturer_container').style.height = "38px";
                      $('#more_manufacturer').hide();
                    }
                    else if(Number(search_manufacturer_count) == 2) {
                      document.getElementById('search_manufacturer_container').style.height = "55px";
                      $('#more_manufacturer').hide();
                    }
                    else if(search_manufacturer_count == 3) {
                      document.getElementById('search_manufacturer_container').style.height = "85px";
                      $('#more_manufacturer').hide();
                    }
                    else if(search_manufacturer_count == 4) {
                      document.getElementById('search_manufacturer_container').style.height = "115px";
                      $('#more_manufacturer').hide();
                    }
                    else if(search_manufacturer_count == 5) {
                      document.getElementById('search_manufacturer_container').style.height = "143px";
                      $('#more_manufacturer').hide();
                    }
                    else if(search_manufacturer_count >= 6) {
                      document.getElementById('search_manufacturer_container').style.height = "143px";
                    }
                    else {
                      // do nothing
                    }

                    // set height of model listing container according to no. of data
                    if(search_model_count == 1) {
                      document.getElementById('search_model_container').style.height = "38px";
                      $('#more_manufacturer').hide();
                    }
                    else if(search_model_count == 2) {
                      document.getElementById('search_model_container').style.height = "55px";
                      $('#more_model').hide();
                    }
                    else if(search_model_count == 3) {
                      document.getElementById('search_model_container').style.height = "85px";
                      $('#more_model').hide();
                    }
                    else if(search_model_count == 4) {
                      document.getElementById('search_model_container').style.height = "115px";
                      $('#more_model').hide();
                    }
                    else if(search_model_count == 5) {
                      document.getElementById('search_model_container').style.height = "143px";
                      $('#more_model').hide();
                    }
                    else if(search_model_count >= 6) {
                      document.getElementById('search_model_container').style.height = "143px";
                    }
                    else {
                      // do nothing
                    }

                    // set height of parts type container according to no. of data
                    if(search_parts_type_count == 1) {
                      document.getElementById('search_parts_type_container').style.height = "38px";
                      $('#more_parts_type').hide();
                    }
                    else if(search_parts_type_count == 2) {
                      document.getElementById('search_parts_type_container').style.height = "55px";
                      $('#more_parts_type').hide();
                    }
                    else if(search_parts_type_count == 3) {
                      document.getElementById('search_parts_type_container').style.height = "85px";
                      $('#more_parts_type').hide();
                    }
                    else if(search_parts_type_count == 4) {
                      document.getElementById('search_parts_type_container').style.height = "115px";
                      $('#more_parts_type').hide();
                    }
                    else if(search_parts_type_count == 5) {
                      document.getElementById('search_parts_type_container').style.height = "143px";
                      $('#more_parts_type').hide();
                    }
                    else if(search_parts_type_count >= 6) {
                      document.getElementById('search_parts_type_container').style.height = "143px";
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
                  parts_content.empty();
                  parts_content.append(content);

                  if(Number(result.count) == 0) {
                    $('#more_parts_container a').hide();
                    var t = document.createElement('p');
                    t.title = 'No more parts to display';
                    t.innerHTML = 'No more parts to display';
                    t.className = 'no_data';
                    $('#more_parts_container').append(t);
                  }

             } // result.success
           }
  });
});
// Show parts by filtering selected manufacturer
$('.search_manufacturer_change').click(function(event) {
  var token = $('#token').val();
  var mnfctr= this.value;
  var filterCount = $('#filterCount').val();
  var sort_by = $('#sort_by').val();
  var price_range = '';
  var parts_content = $('#parts_content');
  var model = '';
  var parts_type_id = '';
  var key = $('#key').val();

  $.ajax({
             url: "/caterpartsonthefly/search_result",
             method: "POST",
             data: {
               _token : token,
               model: model,
               mnfctr: mnfctr,
               filterCount: filterCount,
               sort_by: sort_by,
               price_range: price_range,
               parts_type_id: parts_type_id,
               key: key
             },
             success: function(result) {
               var count = result.count;
               console.log("Count =" + count);
               if(result.status == true) {
                 var data = result.parts.data;
                 var size = data.length;
                 if(size == 1) {
                   product = size + " Product";
                   top_product = '(' + size + ' Product )';
                   document.getElementById('product_count').innerHTML = product;
                   document.getElementById('upper_product_count').innerHTML = top_product;
                   document.getElementById('hidden_count').value = size;
                 }
                 else {
                   product = size + " Products";
                   top_product = '(' + size + ' Products )';
                   document.getElementById('product_count').innerHTML = product;
                   document.getElementById('upper_product_count').innerHTML = top_product;
                   document.getElementById('hidden_count').value = size;
                 }

                 var content = '';
                 parts_content.empty();
                 for(var i=0; i < size; i++) {
                   content += `
                   <div class="col-md-4 col-sm-6">
                      <div class="productbox">
                        <div class="prodname">` +
                          `<a target="_blank" href="/caterpartsonthefly/parts_details/`+ data[i].parts_id +`">` + data[i].parts_title
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

// Show parts by filtering selected model (first choice)
$('.search_model_change').click(function(event) {
  console.log("Value MODLE CHANGE=" + this.value);
  var token = $('#token').val();
  var model = this.value;
  var filterCount = $('#filterCount').val();
  var sort_by = $('#sort_by').val();
  var price_range = '';
  var parts_content = $('#parts_content');
  // var mnfctr = $('input[name="manufacturer_id"]:checked').val();
  // if(mnfctr == null || mnfctr == '') {
  //   mnfctr = '';
  // }
  var  mnfctr = '';
  var parts_type_id = '';
  var key = $('#key').val();

  console.log("parts_type_id = " + parts_type_id);
  console.log("AJAX TRIGGER");

  $.ajax({
             url: "/caterpartsonthefly/search_result",
             method: "POST",
             data: {
               _token : token,
               model: model,
               mnfctr: mnfctr,
               filterCount: filterCount,
               sort_by: sort_by,
               price_range: price_range,
               parts_type_id: parts_type_id,
               key: key
             },
             success: function(result) {
               var count = result.count;
               console.log("Count =" + count);
               if(result.status == true) {
                 var data = result.parts.data;
                 var size = data.length;
                 if(size == 1) {
                   product = size + " Product";
                   top_product = '(' + size + ' Product )';
                   document.getElementById('product_count').innerHTML = product;
                   document.getElementById('upper_product_count').innerHTML = top_product;
                   document.getElementById('hidden_count').value = size;
                 }
                 else {
                   product = size + " Products";
                   top_product = '(' + size + ' Products )';
                   document.getElementById('product_count').innerHTML = product;
                   document.getElementById('upper_product_count').innerHTML = top_product;
                   document.getElementById('hidden_count').value = size;
                 }

                 var content = '';
                 parts_content.empty();
                 for(var i=0; i < size; i++) {
                   content += `
                   <div class="col-md-4 col-sm-6">
                      <div class="productbox">
                        <div class="prodname">` +
                          `<a target="_blank" href="/caterpartsonthefly/parts_details/`+ data[i].parts_id +`">` + data[i].parts_title
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
$('.search_partstype_change').click(function(event) {
  console.log("parts type ID =" + this.value);
  var token = $('#token').val();
  var model = '';
  var filterCount = $('#filterCount').val();
  var sort_by = $('#sort_by').val();
  var price_range = '';
  var parts_content = $('#parts_content');
  var  mnfctr = '';
  var parts_type_id = this.value;;
  var key = $('#key').val();

 console.log(" Price ID =" + price_range);
  $.ajax({
             url: "/caterpartsonthefly/search_result",
             method: "POST",
             data: {
               _token : token,
               model: model,
               filterCount: filterCount,
               sort_by: sort_by,
               price_range: price_range,
               mnfctr: mnfctr,
               parts_type_id: parts_type_id,
               key: key
             },
             success: function(result) {
               var count = result.count;
               console.log("Count =" + count);
               if(result.status == true) {
                 var data = result.parts.data;
                 var size = data.length;
                 if(size == 1) {
                   product = size + " Product";
                   top_product = '(' + size + ' Product )';
                   document.getElementById('product_count').innerHTML = product;
                   document.getElementById('upper_product_count').innerHTML = top_product;
                   document.getElementById('hidden_count').value = size;
                 }
                 else {
                   product = size + " Products";
                   top_product = '(' + size + ' Products )';
                   document.getElementById('product_count').innerHTML = product;
                   document.getElementById('upper_product_count').innerHTML = top_product;
                   document.getElementById('hidden_count').value = size;
                 }

                 var content = '';
                 parts_content.empty();
                 for(var i=0; i < size; i++) {
                   content += `
                   <div class="col-md-4 col-sm-6">
                      <div class="productbox">
                        <div class="prodname">` +
                          `<a target="_blank" href="/caterpartsonthefly/parts_details/`+ data[i].parts_id +`">` + data[i].parts_title
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
  price_range = Number(price_range) + 1;
  // console.log("Range =" + price_range);
  var parts_content = $('#parts_content');
  var  mnfctr = '';
  var parts_type_id = '';
  var key = $('#key').val();

  console.log(" Price ID =" + price_range);
  $.ajax({
             url: "/caterpartsonthefly/search_result",
             method: "POST",
             data: {
               _token : token,
               model: model,
               filterCount: filterCount,
               sort_by: sort_by,
               parts_type: parts_type,
               price_range: price_range,
               mnfctr: mnfctr,
               parts_type_id: parts_type_id,
               key: key
             },
             success: function(result) {
               var count = result.count;
               console.log("Count =" + count);
               if(result.status == true) {
                 var data = result.parts.data;
                 var size = data.length;
                 if(size == 1) {
                   product = size + " Product";
                   top_product = '(' + size + ' Product )';
                   document.getElementById('product_count').innerHTML = product;
                   document.getElementById('upper_product_count').innerHTML = top_product;
                   document.getElementById('hidden_count').value = size;
                 }
                 else {
                   product = size + " Products";
                   top_product = '(' + size + ' Products )';
                   document.getElementById('product_count').innerHTML = product;
                   document.getElementById('upper_product_count').innerHTML = top_product;
                   document.getElementById('hidden_count').value = size;
                 }

                 var content = '';
                 parts_content.empty();
                 for(var i=0; i < size; i++) {
                   content += `
                   <div class="col-md-4 col-sm-6">
                      <div class="productbox">
                        <div class="prodname">` +
                          `<a target="_blank" href="/caterpartsonthefly/parts_details/`+ data[i].parts_id +`">` + data[i].parts_title
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
  var mnfctr = '';
  var parts_type_id = '';
  var key = $('#key').val();

  console.log(" Price ID =" + price_range);
  $.ajax({
             url: "/caterpartsonthefly/search_result",
             method: "POST",
             data: {
               _token : token,
               model: model,
               filterCount: filterCount,
               sort_by: sort_by,
               parts_type: parts_type,
               price_range: price_range,
               parts_type_id: parts_type_id,
               mnfctr: mnfctr,
               key: key
             },
             success: function(result) {
               var count = result.count;
               console.log("Count =" + count);
               if(result.status == true) {
                 var data = result.parts.data;
                 var size = data.length;
                 if(size == 1) {
                   product = size + " Product";
                   top_product = '(' + size + ' Product )';
                   document.getElementById('product_count').innerHTML = product;
                   document.getElementById('upper_product_count').innerHTML = top_product;
                   document.getElementById('hidden_count').value = size;
                 }
                 else {
                   product = size + " Products";
                   top_product = '(' + size + ' Products )';
                   document.getElementById('product_count').innerHTML = product;
                   document.getElementById('upper_product_count').innerHTML = top_product;
                   document.getElementById('hidden_count').value = size;
                 }

                 var content = '';
                 parts_content.empty();
                 for(var i=0; i < size; i++) {
                   content += `
                   <div class="col-md-4 col-sm-6">
                      <div class="productbox">
                        <div class="prodname">` +
                          `<a target="_blank" href="/caterpartsonthefly/parts_details/`+ data[i].parts_id +`">` + data[i].parts_title
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
  var mnfctr = '';

  console.log(" Price ID =" + price_range);
  $.ajax({
             url: "/caterpartsonthefly/search_result",
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
                   top_product = '(' + size + ' Product )';
                   document.getElementById('product_count').innerHTML = product;
                   document.getElementById('upper_product_count').innerHTML = top_product;
                   document.getElementById('hidden_count').value = size;
                 }
                 else {
                   product = size + " Products";
                   top_product = '(' + size + ' Product )';
                   document.getElementById('product_count').innerHTML = product;
                   document.getElementById('upper_product_count').innerHTML = top_product;
                   document.getElementById('hidden_count').value = size;
                 }

                 var content = '';
                 parts_content.empty();
                 for(var i=0; i < size; i++) {
                   content += `
                   <div class="col-md-4 col-sm-6">
                      <div class="productbox">
                        <div class="prodname">` +
                          `<a target="_blank" href="/caterpartsonthefly/parts_details/`+ data[i].parts_id +`">` + data[i].parts_title
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


// Add to cart
$('#parts_content').on("click",".butdiv .cart_btn", function() {
  var token = $('#token').val();
  var qty = $(this).siblings('input[name="qty"]').val();
  var part = $(this).siblings('input[name="part"]').val();
  var btn = this;
  var curr_btn=$(this);
  console.log(btn);
  console.log("Added to cart =" +qty + " &" + part);

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

                     }
                     else {

                     }
                   });
                 }
               }
    });
  }
});
//
// // Load more parts
// $('#load_more_parts').click(function() {
//   var token = $('#token').val();
//   var filterCount = $('#filterCount').val();
//   var sort_by = $('#sort_by').val();
//   click = Number(click) + 2;
//   $.ajax({
//              url: "/caterpartsonthefly/mncftr_more_parts",
//              method: "POST",
//              data: {
//                _token : token,
//                filterCount: filterCount,
//                sort_by: sort_by,
//                count: click
//              },
//              success: function(result) {
//                if(result.status == true) {
//                  var data = result.job;
//                  console.log("Data =" + data);
//                  var size = data.length;
//                  console.log("SIZE  =" + size);
//                  var content = '';
//                  if(size != 0) {
//                    for(var i=0; i< size; i++) {
//                      content += `
//                      <tr class='clickable-row' data-href="` +  data[i].source_url + `">
//                        <td class="text-center">
//                          <img src="/caterpartsonthefly/assets/logo/` + data[i].company_logo +`" alt="">
//                        </td>
//                        <td class="text-left">
//                          <span class="hgreen">` + data[i].job_title +`</span><br/> ` + data[i].company_name + `
//                        </td>
//                        <td class="text-left"> ` + data[i].job_location + ` </td>
//                        <td class="text-right">
//                          <span class="hgreenbig">` + data[i].job_type_name + `</span><br/>Posted ` + data[i].days +`  days ago
//                        </td>
//                      </tr>`;
//                    }
//                    $('#job_listing').append(content);
//                  }
//                  else {
//                    $('#more_job_container a').hide();
//                    var no_data = "No more jobs to display";
//                    $('#more_job_container').append(no_data);
//                  }
//                }
//                else {
//                  // error response
//                }
//              }
//   });
//
// });

// Load more parts
var click = 3;
// var total_product = 0;
var product_checker = 0;
$('#more_parts_container').on('click', '#load_more_parts', function() {
  var token = $('#token').val();
  var filterCount = $('#filterCount').val();
  var sort_by = $('#sort_by').val();
  var mnfctr = $('#view_mftr').val();
  var parts_content = $('#parts_content');
  var count = $('#hidden_count').val();
  console.log("MORE COUNT =" + count);
  var key = $('#key').val();

  $.ajax({
             url: "/caterpartsonthefly/search_load_more_parts",
             method: "POST",
             data: {
               _token : token,
               filterCount: filterCount,
               sort_by: sort_by,
               mnfctr: mnfctr,
               key: key,
               count: count
              //  count: click
             },
             success: function(result) {
               var count = result.count;
               console.log("Count =" + count);
               if(result.status == true) {
                 var data = result.parts;
                 var size = data.length;
                 if(result.count == 1) {
                   product = result.count + " Product";
                   top_product = '(' + result.count + ' Product )';
                   document.getElementById('product_count').innerHTML = product;
                   document.getElementById('upper_product_count').innerHTML = top_product;
                   document.getElementById('hidden_count').value = result.count;
                 }
                 else {
                   product = result.count + " Products";
                   top_product = '(' + result.count + ' Product )';
                   document.getElementById('product_count').innerHTML = product;
                   document.getElementById('upper_product_count').innerHTML = top_product;
                   document.getElementById('hidden_count').value = result.count;
                 }

                 var content = '';
                //  parts_content.empty();
                 for(var i=0; i < size; i++) {
                   content += `
                   <div class="col-md-4 col-sm-6">
                      <div class="productbox">
                        <div class="prodname">` +
                          `<a target="_blank" href="/caterpartsonthefly/parts_details/`+ data[i].parts_id +`">` + data[i].parts_title
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

                 parts_content.append(content);
                 if(result.size == 0) {
                   $('#more_parts_container a').hide();
                   var t = document.createElement('p');
                   t.title = 'No more parts to display';
                   t.innerHTML = 'No more parts to display';
                   t.className = 'no_data';
                   $('#more_parts_container').append(t);
                 }

               }
             }
           });

});
