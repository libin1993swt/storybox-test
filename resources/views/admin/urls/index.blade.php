@extends('layouts.admin')

@section('content')

<style type="text/css">
  .mystyle{
    text-align: right;
  }
  .textbox {
    width: 500px;
    padding-bottom: 10px;
  }
</style>
<div class="row">
  <div class="col-md-12">
    <h3 class="page-title">
      Manage URLs
    </h3>
    <ul class="page-breadcrumb breadcrumb">
      <li>
        <i class="fa fa-home"></i>
        <a href="{{ url('/dashboard')}}">Home</a>
        <i class="fa fa-angle-right"></i>
      </li>
      <li>
        <a href="{{ url('/urls')}}">URLs</a>
        <i class="fa fa-angle-right"></i>
      </li>
      <li>
        <a href>Manage URLs</a>
      </li>
    </ul>
  </div>
</div>

    <!-- INFORMATION MESSAGES-->

    @if(Session::has('message'))
      <p class="alert {{ Session::get('alert-class','alert-success') }}">{{ Session::get('message') }}</p>
    @endif

    @if(Session::has('delete_message'))
      <p class="alert {{ Session::get('alert-class','alert-danger') }}">{{ Session::get('delete_message') }}</p>
    @endif

    <input type="hidden" name="_token" id="token" value="{{ csrf_token() }}">

<!-- Show Category Section -->
<div class="row">
  <div class="col-md-12">
    <!-- BEGIN BORDERED TABLE PORTLET-->
    <!-- <div class="portlet box yellow"> -->
      <div class="portlet-title">
        <!-- <div class="caption">
          <i class="fa fa-list"></i> User Listing
        </div> -->

        <div class="actions">
          <!-- <a href="#" class="btn yellow btn-sm"><i class="fa fa-pencil"></i> Edit</a> -->
          <!-- <a href="#" class="btn btn-primary"><i class="fa fa-plus"></i> Add User</a> -->
        </div>
      </div>
      <div class="portlet-body">

        <div class="row">
          

          <div class="col-md-12 col-xs-12">
            
            <div class="form-group mystyle">  
            <label class="control-label col-md-3">URL&nbsp;<span class="input-warning">*</span></label>
            <div class="col-md-9">
              {!! Form::text( 'url', null, ['class' => 'form-control textbox',
                              'id'                            => 'url',
                              'placeholder'                   => 'Enter URL',
                              'required'                      => 'true'
                              ]) !!}
              
              {!! $errors->first('name', '<p class="help-block">:message</p>') !!}
            </div>
            <br><br>
            </div>

            <div class="form-group mystyle">
            <label class="control-label col-md-3">Title&nbsp;<span class="input-warning">*</span></label>
            <div class="col-md-9">
              {!! Form::text( 'title', null, ['class' => 'form-control textbox',
                              'id'                            => 'title',
                              'placeholder'                   => 'Enter Title',
                              'required'                      => 'true'
                              ]) !!}
              {!! $errors->first('name', '<p class="help-block">:message</p>') !!}
            </div>
            <br><br>
            </div>

            <div class="form-group mystyle">
            <label class="control-label col-md-3">Short URL&nbsp;<span class="input-warning">*</span></label>
            <div class="col-md-9">
              {!! Form::text( 'short_url', null, ['class' => 'form-control textbox',
                              'id'                            => 'short_url',
                              'placeholder'                   => 'Enter Short URL',
                              'readonly'                      => 'true',
                              'required'                      => 'true'
                              ]) !!}
              {!! $errors->first('name', '<p class="help-block">:message</p>') !!}
            </div>
            <br><br>
            </div>

            <div class="form-group mystyle">
              <div class="col-md-5">
                <input type="button" class="btn btn-success" id="submit" value="Submit">
              </div>
              <br><br>
            </div>
          
          </div>
              

            
          
          
          
        </div>

        <div class="portlet-body">
            <input type="hidden" name="_token" id="token" value="<?php echo csrf_token(); ?>">
          <table class="table table-striped table-bordered table-hover" id="admin_user">
          <thead>
          <tr>
            <th> # </th>
            <th> Title </th>
            <th> URL </th>
            <th> Short URL </th>
            <th> Created Date </th>
            <th> Action </th>
            
          </tr>
          </thead>
          <tbody>
            <?php $i = 1; ?>
          @foreach($urls as $data)  
          <tr>
            <td> <?php echo $i; $i++; ?></td>
            <td> {{ $data->title }} </td>
            <td> {{ $data->url }}</td>
            <td class="short_url"> {{ $data->short_url }} </td>
            <td> {{ $data->created_at }}</td>
            <td>
                <button class="btn btn-success btn-sm copy" onclick="copyToClipboard(this)"> <span class="fa fa-unlock"> </span> &nbsp;Copy Short URL </button> 
            </td>
          @endforeach
          </tr>


          </tbody>
          </table>


          <br>

        </div>

        <input type="text" class="form-control" id="copy_text" readonly>

      </div>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js" type="text/javascript"></script>
<script src="{{ URL::asset('assets/plugins/jquery-gritter/js/jquery.gritter.js') }}" type="text/javascript"></script>
<script type="text/javascript" src="{{ URL::asset('assets/plugins/data-tables/jquery.dataTables.js') }}"></script>
<script src="{{ URL::asset('assets/scripts/sweetalert.min.js') }}" type="text/javascript"></script>
<script src="{{ URL::asset('assets/my_script/short_url.js') }}" type="text/javascript"></script>
<script src="{{ URL::asset('assets/my_script/save_short_url.js') }}" type="text/javascript"></script>
<script src="{{ URL::asset('assets/my_script/copy_url.js') }}" type="text/javascript"></script>
<script>




  document.title ="Storybox";
  $(document).ready(function() {

    $('#admin_user').DataTable({

      aLengthMenu: [
        [10, 20, 50, 100, -1],
        [10, 20, 50, 100, "All"]
      ]

    });
    var user_length = $('#admin_user_length');
    var user_filter = $('#admin_user_filter');

    user_length[0].lastElementChild.firstElementChild.style.float = "right";
    user_length[0].firstElementChild.style.lineHeight = "32px";
  });

  
</script>

@endsection
