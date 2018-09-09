<div class="form-group {{ $errors->has('question') ? 'has-error' : ''}}">
    {!! Form::label('question', 'Question', ['class' => 'col-md-4 control-label']) !!}
    <div class="col-md-6">
        {!! Form::text('question', null, ['class' => 'form-control']) !!}
        {!! $errors->first('question', '<p class="help-block">:message</p>') !!}
    </div>
</div><div class="form-group {{ $errors->has('answer') ? 'has-error' : ''}}">
    {!! Form::label('answer', 'Answer', ['class' => 'col-md-4 control-label']) !!}
    <div class="col-md-6">
        {!! Form::textarea('answer', null, ['class' => 'form-control']) !!}
        {!! $errors->first('answer', '<p class="help-block">:message</p>') !!}
    </div>
</div>

<div class="form-group">
    <div class="col-md-offset-4 col-md-4">
        {!! Form::submit(isset($submitButtonText) ? $submitButtonText : 'Create', ['class' => 'btn btn-primary']) !!}
    </div>
</div>
