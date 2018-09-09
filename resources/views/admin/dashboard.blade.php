@extends('layouts.admin')

@section('content')
<script src="{{ URL::asset('assets/plugins/jquery-1.10.2.min.js') }}" type="text/javascript"></script>
<script src="{{ URL::asset('assets/plugins/jquery-gritter/js/jquery.gritter.js') }}" type="text/javascript"></script>
<script type="text/javascript" src="{{ URL::asset('assets/plugins/data-tables/jquery.dataTables.js') }}"></script>
<script>
$(document).ready(function() {

  // $('#demo').DataTable({
  //
  //   bProcessing : true,
  //   bServerSide : true,
  //   sAjaxSource: "scripts/post.php",
  //   sServerMethod: "POST",
  //
  //
  //   aLengthMenu: [
  //     [10, 20, 50, 100, -1],
  //     [10, 20, 50, 100, "All"]
  //   ]
  //
  // });
  // var manufacturer_length = $('#manufacturer_length');
  // var manufacturer_filter = $('#manufacturer_filter');

  // manufacturer_length[0].lastElementChild.firstElementChild.style.float = "right";
  // manufacturer_length[0].firstElementChild.style.lineHeight = "32px";
});
</script>
<!-- Breadcrumb Section -->
<div class="row">
  <div class="col-md-12">
    <h3 class="page-title">
    Dashboard <small>statistics and more</small>
    </h3>
    <ul class="page-breadcrumb breadcrumb">
      <li>
        <i class="fa fa-home"></i>
        <a href="{{url('/admin/dashboard')}}">Home</a>
        <i class="fa fa-angle-right"></i>
      </li>
      <li>
        <a href="{{ url('/admin/dashboard')}}">Dashboard</a>
      </li>
    </ul>
  </div>
</div>

@if(Session::has('message'))
  <p class="alert {{ Session::get('alert-class','alert-success') }}">{{ Session::get('message') }}</p>
@endif

<!-- Tile Section -->
<div class="row">
  <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
    <div class="dashboard-stat blue">
      <div class="visual">
        <i class="fa fa-users"></i>
      </div>
      <div class="details">
        <div class="number">
           
        </div>
        <div class="desc">
           Total URLs
        </div>
      </div>
      <a class="more" href="{{ url('/admin/parts')}}">
      View more <i class="m-icon-swapright m-icon-white"></i>
      </a>
    </div>
  </div>
  <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
    <div class="dashboard-stat green">
      <div class="visual">
        <i class="fa fa-cogs"></i>
      </div>
      <div class="details">
        <div class="number">
           
        </div>
        <div class="desc">
           Duplicate URLs
        </div>
      </div>
      <a class="more" href="{{ url('/admin/manual')}}">
      View more <i class="m-icon-swapright m-icon-white"></i>
      </a>
    </div>
  </div>

</div>

<!-- Recent Order Section -->
<div class="row">
  <div class="col-md-12">
    <!-- BEGIN BORDERED TABLE PORTLET-->
    
  </div>
</div>

<!-- Scripts -->

<script>




</script>
@endsection
