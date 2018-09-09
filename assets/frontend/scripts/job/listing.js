// Show job by location
var click = 0;
$('#location').keyup(function() {
  var token = $('#token').val();
  var location = this.value;
  var count = 2;
  console.log("location =" + location);
  $.ajax({
             url: "/caterpartsonthefly/job_search_location",
             method: "POST",
             data: {
               _token : token,
               location: location,
               count: count
             },
             success: function(result) {
               if(result.status == true) {
                 var data = result.job;
                 console.log("Data =" + data);
                 var size = data.length;
                 console.log("SIZE  =" + size);
                 var content = '';
                 if(size != 0) {
                   for(var i=0; i< size; i++) {
                     content += `
                     <tr class='clickable-row' data-href="/caterpartsonthefly/job-details/` +  data[i].job_id + `">
                       <td class="text-center">
                         <img src="/caterpartsonthefly/assets/logo/` + data[i].company_logo +`" alt="">
                       </td>
                       <td class="text-left">
                         <span class="hgreen">` + data[i].job_title +`</span><br/> ` + data[i].company_name + `
                       </td>
                       <td class="text-left"> ` + data[i].job_location + ` </td>
                       <td class="text-right">
                         <span class="hgreenbig">` + data[i].job_type_name + `</span><br/>Posted ` + data[i].days +`  days ago
                       </td>
                     </tr>`;
                   }

                   $('#job_listing').empty();
                   $('#job_listing').append(content);

                   var load_more_job = document.getElementById('load_more_job');
                   var no_data = document.getElementById('no_data');

                   $('#more_job_container a').remove();
                   var t = document.createElement('a');
                   t.title = 'Load more jobs';
                   t.innerHTML = 'Load more jobs ';
                   t.className = 'load_cursor';
                   t.id = 'load_more_job';
                  //  var no_data = "No more jobs to display";
                   $('#more_job_container').append(t);

                 }
                 else {
                   $('#more_job_container a').hide();
                   var t = document.createElement('a');
                   t.title = 'No more jobs to display';
                   t.innerHTML = 'No more jobs to display';
                   t.className = 'no_data';
                   $('#more_job_container').append(t);
                 }

                //  window.location.reload();
               }
               else {
                 // error response
               }
             }
  });
});


// Open job details
$('#job_listing').on('click', '.clickable-row', function() {
    window.location = $(this).data("href");
});


$('.job_filter').change(function(event) {
  var token = $('#token').val();
  var job_type = this.value;

  console.log("Value =" + job_type);
  var location = $('#location').val();
  var keyword = $('#keyword').val();
  var local_click = 2;
  $.ajax({
             url: "/caterpartsonthefly/job_type_filter",
             method: "POST",
             data: {
               _token : token,
               job_type: job_type,
               location: location,
               keyword: keyword,
               count: local_click
             },
             success: function(result) {
               if(result.status == true) {
                 var data = result.job;
                 console.log("Data =" + data);
                 var size = data.length;
                 console.log("SIZE  =" + size);
                 var content = '';
                 if(size != 0) {
                   for(var i=0; i< size; i++) {
                     content += `
                     <tr class='clickable-row' data-href="/caterpartsonthefly/job-details/` +  data[i].job_id + `">
                       <td class="text-center">
                         <img src="/caterpartsonthefly/assets/logo/` + data[i].company_logo +`" alt="">
                       </td>
                       <td class="text-left">
                         <span class="hgreen">` + data[i].job_title +`</span><br/> ` + data[i].company_name + `
                       </td>
                       <td class="text-left"> ` + data[i].job_location + ` </td>
                       <td class="text-right">
                         <span class="hgreenbig">` + data[i].job_type_name + `</span><br/>Posted ` + data[i].days +`  days ago
                       </td>
                     </tr>`;
                   }

                   $('#job_listing').empty();
                   $('#job_listing').append(content);

                   var load_more_job = document.getElementById('load_more_job');
                   var no_data = document.getElementById('no_data');

                   $('#more_job_container a').remove();
                   var t = document.createElement('a');
                   t.title = 'Load more jobs';
                   t.innerHTML = 'Load more jobs ';
                   t.className = 'load_cursor';
                   t.id = 'load_more_job';
                  //  var no_data = "No more jobs to display";
                   $('#more_job_container').append(t);

                 }
                 else {
                   $('#more_job_container a').hide();
                   var t = document.createElement('a');
                   t.title = 'No more jobs to display';
                   t.innerHTML = 'No more jobs to display';
                   t.className = 'no_data';
                   $('#more_job_container').append(t);
                 }

                 window.location.reload();
               }
               else {
                 // error response
               }
             }
  });
});

