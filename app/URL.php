<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class URL extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'urls';

    /**
    * The database primary key value.
    *
    * @var string
    */
    protected $primaryKey = 'url_id';

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['user_id', 'url', 'title', 'short_url'];

    // creation rule
    public static $rules = array( 'user_id' => 'required',
    							  'url' => 'required',
                                  'title' => 'required',
                                  'short_url' => 'required',
                                   );
}
