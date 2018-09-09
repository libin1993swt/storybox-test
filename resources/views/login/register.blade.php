@extends('layouts.app')

@section('content')


    <!-- BEGIN LOGO -->
    <div class="logo">
    	
    </div>
    <!-- END LOGO -->
    <!-- BEGIN LOGIN -->
    <div class="content">
    	

        @if(Session::has('message'))
          <p class="alert {{ Session::get('alert-class','alert-success','login-error') }}">
          <span class="alert alert-success">{{ Session::get('message') }}</span></p>
        @endif

        @if(Session::has('logout_message'))
          <p class="alert {{ Session::get('alert-class','alert-success','login-error') }}">
          <span class="alert alert-success">{{ Session::get('logout_message') }}</span></p>
        @endif

        @if(Session::has('error_message'))
          <p class="alert {{ Session::get('alert-class','bg-danger','login-error') }}">
          <span class="alert-danger">{{ Session::get('error_message') }}</span></p>
        @endif


    	
    	<!-- BEGIN REGISTRATION FORM -->
    	<form class="register" action="{{ url('/register') }}" method="post">
            <input type="hidden" name="_token" value="{{ csrf_token() }}">
    		<h3>Sign Up</h3>
    		<p>
    			 Enter details below:
    		</p>
    		<div class="form-group">
    			<label class="control-label">Full Name</label>
    			<div class="input-icon">
    				<i class="fa fa-font"></i>
    				<input class="form-control placeholder-no-fix" type="text" placeholder="Full Name" name="name" oninput="name_validation(this);" oninvalid="name_validation(this);" required />
    			</div>
    		</div>
    		<div class="form-group">
    			<!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
    			<label class="control-label">Email</label>
    			<div class="input-icon">
    				<i class="fa fa-envelope"></i>
    				<input class="form-control placeholder-no-fix" type="text" placeholder="Email" name="email" oninput="email_validation(this);" oninvalid="email_validation(this);" required />
    			</div>
    		</div>
    		
    		<div class="form-group">
    			<label class="control-label">Password</label>
    			<div class="input-icon">
    				<i class="fa fa-lock"></i>
    				<input class="form-control placeholder-no-fix" type="password" autocomplete="off" id="register_password" placeholder="Password" name="password" oninput="new_password_validation(this);" oninvalid="new_password_validation(this);" required />
    			</div>
    		</div>
    		<div class="form-group">
    			<label class="control-label">Re-type Your Password</label>
    			<div class="controls">
    				<div class="input-icon">
    					<i class="fa fa-check"></i>
    					<input class="form-control" type="password" autocomplete="off" placeholder="Re-type Your Password" name="confirm_password" oninput="confirm_password_validation(this);" oninvalid="confirm_password_validation(this);" required />
    				</div>
    			</div>
    		</div>
    		
    		<div class="form-actions">
    			<button id="register-back-btn" type="button" class="btn">
    			<i class="m-icon-swapleft"></i> Back </button>
    			<button type="submit" id="register-submit-btn" class="btn blue pull-right">
    			Sign Up <i class="m-icon-swapright m-icon-white"></i>
    			</button>
    		</div>
    	</form>
    	<!-- END REGISTRATION FORM -->
    </div>
    <!-- END LOGIN -->

    <!-- BEGIN COPYRIGHT -->
    <div class="copyright">
    	 2018 &copy; Storybox
    </div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js" integrity="sha384-I6F5OKECLVtK/BL+8iSLDEHowSAfUo76ZL9+kGAgTRdiByINKJaqTPH/QVNS1VDb" crossorigin="anonymous"></script>
<script src="assets/plugins/backstretch/jquery.backstretch.min.js" type="text/javascript"></script>
<script src="{{ URL::asset('assets/my_script/signup_validation.js') }}" type="text/javascript"></script>

<script>
$.backstretch([
    "assets/img/bg/1.jpg",
    "assets/img/bg/2.jpg",
    "assets/img/bg/3.jpg",
    "assets/img/bg/4.jpg"
  ], {duration: 4000, fade:'slow'});
</script>
@endsection
