<?php

include("process.php"); 

if(empty($_SESSION['username']))
{
   header('Location: '.$_SERVER['HTTP_ORIGIN'].'/dynamic-form/login.php');
}

?>


<html>
    <head>
        <title>Admin templates</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://www.gstatic.com/firebasejs/5.8.2/firebase.js"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <script src="events.js"></script>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="custom.css" >
    </head>
    <body>
        
        <div class="page-width page-container temp_lists">
            <h1>Templates lists</h1>
            <div class="success"></div>
            <div class="admin_templates_lists">
                <div class="temp_header">
                    <div class="buttons_grid">
                        <a class="custom_btn btn btn-primary create_new_temp" href="/dynamic-form/admin.php" >Create New template</a>
                        <a class="custom_btn btn btn-primary get_data_forms" href="/dynamic-form/get_specific_data.php"  >Get specefic form data</a>
                        <a class="btn btn-primary" href="/dynamic-form/logout.php" style="margin-left:5px">logout</a>
                    </div>
                </div>
                <div class="temp_body">
                    <div class="templates_lists_data">
                        <div class="templates_section">
                            <table class="temp_table table table-striped">
                                <tr class="tbl_head_temp"><th>Unique Key</th><th>Template Name</th></tr>
                            </table></div> 
                    </div>
                </div>
            </div>
        </div>
        


<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Delete Template</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Are you sure you want to delete the template
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary confirm_close" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary confirm_delete ">Delete</button>
      </div>
    </div>
  </div>
</div>
        

<div class="custom_spinner hide_me">
    <div class="d-flex justify-content-center">
        <div class="loader"></div>
    </div>
</div>   
        
    </body>
</html>




