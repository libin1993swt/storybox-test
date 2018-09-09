<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <noscript>
      <META HTTP-EQUIV="Refresh" CONTENT="0;URL=error">
    </noscript>


    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Storybox</title>
    <!-- <link rel="shortcut icon" href="/caterpartsonthefly/assets/img/cater_icon/deal_title_icon.ico"/> -->
    <!-- Fonts -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" integrity="sha384-XdYbMnZ/QjLh6iI4ogqCTaIjrFk87ip+ekIjefZch0Y+PvJ8CDYtEs1ipDmPorQ+" crossorigin="anonymous">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700">

    <!-- Styles -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <!-- {{-- <link href="{{ elixir('css/app.css') }}" rel="stylesheet"> --}} -->
    <link href="{{ URL::asset('assets/plugins/uniform/css/uniform.default.css') }}" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/plugins/select2/dist/css/select2.css') }}"/>
    <link rel="stylesheet" href="{{ URL::asset('assets/plugins/data-tables/DT_bootstrap.css') }}"/>
    <!-- <link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.13/css/jquery.dataTables.css"> -->

    <!-- END PAGE LEVEL STYLES -->
    <!-- BEGIN THEME STYLES -->
    <link href="{{ URL::asset('assets/css/style-metronic.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ URL::asset('assets/css/style.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ URL::asset('assets/css/style-responsive.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ URL::asset('assets/css/plugins.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ URL::asset('assets/css/themes/light.css') }}" rel="stylesheet" type="text/css" id="style_color"/>
    <link href="{{ URL::asset('assets/css/pages/tasks.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ URL::asset('assets/css/custom.css') }}" rel="stylesheet" type="text/css"/>

    <!-- Metronics Styles -->
    <link href="{{ URL::asset('assets/plugins/gritter/css/jquery.gritter.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ URL::asset('assets/plugins/bootstrap-daterangepicker/daterangepicker-bs3.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ URL::asset('assets/plugins/fullcalendar/fullcalendar/fullcalendar.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ URL::asset('assets/plugins/jqvmap/jqvmap/jqvmap.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ URL::asset('assets/plugins/jquery-easy-pie-chart/jquery.easy-pie-chart.css') }}" rel="stylesheet" type="text/css"/>
    <!-- END PAGE LEVEL PLUGIN STYLES -->
    <!-- BEGIN THEME STYLES -->
    <!-- <link href=" {{ URL::asset('assets/css/style-metronic.css') }}" rel="stylesheet" type="text/css" /> -->
    <!-- <link href="assets/css/style-metronic.css" rel="stylesheet" type="text/css"/> -->
    <!-- <link href="{{ URL::asset('assets/css/style.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ URL::asset('assets/css/style-responsive.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ URL::asset('assets/css/plugins.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ URL::asset('assets/css/pages/tasks.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ URL::asset('assets/css/themes/default.css') }}" rel="stylesheet" type="text/css" id="style_color"/>
    <link href="{{ URL::asset('assets/css/custom.css') }}" rel="stylesheet" type="text/css"/> -->

    <link href="{{ URL::asset('assets/css/sweetalert.css') }}" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/plugins/bootstrap-fileupload/bootstrap-fileupload.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/plugins/gritter/css/jquery.gritter.css') }}"/>

    <link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/plugins/clockface/css/clockface.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/plugins/bootstrap-wysihtml5/bootstrap-wysihtml5.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/plugins/bootstrap-datepicker/css/datepicker.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/plugins/bootstrap-timepicker/compiled/timepicker.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/plugins/bootstrap-colorpicker/css/colorpicker.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/plugins/bootstrap-daterangepicker/daterangepicker-bs3.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/plugins/bootstrap-datetimepicker/css/datetimepicker.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/plugins/jquery-multi-select/css/multi-select.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/plugins/bootstrap-switch/static/stylesheets/bootstrap-switch-metro.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/plugins/jquery-tags-input/jquery.tagsinput.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/plugins/bootstrap-markdown/css/bootstrap-markdown.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/plugins/jquery-gritter/css/jquery.gritter.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/plugins/dropzone/dropzone.css') }}">
    <!-- <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> -->
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/css/dataTable.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/plugins/file-uploader/jquery.fileuploader.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('assets/plugins/file-uploader/jquery.fileuploader-theme-dragdrop.css') }}">

    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">

    <style>
        body {
            font-family: 'Lato';
        }

        .fa-btn {
            margin-right: 6px;
        }

    </style>
