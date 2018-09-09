<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    // creation rule
    public static $rules = array( 'name' => 'required',
                                  'email' => 'required | email | unique:users',
                                  'password' => 'required',
                                   );
    
    /**
    * User with url relation.
    */
    public function url() {
      return $this->hasMany('App\URL','id');
    }
}
