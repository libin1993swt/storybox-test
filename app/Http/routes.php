<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', function () {
	return view('login.create');
});

Route::get('/sign-up', function () {
	return view('login.register');
});

Route::post('/register','RegisterController@register');

Route::post('/authenticate','RegisterController@authenticate');

Route::get('/dashboard','DashboardController@dashboard');

Route::get('/urls','URLController@index');

Route::get('/{url}','URLController@original_url');

Route::post('/ajax/url/save','URLController@save_url');

Route::post('/ajax/url','URLController@short_url');

Route::get('/logout','RegisterController@logout');

