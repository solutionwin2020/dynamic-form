<?php include("process.php") ?>

<html>
    <head>
        <title>
            Form Data
        </title>
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
        <div class="page-width page-container form_data_csf">
            <h2 style="text-align:center">Form Data</h2>
            <div class="success" style="text-align:center"></div>
        <div class="user_data_grid">
            <div class="keys_data">
                <table class="user_data_table table table-striped">
                    <tr class="table_head"></tr>
                    <tr class="table_values"></tr>
                </table>
            </div>
            <div class="crud_btn" style="display:flex;">
                <button type="btn" class="update_btn">Edit Data</button>
                <button type="button" class="delete_btn" data-toggle="modal" data-target="#exampleModalCenter" style="margin-left: 20px;">Delete Data</button>
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
        Are you sure you want to delete the Data
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary close_modal" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary delete_data_confirm ">Delete</button>
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