</head>
<body id="app-layout">

    <div class="header navbar navbar-fixed-top">
    	<!-- BEGIN TOP NAVIGATION BAR -->
    	<div class="header-inner">
    		<!-- BEGIN LOGO -->
    		<a class="navbar-brand" href="">
    		<!-- <img src="../../../assets/img/dealicon/admin_logo(1).png" alt="logo" class="img-responsive"/> -->
    		</a>
    		<!-- END LOGO -->
    		<!-- BEGIN RESPONSIVE MENU TOGGLER -->
    		<a href="javascript:;" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
    		<img src="//mightypush.com/caterpartsonthefly/assets/img/menu-toggler.png" alt=""/>
    		</a>
    		<!-- END RESPONSIVE MENU TOGGLER -->
    		<!-- BEGIN TOP NAVIGATION MENU -->
    		<ul class="nav navbar-nav pull-right welcome_user">
          <li class="dropdown user"> <span class="fa fa-user"> </span> Welcome  </li>
    			<!-- BEGIN USER LOGIN DROPDOWN -->
          <!-- <li class="dropdown user">
    				<a href="#" class="dropdown-toggle">
            <span class="fa fa-user"> </span>
    				<span class="username">
    					Welcome Administrator
    				</span>
    				</a>
    			</li> -->
    		</ul>
    		<!-- END TOP NAVIGATION MENU -->
    	</div>
    	<!-- END TOP NAVIGATION BAR -->
    </div>
    <!-- END HEADER -->
    <div class="clearfix">
    </div>
    <!-- BEGIN CONTAINER -->
    <div class="page-container">
      <br><br>
    	<!-- BEGIN SIDEBAR -->
    	<div class="page-sidebar-wrapper">
    		<div class="page-sidebar navbar-collapse collapse">
    			<!-- BEGIN SIDEBAR MENU -->
    			<ul class="page-sidebar-menu">
    				<li class="sidebar-toggler-wrapper">
    					<!-- BEGIN SIDEBAR TOGGLER BUTTON -->
              <img src="http://mightypush.com/caterpartsonthefly/assets/img/cater_icon/logo.png" alt="logo" class="img-responsive cater_logo"/>

    					<div class="sidebar-toggler hidden-phone">
    					</div>
    					<!-- BEGIN SIDEBAR TOGGLER BUTTON -->
    				</li>
    				<li class="sidebar-search-wrapper">
              <br>
    					<!-- BEGIN RESPONSIVE QUICK SEARCH FORM -->
    					<!-- <form class="sidebar-search" action="extra_search.html" method="POST">
    						<div class="form-container">
    							<div class="input-box">
    								<a href="javascript:;" class="remove"></a>
    								<input type="text" placeholder="Search..."/>
    								<input type="button" class="submit" value=" "/>
    							</div>
    						</div>
    					</form> -->
    					<!-- END RESPONSIVE QUICK SEARCH FORM -->
    				</li>
    				<li class="start {{ Request::segment(1) === 'dashboard' ? 'active' : null }}">
    					<a href="{{ url('/dashboard')}}">
    					<i class="fa fa-home"></i>
    					<span class="title">
    						Dashboard
    					</span>
    					<span class="selected">
    					</span>
    					</a>
    				</li>
    				<li class="{{ Request::segment(1) === 'urls' ? 'active' : null }}" data-placement="right">
    					<a href="{{ url('/urls')}}">
    					<i class="fa fa-user"></i>
    					<span class="title">
    						All URLs
    					</span>
              <span class="selected">
    					</span>
    					</a>
    				</li>

			
            <li id="frontend-link" class="{{ Request::segment(1) === 'logout' ? 'active' : null }}" data-placement="right">
    					<a href="{{ url('/logout')}}">
    					<i class="fa fa-user-md"></i>
    					<span class="title">
    						Logout
    					</span>
              <span class="selected">
    					</span>
    					</a>
    				</li>
    			</ul>
          <br><br>

    			<!-- END SIDEBAR MENU -->
    		</div>
    	</div>
    	<!-- END SIDEBAR -->
    	<!-- BEGIN CONTENT -->
    	<div class="page-content-wrapper">
    		<div class="page-content">
    			<!-- BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM-->
    			<div class="modal fade" id="portlet-config" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    				<div class="modal-dialog">
    					<div class="modal-content">
    						<div class="modal-header">
    							<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
    							<h4 class="modal-title">Modal title</h4>
    						</div>
    						<div class="modal-body">
    							 Widget settings form goes here
    						</div>
    						<div class="modal-footer">
    							<button type="button" class="btn blue">Save changes</button>
    							<button type="button" class="btn default" data-dismiss="modal">Close</button>
    						</div>
    					</div>
    					<!-- /.modal-content -->
    				</div>
    				<!-- /.modal-dialog -->
    			</div>
    			<!-- /.modal -->
    			<!-- END SAMPLE PORTLET CONFIGURATION MODAL FORM-->


          @yield('content')


    <div class="footer">
    	<div class="footer-inner">
    		 2017 &copy; Cater Parts.
    	</div>
    	<div class="footer-tools">
    		<span class="go-top">
    			<i class="fa fa-angle-up"></i>
    		</span>
    	</div>
    </div>
    <!-- <div class="footer custom-footer">
      <div class="footer-inner">
         2017 &copy; Cater Parts.
      </div>
    </div> -->



    <!-- JavaScripts -->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js" integrity="sha384-I6F5OKECLVtK/BL+8iSLDEHowSAfUo76ZL9+kGAgTRdiByINKJaqTPH/QVNS1VDb" crossorigin="anonymous"></script> -->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script> -->
    <!-- <script src="//cdnjs.cloudflare.com/ajax/libs/validate.js/0.11.1/validate.min.js"></script> -->


    <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"> </script>
    {{-- <script src="{{ elixir('js/app.js') }}"></script> --}}

    <!-- Metronics JS -->
    <script src="{{ URL::asset('assets/plugins/jquery-1.10.2.min.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/plugins/jquery-migrate-1.2.1.min.js') }}" type="text/javascript"></script>
    <!-- IMPORTANT! Load jquery-ui-1.10.3.custom.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip -->
    <script src="{{ URL::asset('assets/plugins/jquery-ui/jquery-ui-1.10.3.custom.min.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/plugins/bootstrap/js/bootstrap.min.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/plugins/bootstrap-hover-dropdown/twitter-bootstrap-hover-dropdown.min.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/plugins/jquery-slimscroll/jquery.slimscroll.min.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/plugins/jquery.blockui.min.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/plugins/jquery.cokie.min.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/plugins/uniform/jquery.uniform.min.js') }}" type="text/javascript"></script>
    <script type="text/javascript" src="{{ URL::asset('assets/plugins/select2/dist/js/select2.min.js') }}"></script>
    <!-- END CORE PLUGINS -->
    <!-- BEGIN PAGE LEVEL PLUGINS -->

    <script src="{{ URL::asset('assets/plugins/flot/jquery.flot.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/plugins/flot/jquery.flot.resize.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/plugins/jquery.pulsate.min.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/plugins/bootstrap-daterangepicker/moment.min.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/plugins/bootstrap-daterangepicker/daterangepicker.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/plugins/gritter/js/jquery.gritter.js') }}" type="text/javascript"></script>
    <!-- IMPORTANT! fullcalendar depends on jquery-ui-1.10.3.custom.min.js for drag & drop support -->
    <script src="{{ URL::asset('assets/plugins/fullcalendar/fullcalendar/fullcalendar.min.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/plugins/jquery-easy-pie-chart/jquery.easy-pie-chart.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/plugins/jquery.sparkline.min.js') }}" type="text/javascript"></script>
    <!-- END PAGE LEVEL PLUGINS -->
    <!-- BEGIN PAGE LEVEL SCRIPTS -->
    <script src="{{ URL::asset('assets/scripts/app.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/scripts/parsley.min.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/scripts/index.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/scripts/tasks.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/scripts/sweetalert.min.js') }}" type="text/javascript"></script>

    <script type="text/javascript" src="{{ URL::asset('assets/plugins/fuelux/js/spinner.min.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('assets/plugins/ckeditor/ckeditor.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('assets/plugins/bootstrap-fileupload/bootstrap-fileupload.js') }}"></script>

    <script type="text/javascript" src="{{ URL::asset('assets/plugins/bootstrap-wysihtml5/wysihtml5-0.3.0.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('assets/plugins/bootstrap-wysihtml5/bootstrap-wysihtml5.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('assets/plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('assets/plugins/clockface/js/clockface.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('assets/plugins/bootstrap-daterangepicker/moment.min.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('assets/plugins/bootstrap-daterangepicker/daterangepicker.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('assets/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('assets/plugins/jquery-inputmask/jquery.inputmask.bundle.min.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('assets/plugins/jquery.input-ip-address-control-1.0.min.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('assets/plugins/jquery-multi-select/js/jquery.multi-select.js') }}"></script>
    <!-- <script type="text/javascript" src="{{ URL::asset('assets/plugins/jquery-multi-select/js/jquery.quicksearch.js') }}"></script> -->
    <script src="{{ URL::asset('assets/plugins/jquery.pwstrength.bootstrap/src/pwstrength.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/plugins/bootstrap-switch/static/js/bootstrap-switch.min.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/plugins/jquery-tags-input/jquery.tagsinput.min.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/plugins/bootstrap-markdown/js/bootstrap-markdown.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/plugins/bootstrap-markdown/lib/markdown.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/plugins/bootstrap-touchspin/bootstrap.touchspin.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/plugins/jquery-gritter/js/jquery.gritter.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/plugins/jquery.blinker.js') }}" type="text/javascript"></script>
    <script src="{{ URL::asset('assets/plugins/dropzone/dropzone.js') }}" type="text/javascript"></script>

    <!-- State Data Script -->
    <script type="text/javascript" src="{{ URL::asset('assets/plugins/data-tables/jquery.dataTables.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('assets/plugins/data-tables/DT_bootstrap.js') }}"></script>
    <script src="{{ URL::asset('assets/scripts/table-advanced.js') }}"></script>
    <script src="{{ URL::asset('assets/plugins/file-uploader/jquery.fileuploader.js') }}" type="text/javascript"></script>    <!-- <script src="{{ URL::asset('assets/plugins/formstone-upload/dist/js/core.js') }}" type="text/javascript"></script> -->
    <!-- <script src="{{ URL::asset('assets/plugins/formstone-upload/dist/js/upload.js') }}" type="text/javascript"></script> -->
    <!-- END PAGE LEVEL SCRIPTS -->
    <script>
        jQuery(document).ready(function() {
           App.init(); // initlayout and core plugins
           // Index.init();
           // Index.initJQVMAP(); // init index page's custom scripts
           // Index.initCalendar(); // init index page's custom scripts
           // Index.initCharts(); // init index page's custom scripts
           // Index.initChat();
           // Index.initMiniCharts();
           // Index.initDashboardDaterange();
           // Index.initIntro();
           // Tasks.initDashboardWidget();
        });


        </script>





</body>
</html>
