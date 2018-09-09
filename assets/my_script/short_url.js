$("#url").change(function(){
    // alert("The text has been changed.");
    var url = $("#url").val();
    var token = $("#token").val();

    function is_valid_url(url) {
    	return /^(http(s)?:\/\/)?(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(url);
	}
	var value = is_valid_url(url);
	console.log(value);
	if(value == true) {
		$.ajax({
                   url: "/storybox/ajax/url",
                   method: "POST",
                   data: {
                     _token : token,
                     url: url
                   },
                   traditional: true,
                   success: function(result) {
                     if(result.status == true) {
                     	var count = result.count; 
                     	var title = 'Short URL '+count;
                     	var short_url = 'https://storybox.tk/'+result.string;
                     	$("#title").val(title);
                     	$("#short_url").val(short_url);
                       // swal('Admin user deleted.');
                     }
                     else {
                       swal('Some error occured. Please try again.');
                     }
                   }
             });	
	}
	else {
		swal('Please give a valid url.')
	}
    
}); 