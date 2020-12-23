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
    <body class="bg_color">
        <div class="page-width page-container edit_templates_csf">
        <div class="grid container">
            <div class="grid__item medium-up--five-sixths medium-up--push-one-twelfth">
              <div class="section-header text-center">
                <h1>Update Template</h1>
              </div>
            <br/>
        		
              <div class="success"></div>
            
              <div class="success_key"></div><br/>
            <div class="admin_options">
            
              <div class="form_options_dropdown row">
                <div class="op_admin col form-inline">
                    <select class="form_options_admin custom-select">
                      <option value="select">select</option>
                      <option value="input_text">Input type text</option>
                      <option value="input_number">Input type number</option>
                      <option value="input_email">Input type email</option>
                      <option value="input_phone">Input type phone</option>
                      <option value="input_radio">Input type radio</option>
                      <option value="input_checkbox">Input type checkbox</option>
                      <option value="textarea">Textarea</option>
                      <option value="dropdown">dropdown menu</option>
                      <option value="save_btn">Save button</option>
                    </select>
                    <!--<input type="text" placeholder="Enter template name" class="input_template_name form-control" style="margin-right: 5px;" required>-->
                  	<button class="update_templates_btn Template btn btn-primary">Save Template</button>
                </div>
                <div class="key_form contact-form col form-inline">
                    <a href="/dynamic-form/admin_templates.php" class="custom_btn btn btn-primary admin_temp_btn">Admin Templates List</a>
                    <a href="/dynamic-form/get_specific_data.php" class="custom_btn btn btn-primary admin_get_data_btn">Get Specific Data of Form</a>
                    <a class="btn btn-primary" href="/dynamic-form/logout.php" style="margin-left:5px">logout</a>
              </div>
              </div>
               
              <div class="admin_btns hide_me form-inline">
                <button class="add_input btn btn-primary">ADD Input Field</button>
                <button class="add_label btn btn-primary">ADD label</button>
                <button class="add_textarea btn btn-primary">ADD Textarea</button>
                <button class="add_dropdown btn btn-primary">ADD dropdown</button>
                <button class="add_save_btn btn btn-primary">ADD save button</button>
              </div>
              
              <div class="input_attributes_data hide_me form-inline">
              	<input type="text" placeholder="Enter label text"  class="input_lbl_title form-control"/>
              	<input name="required" type="checkbox" id="sQa4K012" class="input_lbl_required" style="width:25px;"><label for="sQa4K012" style="display:inline-block;">Required</label>
        		<button class="add_input_attribute btn btn-primary">ADD Title</button>
              </div>
        
              <div class="radio_attributes_data hide_me form-inline">
                  <div>
                      <input type="text" placeholder="Enter radio button title"  class="radio_lbl_main form-control" value="Select One Option"/>
                      <input type="text" placeholder="Enter same radio name" class="radio_name_value form-control" required style="margin-left:5px" />
                      <input name="required" type="checkbox" class="radio_lbl_required" id="sQa4K0123" style="width:25px;">
                      <label for="sQa4K0123" style="display:inline-block;">Required</label>
                  </div>
                
                <input type="text" placeholder="Enter label text"  class="radio_lbl_title form-control" required />
                <button class="add_radio_attribute btn btn-primary">ADD Attributes</button>
              </div>
              
              <div class="dropdown_attributes_data hide_me form-inline">
                  <div>
                    <input type="text" placeholder="Enter default option"  class="dropdown_lbl_main form-control" value="Choose..." />
                    <input name="required" type="checkbox" id="sQa4K0124" class="dropdown_lbl_required " style="width:25px;">
                    <label for="sQa4K0124" style="display:inline-block;">Required</label>
                  </div>
                <input type="text" placeholder="Create option"  class="dropdown_lbl_title form-control" required/>
                <input type="text" placeholder="Enter option value"  class="dropdown_lbl_val form-control" required/>
        		<button class="add_option_attribute btn btn-primary">ADD option</button>
              </div>
              
            </div>
            
            
            <br /><br />
            <div class="custom_form_dynamic form-vertical">
              

            </div>
              
              <br />
              <div class="response_key"></div>
              
    
    
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

