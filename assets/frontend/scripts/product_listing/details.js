
// Add tp cart
$('#add_to_cart').click(function(event) {
  var token = $('#token').val();
  var qty = $('input[name="qty"]').val();
  var part = $('input[name="part"]').val();
  var check_qty = $('input[name="check_qty"]').val();

  console.log("QTY =" + qty);
  console.log("PART ID =" + part);
  console.log("CHECK QTY = " + check_qty);

  var btn = this;
  var curr_btn = $(this);
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

                      var a = document.createElement('a');
                      a.title = "Go to Cart";
                      a.href = "/caterpartsonthefly/cart";
                      a.className = "butadtocart";
                      a.innerHTML = "In Cart"

                      curr_btn.parent('.product_detail_btns').append(a);
                      curr_btn.hide();

                      console.log("added element");
                     }
                     else {
                       window.location = "/caterpartsonthefly/cart";
                     }
                   });
                 }
               }
    });
  }



});
