<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\URL;

use Auth;
use Validator;
use Redirect;

class URLController extends Controller
{
    //n
    public function index() {
        $name = Auth::user()->name;
    	$id = Auth::user()->id;
    	$urls = URL::where('user_id',$id)->orderBy('url_id','desc')->get();
    	return view('admin.urls.index',compact('urls','name'));
    }

    public function save_url(Request $request) {
    	$id = Auth::user()->id;
    	$data = $request->all();
    	$data['user_id'] = $id;
    	$validator = Validator::make($data, URL::$rules);
        if ($validator->fails()) {
              return Redirect::back()->response($validator);
        }
        URL::create($data);
        $urls = URL::where('user_id',$id)->orderBy('url_id','desc')->get();
    	return response()->json(['status' => true,'urls' => $urls]);
    }

    public function generateRandomString() {
    	$length = 8;
	    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	    $charactersLength = strlen($characters);
	    $randomString = '';
	    for ($i = 0; $i < $length; $i++) {
	        $randomString .= $characters[rand(0, $charactersLength - 1)];
	    }
	    return $randomString;
	}

	public function short_url(Request $request) {
		$url = $request['url'];

		$urls = URL::all();
		$count = sizeof($urls);
		$count = $count + 1;
		$string = $this->generateRandomString();

		return response()->json(['status' => true, 'count' => $count, 'string' => $string ]);
	}

	public function original_url($url) {
        $id = Auth::user()->id;
        $data = URL::where('user_id',$id)->where('short',$url)->get();

        $size = sizeof($data);
        if($size > 0) {
            $original_url = $data[0]->url;
            return redirect($original_url);
        }
        else {
            return redirect()->back();
        }	
	}
}
