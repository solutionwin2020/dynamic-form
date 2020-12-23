<?php include("process.php") ?>

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
    <body class="bg_color">
        
        <div class="page-width page-container login_form">
            <h1>Login Form</h1>
            <div class="success"></div>
            <div class="admin_login_form">
                <div class="login_form_">
                    <form method="post">
                      <div class="form-group">
                        <label for="user_name">Enter Username</label>
                        <input type="text" class="form-control login_username" id="user_name" aria-describedby="user_name" placeholder="Enter Username" required>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control login_password" id="exampleInputPassword1" placeholder="Password" required>
                      </div>
                      <button type="btn" class="btn btn-primary login_btn">Submit</button>
                    </form>
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




