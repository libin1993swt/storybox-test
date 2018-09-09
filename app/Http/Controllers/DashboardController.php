<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use Auth;

use App\URL;

class DashboardController extends Controller
{
    public function dashboard() {
    	$name = Auth::user()->name;
    	$id = Auth::user()->id;
    	$urls = URL::where('user_id',$id)->get();
    	$count = sizeof($urls);
    	$duplicate_count = 0;

    	foreach ($urls as $data) {
    		$temp = 0;
    		foreach ($urls as $value) {
    			$temp = $temp + 1;
    			if($data->url == $value->url) {
    				if($temp >=2) {
    					$duplicate_count = $duplicate_count + 1;
    				}
    			}
    		}
    	}
    	return view('admin.dashboard',compact('count','duplicate_count','name'));
    }
}

