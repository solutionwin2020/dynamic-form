<?php
    session_start();
   session_destroy();
   header('Location: '.$_SERVER['HTTP_ORIGIN'].'/dynamic-form/login.php');
 ?>