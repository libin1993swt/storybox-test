<div class="form-group {{ $errors->has('email') ? 'has-error' : ''}}">
    {!! Form::label('', '', ['class' => 'col-md-4 control-label']) !!}
    <div class="col-md-12">
      <div class="input-icon">
        <i class="fa fa-user"></i>
        {!! Form::email('email', null, ['class' => 'form-control placeholder-no-fix', 
                                        'placeholder' => 'E-mail',
                                        'id'          => 'email',
                                        'oninput'     => 'email_validation(this);',
                                        'oninvalid'   => 'email_validation(this);',
                                        'required'    => 'true']) !!}
        {!! $errors->first('email', '<p class="help-block">:message</p>') !!}
      </div>

    </div>
</div>
<div class="form-group {{ $errors->has('password') ? 'has-error' : ''}}">
    {!! Form::label('', '', ['class' => 'col-md-4 control-label']) !!}
    <div class="col-md-12">
      <div class="input-icon">
          <i class="fa fa-lock"></i>
        {!! Form::password('password', ['class' => 'form-control placeholder-no-fix', 
                                        'placeholder' => 'Password',
                                        'id'          => 'password',
                                        'oninput'     => 'password_validation(this);',
                                        'oninvalid'   => 'password_validation(this);',
                                        'required' => 'true']) !!}
        {!! $errors->first('password', '<p class="help-block">:message</p>') !!}
      </div>
    </div>
</div>
