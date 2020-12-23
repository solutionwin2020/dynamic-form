<?
include("process.php"); 

if(empty($_SESSION['username']))
{
   header('Location: '.$_SERVER['HTTP_ORIGIN'].'/dynamic-form/login.php');
}

?>

<html>
    <head>
        <title>Admin Form</title>
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
        <div class="admin_panel_csf">
        <div class="grid container">
            <div class="grid__item medium-up--five-sixths medium-up--push-one-twelfth">
              <div class="section-header text-center">
                <h2>Get Specific Form Data</h2>
              </div>
            <br/>
        		
              <div class="success"></div>
            
              <div class="success_key"></div><br/>
            <div class="admin_options">
            
              <div class="form_options_dropdown row">
                <div class="key_form contact-form col form-inline">
                <div class="grid">
                  <div class="grid__item medium-up--one-half">
                    <input type="text" id="unique_key"  placeholder="Enter Key to get data" class="form-control">
                  </div>
                </div>
                <button type="btn" id="get_data_btn" class="btn btn-primary">Get Data</button>
              </div>
              <div class="key_form contact-form col form-inline">
                    <a href="/dynamic-form/admin_templates.php" class="custom_btn btn btn-primary admin_temp_btn">Admin Templates List</a>
                    <a href="/dynamic-form/admin.php" class="custom_btn btn btn-primary admin_get_data_btn">Create New Form</a>
                    <a class="btn btn-primary" href="/dynamic-form/logout.php" style="margin-left:5px">logout</a>
              </div>
              </div>
 
            </div>
            <br />
            
            <div class="custom_form_dynamic form-vertical">
              <form id="dynamic_form" class="custom_dynamic_form" action="/dynamic-form/process.php" method="post">
                  <input type="hidden" class="form_data_template_key" name="form_data_template_key" value="" />
              </form>

            </div>
              
            <div class="user_data_grid">
                <div class="keys_data">
                    <table class="user_data_table table table-striped">
                        <tr class="table_head"></tr>
                        <tr class="table_values"></tr>
                    </table>
                </div>
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

