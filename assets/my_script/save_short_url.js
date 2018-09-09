$("#submit").click(function(){

  var url = $("#url").val();
  var title = $("#title").val();
  var short_url = $("#short_url").val();
  var token = $("#token").val();

	if(url != '' && title != '') {
		$.ajax({
                   url: "/storybox/ajax/url/save",
                   method: "POST",
                   data: {
                     _token : token,
                     url: url,
                     title: title,
                     short_url: short_url,
                   },
                   traditional: true,
                   success: function(result) {
                     if(result.status == true) {
                      $("#title").val('');
                     	$("#title").val('');
                     	$("#short_url").val('');
                      $('#admin_user tbody').empty();
                      var length = result.urls.length;
                      var body = "<tbody>";
                          for(var i = 0;i<length;i++) {
                                body += "<tr>";
                                body += "<td>"+ (i+1) +"</td>";
                                body += "<td>"+result.urls[i].title+"</td>";
                                body += "<td>"+result.urls[i].url+"</td>";
                                body += "<td class='short_url'>"+result.urls[i].short_url+"</td>";
                                body += "<td>"+result.urls[i].created_at+"</td>";

                                body += "<td>";            
                                body += "<button class='btn btn-success btn-sm copy' onclick='copyToClipboard(this)'> <span class='fa fa-unlock'> </span> &nbsp;Copy Short URL </button>"; 
                                body += "</td>";
                                
                                body += "</tr>";
                            }
                        body += "</tbody>";
                        $('#admin_user').append(body);
                     }
                     else {
                       swal('Some error occured. Please try again.');
                     }
                   }
             });	
	}
	else {
		swal('Please give a valid url.');
	}
    
}); 
