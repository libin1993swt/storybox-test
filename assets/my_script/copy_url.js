$(document).on('click','.copy',function() {
	//var short_url = $(this).closest("tr")   // Finds the closest row <tr> 
  //                     .find(".short_url")
  //                     .val();     // Gets a descendent with class="nr"  
	// console.log(short_url);
	// alert(short_url);
	// $(".short_url").each(function() {
  		// var value = $(this).text();
  		// short_url.select();
  		// console.log(value);
  		  // document.execCommand("copy");
  		  // $(this).select();
			// $(this).execCommand('copy');
	// })
  // copyToClipboard();
});

function copyToClipboard(element) {
    var msg = $(element).closest("tr").find(".short_url").text();
    alert(msg);
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(msg).select();
    document.execCommand("copy");
    $temp.remove();
}