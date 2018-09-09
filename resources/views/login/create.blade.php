@extends('layouts.app')

@section('content')


    <!-- BEGIN LOGO -->
    <div class="logo">
    	<img src="assets/img/cater_icon/logo.png" alt=""/>
    </div>
    <!-- END LOGO -->
    <!-- BEGIN LOGIN -->
    <div class="content">
    	<!-- BEGIN LOGIN FORM -->
        {!! Form::open(['url' => '/authenticate', 'class' => 'form-horizontal login-form', 'files' => true, 'method' => 'POST']) !!}
            <input type="hidden" name="_token" value="{{ csrf_token() }}">
    		<h3 class="form-title">Login to your account</h3>

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


    		<div class="alert alert-danger display-hide">
    			<button class="close" data-close="alert"></button>
                <!-- INFORMATION MESSAGES-->

    			<span>
    				 Enter any username and password.
    			</span>
    		</div>
        <!-- Adding login form  -->
        @include ('login.form')

    		<div class="form-actions">
    			<label class="checkbox">
    			<button type="submit" class="btn blue pull-right">
    			     Login <i class="m-icon-swapright m-icon-white"></i>
    			</button>
    		</div>

    		<div class="forget-password">
                <h4>Forgot your password ?</h4>
                <p>
                     No worries, click <a href="javascript:;" id="forget-password">here</a>
                    to reset your password.
                </p>
            </div>
    		<div class="create-account">
    			<p>
    				 Don't have an account yet ?&nbsp; <a href="javascript:;" id="register-btn">Create an account</a>
    			</p>
    		</div>
  {!! Form::close() !!}
    	<!-- END LOGIN FORM -->
    	<!-- BEGIN FORGOT PASSWORD FORM -->
    	<form class="forget-form" action="index.html" method="post">
    		<h3>Forgot Password ?</h3>
    		<p>
    			 Enter your e-mail address below to reset your password.
    		</p>
    		<div class="form-group">
    			<div class="input-icon">
    				<i class="fa fa-envelope"></i>
    				<input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="Email" name="email"/>
    			</div>
    		</div>
    		<div class="form-actions">
    			<button type="button" id="back-btn" class="btn">
    			<i class="m-icon-swapleft"></i> Back </button>
    			<button type="submit" class="btn blue pull-right">
    			Submit <i class="m-icon-swapright m-icon-white"></i>
    			</button>
    		</div>
    	</form>
    	<!-- END FORGOT PASSWORD FORM -->
    	<!-- BEGIN REGISTRATION FORM -->
    	<form class="register-form" action="index.html" method="post">
    		<h3>Sign Up</h3>
    		<p>
    			 Enter your personal details below:
    		</p>
    		<div class="form-group">
    			<label class="control-label visible-ie8 visible-ie9">Full Name</label>
    			<div class="input-icon">
    				<i class="fa fa-font"></i>
    				<input class="form-control placeholder-no-fix" type="text" placeholder="Full Name" name="fullname"/>
    			</div>
    		</div>
    		<div class="form-group">
    			<!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
    			<label class="control-label visible-ie8 visible-ie9">Email</label>
    			<div class="input-icon">
    				<i class="fa fa-envelope"></i>
    				<input class="form-control placeholder-no-fix" type="text" placeholder="Email" name="email"/>
    			</div>
    		</div>
    		<div class="form-group">
    			<label class="control-label visible-ie8 visible-ie9">Address</label>
    			<div class="input-icon">
    				<i class="fa fa-check"></i>
    				<input class="form-control placeholder-no-fix" type="text" placeholder="Address" name="address"/>
    			</div>
    		</div>
    		<div class="form-group">
    			<label class="control-label visible-ie8 visible-ie9">City/Town</label>
    			<div class="input-icon">
    				<i class="fa fa-location-arrow"></i>
    				<input class="form-control placeholder-no-fix" type="text" placeholder="City/Town" name="city"/>
    			</div>
    		</div>
    		<div class="form-group">
    			<label class="control-label visible-ie8 visible-ie9">Country</label>
    			<select name="country" id="select2_sample4" class="select2 form-control">
    				<option value=""></option>

    			</select>
    		</div>
    		<p>
    			 Enter your account details below:
    		</p>
    		<div class="form-group">
    			<label class="control-label visible-ie8 visible-ie9">Username</label>
    			<div class="input-icon">
    				<i class="fa fa-user"></i>
    				<input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="Username" name="username"/>
    			</div>
    		</div>
    		<div class="form-group">
    			<label class="control-label visible-ie8 visible-ie9">Password</label>
    			<div class="input-icon">
    				<i class="fa fa-lock"></i>
    				<input class="form-control placeholder-no-fix" type="password" autocomplete="off" id="register_password" placeholder="Password" name="password"/>
    			</div>
    		</div>
    		<div class="form-group">
    			<label class="control-label visible-ie8 visible-ie9">Re-type Your Password</label>
    			<div class="controls">
    				<div class="input-icon">
    					<i class="fa fa-check"></i>
    					<input class="form-control placeholder-no-fix" type="password" autocomplete="off" placeholder="Re-type Your Password" name="rpassword"/>
    				</div>
    			</div>
    		</div>
    		<div class="form-group">
    			<label>
    			<input type="checkbox" name="tnc"/> I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
    			</label>
    			<div id="register_tnc_error">
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
    	 2017 &copy; Caterparts
    </div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js" integrity="sha384-I6F5OKECLVtK/BL+8iSLDEHowSAfUo76ZL9+kGAgTRdiByINKJaqTPH/QVNS1VDb" crossorigin="anonymous"></script>
<script src="assets/plugins/backstretch/jquery.backstretch.min.js" type="text/javascript"></script>
<script src="{{ URL::asset('assets/validations/admin/login/login_validation.js') }}" type="text/javascript"></script>

<script>
$.backstretch([
    "assets/img/bg/1.jpg",
    "assets/img/bg/2.jpg",
    "assets/img/bg/3.jpg",
    "assets/img/bg/4.jpg"
  ], {duration: 4000, fade:'slow'});
</script>
@endsection