// Keyword search
$('#keyword').keyup(function(event) {
  var token = $('#token').val();
  var keyword = this.value;
  var count = 2;
  console.log("Value =" + keyword);
  $.ajax({
             url: "/caterpartsonthefly/keyword_filter",
             method: "POST",
             data: {
               _token : token,
               keyword: keyword,
               count: count
             },
             success: function(result) {
               if(result.status == true) {
                 var data = result.job;
                 console.log("Data =" + data);
                 var size = data.length;
                 console.log("SIZE  =" + size);
                 var content = '';
                 if(size != 0) {
                   for(var i=0; i< size; i++) {
                     content += `
                     <tr class='clickable-row' data-href="/caterpartsonthefly/job-details/` +  data[i].job_id + `">
                       <td class="text-center">
                         <img src="/caterpartsonthefly/assets/logo/` + data[i].company_logo +`" alt="">
                       </td>
                       <td class="text-left">
                         <span class="hgreen">` + data[i].job_title +`</span><br/> ` + data[i].company_name + `
                       </td>
                       <td class="text-left"> ` + data[i].job_location + ` </td>
                       <td class="text-right">
                         <span class="hgreenbig">` + data[i].job_type_name + `</span><br/>Posted ` + data[i].days +`  days ago
                       </td>
                     </tr>`;
                   }

                   $('#job_listing').empty();
                   $('#job_listing').append(content);

                   var load_more_job = document.getElementById('load_more_job');
                   var no_data = document.getElementById('no_data');

                   $('#more_job_container a').remove();
                   var t = document.createElement('a');
                   t.title = 'Load more jobs';
                   t.innerHTML = 'Load more jobs ';
                   t.className = 'load_cursor';
                   t.id = 'load_more_job';
                  //  var no_data = "No more jobs to display";
                   $('#more_job_container').append(t);

                 }
                 else {
                   $('#more_job_container a').hide();
                   var t = document.createElement('a');
                   t.title = 'No more jobs to display';
                   t.innerHTML = 'No more jobs to display';
                   t.className = 'no_data';
                   $('#more_job_container').append(t);
                 }

                //  window.location.reload();
               }
               else {
                 // error response
               }
             }
  });
});


// Load more jobs
$('#more_job_container').on('click', '#load_more_job', function() {
// $('#load_more_job').click(function() {
  var token = $('#token').val();
  var keyword = $('#keyword').val();
  var location = $('#location').val();
  // alert('hi ');
  click = Number(click) + 2;
  $.ajax({
             url: "/caterpartsonthefly/load_more_job",
             method: "POST",
             data: {
               _token : token,
               keyword: keyword,
               location: location,
               count: click
             },
             success: function(result) {
               if(result.status == true) {
                 var data = result.job;
                 console.log("Data =" + data);
                 var size = data.length;
                 console.log("SIZE  =" + size);
                 var content = '';
                 if(size != 0) {
                   for(var i=0; i< size; i++) {
                     content += `
                     <tr class='clickable-row' data-href="/caterpartsonthefly/job-details/` +  data[i].job_id + `">
                       <td class="text-center">
                         <img src="/caterpartsonthefly/assets/logo/` + data[i].company_logo +`" alt="">
                       </td>
                       <td class="text-left">
                         <span class="hgreen">` + data[i].job_title +`</span><br/> ` + data[i].company_name + `
                       </td>
                       <td class="text-left"> ` + data[i].job_location + ` </td>
                       <td class="text-right">
                         <span class="hgreenbig">` + data[i].job_type_name + `</span><br/>Posted ` + data[i].days +`  days ago
                       </td>
                     </tr>`;
                   }
                   $('#job_listing').append(content);
                 }
                 else {
                   $('#more_job_container a').hide();
                   var t = document.createElement('a');
                   t.title = 'No more jobs to display';
                   t.innerHTML = 'No more jobs to display';
                   t.className = 'no_data';
                  //  var no_data = "No more jobs to display";
                   $('#more_job_container').append(t);
                 }
               }
               else {
                 // error response
               }
             }
  });

});
