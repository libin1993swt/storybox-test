<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use Validator;
use Redirect;
use Hash;
use Auth;

use App\User;

class RegisterController extends Controller
{
    //
    public function register(Request $request) {
    	$data = $request->all();
    	$password = $data['password'];
    	$confirm = $data['confirm_password'];
    	if($password != $confirm) {
    		return redirect('/sign-up')->with('error_message','Password does not match.');
    	}
    	$validator = Validator::make($data, User::$rules);
        if ($validator->fails()) {
              return Redirect::back()->withErrors($validator);
        }
        $hash = Hash::make($password);
        $data['password'] = $hash;
    	User::create($data);
    	return redirect('/login')->with('message','Account created. Login with credentials.');
    }

    public function authenticate(Request $request) {
    	$email = $request['email'];
    	$password = $request['password'];
    	if (Auth::attempt(['email' => $email, 'password' => $password ])) {
    		return redirect()->intended('/dashboard');
    	}
    	else {
    		return redirect('/login')->with('error_message','Email or Password is incorrect.');
    	}
    }

    public function logout() {
      	Auth::logout();
      	return redirect('/login')->with('logout_message', 'You have been successfully logged out!');;
    }
}
