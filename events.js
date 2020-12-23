
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  
  
$(document).ready(function(){
  
  var dropdown_val = '';
  
  $(".form_options_admin").change(function(){
    
    var value = $(this).find("option:selected").val();
    dropdown_val = value;
    if(value == "input_radio")
    {
        $(".radio_lbl_title").attr("placeholder","Radio label title");
        $('.dropdown_lbl_title').removeClass("_error");
        $('.dropdown_lbl_val').removeClass("_error");
        $(".custom_dynamic_form").append('<div><label style="display:block;">Select One Option</label></div>');
        $(".radio_attributes_data").addClass("show_me");
  	    $('.input_attributes_data,.dropdown_attributes_data').removeClass("show_me");   
    }
    else if(value == "dropdown")
    {
        $('.dropdown_lbl_title').removeClass("_error");
        $('.dropdown_lbl_val').removeClass("_error");
        $(".custom_dynamic_form").append('<div class='+value+'><select class="'+makeid()+'" name="dropdown_selected__'+makeid()+'" ><option value>Choose...</option></select></div>');
        $(".dropdown_attributes_data").addClass("show_me");
        $('.radio_attributes_data,.input_attributes_data').removeClass("show_me");
    }
    else if(value == "save_btn")
    {
      $(".custom_dynamic_form").append('<div class="button_from"><button class="submit_form_btn btn" type="submit">Save <i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i></button></div>');
      $('.radio_attributes_data,.dropdown_attributes_data,.input_attributes_data').removeClass("show_me");
    }else{
        
        if(value == "input_text"){
            $(".input_lbl_title").attr("placeholder","Text label title");
        }else if(value == "input_number"){
            $(".input_lbl_title").attr("placeholder","Number label title");
        }else if(value == "input_email"){
            $(".input_lbl_title").attr("placeholder","Email label title");
        }else if(value == "input_phone"){
            $(".input_lbl_title").attr("placeholder","Phone label title");
        }else if(value == "input_checkbox"){
            $(".input_lbl_title").attr("placeholder","Checkbox label title");
        }else if(value == "textarea"){
            $(".input_lbl_title").attr("placeholder","Textarea label title");
        }
        
        $('.input_lbl_title').removeClass("_error");
        $(".input_attributes_data").addClass("show_me");
  	    $('.radio_attributes_data,.dropdown_attributes_data').removeClass("show_me");
    }
    
    
    setTimeout(function(){
      $('.form_options_admin').prop('selectedIndex',0);},800)
  });
  
  $(".add_input_attribute").click(function(){
    
    var value = dropdown_val;
    $('.input_lbl_title').removeClass("_error");
    var lbl_attr = $('.input_lbl_title').val().replace(/ /g,"_");
    if(lbl_attr !== '')
    {
            if($('.input_lbl_required').prop("checked")){
                var req = "required";
                var label_text = $('.input_lbl_title').val()+'*';
            }else{
                var req = "";
                var label_text = $('.input_lbl_title').val();
            }
            if(value == "input_text")
            {
            	$(".custom_dynamic_form").append('<div class='+value+'><label></label><input name="'+lbl_attr+"__"+makeid()+'"  type="text" id='+value+' '+req+' /></div>');
            }
            else if(value == "input_number")
            {
            	$(".custom_dynamic_form").append('<div class='+value+'><label></label><input name="'+lbl_attr+"__"+makeid()+'"  type="number" id='+value+' '+req+' /></div>'); 
            }
            else if(value == "input_email")
            {
            	$(".custom_dynamic_form").append('<div class='+value+'><label></label><input name="'+lbl_attr+"__"+makeid()+'"  type="email" id='+value+' '+req+' /></div>');    
            }
            else if(value == "input_phone")
            {
            	$(".custom_dynamic_form").append('<div class='+value+'><label></label><input name="'+lbl_attr+"__"+makeid()+'"   type="tel" pattern="[0-9\-]*" id='+value+' '+req+' /></div>');  
            }
            else if(value == "input_checkbox")
            {
              	var unq_id = makeid();
            	$(".custom_dynamic_form").append('<div class='+value+'><input name="'+lbl_attr+"__"+makeid()+'" type="checkbox" id='+makeid()+' value="'+lbl_attr+'" '+req+' /><label for='+makeid()+'></label></div>');    
            }
            else if(value == "textarea")
            {
            	$(".custom_dynamic_form").append('<div class='+value+'><label></label><textarea name='+lbl_attr+"__"+makeid()+' '+req+' ></textarea></div>');
            }
            
            $(".custom_dynamic_form").find("label:last").text(label_text);
            $('.input_lbl_title').val("");
            $('.input_lbl_required').prop("checked",false);
    }else{
        $('.input_lbl_title').addClass("_error");
        return ;
    }
    
  });
  
  $(".add_radio_attribute ").click(function(){
    var unq_id = makeid();
    var value = dropdown_val;
    var radio_val = $('.radio_lbl_title').val().replace(/ /g,"_");
    var radio_name_ = $('.radio_name_value').val().replace(/ /g,"_");
    $('.radio_lbl_title').removeClass("_error");
    $('.radio_name_value').removeClass("_error");
    if(radio_val === ''){
        $('.radio_lbl_title').addClass("_error");
        return ;
    }else if(radio_name_ === '' ){
        $('.radio_name_value').addClass("_error");
        return;
    }else{
        if($('.radio_lbl_required').prop("checked")){
            var req = "required";
        }else{
            var req = "";
        }
        $(".custom_dynamic_form").append('<div class='+value+'><input name="" type="radio" id='+unq_id+"_"+radio_val+' '+req+' value="'+radio_val+'" /><label for='+unq_id+"_"+radio_val+' ></label></div>');
        $(".custom_dynamic_form").find("label:last").text($('.radio_lbl_title').val());
        $(".custom_dynamic_form").find("input:last").attr("name",$('.radio_name_value').val());
        $('.radio_lbl_title').val("");
        // $('.radio_name_value').val("");
        $('.radio_lbl_required').prop("checked",false);
    }

  });
  
  $(document).on('change','.radio_lbl_main',function(){
        var value = $(this).val();
        if(value !== '' && value !== undefined && value !== null){
              $("#dynamic_form").find('label:last').text(value)
        }
  });
  
  $(".add_option_attribute").click(function(){
      var title = $('.dropdown_lbl_title').val();
      var value = $('.dropdown_lbl_val').val();
      $('.dropdown_lbl_title').removeClass("_error");
      $('.dropdown_lbl_val').removeClass("_error");
      if(title === ''){
          $('.dropdown_lbl_title').addClass("_error");
          return;
      }else if(value === ''){
          $('.dropdown_lbl_val').addClass("_error");
          return;
      }else{
            $(".custom_dynamic_form").find("select:last").attr("required",$('.dropdown_lbl_required').prop("checked"))
            $(".custom_dynamic_form").find("select:last").append('<option value="'+value+'">'+title+'</option>');
            $('.dropdown_lbl_val').val("");
            $('.dropdown_lbl_title').val("");
      }

  });
  
  $(document).on('change','.dropdown_lbl_main',function(){
        var value = $(this).val();
        if(value !== '' && value !== undefined && value !== null){
            $(".custom_dynamic_form").find("select:last").find("option:first").text(value);
            $(".custom_dynamic_form").find("select:last").attr("name",value.replace(/ /g, "_")+"__"+makeid());
        }
  });

  $(".save_template_btn").click(function(event){
    event.preventDefault();
    $('.radio_attributes_data,.dropdown_attributes_data,.input_attributes_data').removeClass("show_me");
    if($.trim($(".input_template_name").val()) == ''){
        alert("Template name is required");
    }else{
        if($(".custom_dynamic_form").find(".button_from").length > 0 && $.trim($(".input_template_name").val())!=''){
            try{
            $(".custom_spinner").removeClass("hide_me");
            var html = $(".custom_form_dynamic").html();
            var template_name = $(".input_template_name").val().replace(/ /g,"_");
            var name = makeid();
            $(".custom_dynamic_form").html();
            $(".success,.response_key,.success_key").text("");
            if($.trim($(".custom_dynamic_form").html()) != "")
            {
                $.ajax({
                    url: "/dynamic-form/process.php",
                    type: "post",
                    cache: 'false',
                    data: {html:html,templates_name:template_name}
                }).done(function(response, textStatus, jqXHR){
                    $(".success").append('<h3 style="text-align:center;color:green;">Data Submit Successfully</h3>');
                    $(".custom_spinner").addClass("hide_me");
                    $(".success_key").append('<div><span style="margin-right:10px">Template URL: </span><a href="'+window.location.origin+'/dynamic-form/form.php?key='+$.trim(response)+'" target="_blank">'+window.location.origin+'/dynamic-form/form.php?key='+$.trim(response)+'');
                }).fail(function (jqXHR, textStatus, errorThrown){
                    $(".success").append('<h3 style="text-align:center">Error: Data not submitted successfully</h3>');
                    $(".custom_spinner").addClass("hide_me");
                    console.error(
                        "The following error occurred: "+
                        textStatus, errorThrown
                    );
                });
            }else{
                alert("Please add fields to form")
            }
        }catch(e){
        	console.log("Error ",e);
        }
        }else{alert("Add Save Button")}
    }
  });
  
  $("#get_data_btn").click(function(event){
	event.preventDefault();
	$(".success").text("");
     $(".user_data_table tbody").empty();
      var u_key = $.trim($("#unique_key").val());
      if(u_key !== ""){
          $(".custom_spinner").removeClass("hide_me");
          $.ajax({
                url: "/dynamic-form/process.php",
                type: "get",
                cache: 'false',
                data: {template_key:u_key}
            }).done(function(response, textStatus, jqXHR){
                $(".custom_spinner").addClass("hide_me");
                if(response == 0){
                    $(".success").append('<h3 style="text-align:center">Error: Data Not Get successfully</h3>');
                }
                else if(response !== undefined && response !== '')
                {
                     $(".success").text("");
                     var users = JSON.parse(response);
                     var length = Object.keys(users).length;
                      for(var k=0; k<length; k++){
                           var keys = Object.keys(users)[k].split("__")[0];
                           var values = Object.values(users)[k];
                           if(keys == "form_data_template_key"){
                            $('.user_data_table').attr('template_key',values);
                            }else{
                                $(".user_data_table tbody").append('<tr><th>'+keys+'</th><td>'+values+'</td></tr>');
                            }
                      }
                }
            }).fail(function (jqXHR, textStatus, errorThrown){
                $(".success").append('<h3 style="text-align:center">Error: Data Not Get successfully</h3>');
                $(".custom_spinner").addClass("hide_me");
                console.error(
                    "The following error occurred: "+
                    textStatus, errorThrown
                );
            });
      }
  });
  
  

  
  
  
  if(window.location.href.indexOf("form.php?key") > -1){
    var u_key = window.location.href.split("key=")[1];
    if(u_key.indexOf("?message") > -1){
        $(".message").empty();
        $(".message").append('<h2 style="color:green;">Data submit successfully</h2><a href="https://solutionwin.net/dynamic-form/form-data.php?key='+u_key.split("?message=")[1]+'" target="_blank">https://solutionwin.net/dynamic-form/form-data.php?key='+u_key.split("?message=")[1]+'</a>');
        u_key = u_key.split("?message")[0];
    }
  	$(".success").text("");
     $(".get_form").empty();
     $(".custom_spinner").removeClass("hide_me");
      if(u_key !== ""){
          $.ajax({
                url: "/dynamic-form/process.php",
                type: "get",
                cache: 'false',
                data: {template_key:u_key}
            }).done(function(response, textStatus, jqXHR){
                 $(".custom_spinner").addClass("hide_me");
                if(response == 0){
                    $(".success").append('<h3 style="text-align:center">Error</h3>');
                }
                else
                {       $(".success").text("");
                        $(".custom_form_response").append(response);
                        setTimeout(function(){
                            $(".custom_form_response form").attr("template_id",u_key);
                            $(".form_data_template_key").val(u_key);
                        },500)
                }
            }).fail(function (jqXHR, textStatus, errorThrown){
                $(".success").append('<h3 style="text-align:center">Errory</h3>');
                $(".custom_spinner").addClass("hide_me");
                console.error(
                    "The following error occurred: "+
                    textStatus, errorThrown
                );
            });
      }
  }
  
  if(window.location.href.indexOf("form-data.php?key") > -1){
    var u_key = window.location.href.split("key=")[1];
    if(u_key.indexOf("&updated")>-1){
        u_key = window.location.href.split("key=")[1].split("&updated")[0];
    }
      $(".success").text("");
      $(".user_data_table tbody").empty();
      $(".custom_spinner").removeClass("hide_me");
      if(u_key !== ""){
          $.ajax({
                url: "/dynamic-form/process.php",
                type: "get",
                cache: 'false',
                data: {template_key:u_key}
            }).done(function(response, textStatus, jqXHR){
                // console.log("getting: ", response )
                // if(response == 0){
                //     $(".success").append('<h3 style="text-align:center">Error: Data Not Get successfully</h3>');
                // }
                // else 
                $(".custom_spinner").addClass("hide_me");
                if(response !== '')
                {
                     $(".success").text("");
                     var users = JSON.parse(response);
                     var length = Object.keys(users).length;
                      for(var k=0; k<length; k++){
                           var keys = Object.keys(users)[k].split("__")[0];
                           var values = Object.values(users)[k];
                        if(keys == "form_data_template_key"){
                            $('.user_data_table').attr('template_key',values);
                        }else{
                            $(".user_data_table tbody").append('<tr><th>'+keys+'</th><td>'+values+'</td></tr>');
                        }
                      }
                }
            }).fail(function (jqXHR, textStatus, errorThrown){
                $(".custom_spinner").addClass("hide_me");
                $(".success").append('<h3 style="text-align:center">Error: Data Not Get successfully</h3>');
                console.error(
                    "The following error occurred: "+
                    textStatus, errorThrown
                );
            });
      }

    }

  $(".update_btn").click(function(event){
      event.preventDefault();
      var temp_id = $(".user_data_table").attr("template_key");
      if(window.location.href.indexOf("?key=")>-1){
          var form_id = window.location.href.split("?key=")[1];
          if(window.location.href.split("?key=")[1].indexOf("&updated")>-1){
              form_id = window.location.href.split("?key=")[1].split("&updated")[0];
          }
      }
      window.location.href='/dynamic-form/update-form.php?edit_temp_id='+temp_id+'&data_id='+form_id+' ';
  })
  
  if(window.location.href.indexOf("edit_temp_id")>-1){
      
      var template_id = window.location.href.split("?edit_temp_id=")[1].split("&")[0];
      var form_id = window.location.href.split("?edit_temp_id=")[1].split("&data_id=")[1];
      $(".update_form").empty();
      $(".success").empty();
      var chk_template = 0;
        if(template_id != "" && template_id != undefined && form_id !='' && form_id!= undefined )
        {
          $(".custom_spinner").removeClass("hide_me");
          $.ajax({
                url: "/dynamic-form/process.php",
                type: "get",
                cache: 'false',
                data: {template_key:template_id}
            }).done(function(response, textStatus, jqXHR){
                if(response == 0){
                    $(".custom_spinner").addClass("hide_me");
                    $(".success").append('<h3 style="text-align:center">Error</h3>');
                    chk_template = 1;
                }
                else
                {       $(".success").text("");
                        $(".update_form").append(response);
                        setTimeout(function(){
                            $(".update_form form").attr("template_id",template_id);
                            $(".form_data_template_key").val(form_id);
                        },500)
                }
            }).fail(function (jqXHR, textStatus, errorThrown){
                $(".success").append('<h3 style="text-align:center">Error</h3>');
                $(".custom_spinner").addClass("hide_me");
                chk_template = 1;
                console.error(
                    "The following error occurred: "+
                    textStatus, errorThrown
                );
            });
                        // get data of form
            if(chk_template == 0){
                 $.ajax({
                url: "/dynamic-form/process.php",
                type: "get",
                cache: 'false',
                data: {template_key:form_id}
                }).done(function(response, textStatus, jqXHR){
            if(response !== '')
            {
                 $(".success").text("");
                 var users = JSON.parse(response);
                 var length = Object.keys(users).length;
                 
                     setTimeout(function(){
                      for(var k=0; k<length; k++){
                          var keys = Object.keys(users)[k];
                          var values = Object.values(users)[k];
                        if(keys == "form_data_template_key"){
                            // $('.form_data_template_key').val(values);
                        }else{
                            
                            try{
                                  $("#dynamic_form").find("input").each(function(){
                            
                                      if($(this).attr("type") == 'checkbox'){
                                          var name_ = $(this).attr("name");
                                          var value = $(this).val();
                                          if(name_ == keys){
                                              if(values == value){
                                                  $(this).prop('checked',true);
                                              }
                                          }
                                      }
                                      else if($(this).attr("type") == 'radio')
                                      { 
                                          var name_ = $(this).attr("name");
                                          var value = $(this).val();
                                            if(name_ == keys)
                                            {
                                                if(values == value){
                                                    $(this).prop("checked",true)
                                                  } 
                                                }
                             
                                      }else{
                                         var name_ = $(this).attr("name");
                                         if(name_ == keys){
                                            $(this).val(values);   
                                         } 
                                    }
                                      
                                  });
                                  $("#dynamic_form").find("textarea").each(function(){
                                      var name_ = $(this).attr("name");
                                      if(name_ == keys){
                                          $(this).val(values);
                                      }
                                  });
                                  $("#dynamic_form").find("select").each(function(){
                                      var name_ = $(this).attr("name");
                                      if(name_ == keys){
                                        var value = $(this).val(values);
                                      }
                                  });
                                }catch(e){
                                	console.log("Error ",e);
                                }
                            
                        }
                    }
                    $(".custom_spinner").addClass("hide_me");
                 },300);
                  setTimeout(function(){
                    $('.button_from').append('<button type="btn" class="go_back_button btn" > Back </button>');
                  },500);
            }
                }).fail(function (jqXHR, textStatus, errorThrown){
            $(".success").append('<h3 style="text-align:center">Error: Data Not Get successfully</h3>');
            console.error(
                "The following error occurred: "+
                textStatus, errorThrown
            );
        });   
            }else{
                $(".success").append('<h3 style="text-align:center">Error Template Not Found</h3>');
            }
         
        }
        
  }
  
  if(window.location.href.indexOf("form-data.php")>-1){
          $(".success").empty();
          if(window.location.href.indexOf("&updated") > -1){
               setTimeout(function(){
                    $(".success").append('<h3>Data update successfully</h3>');
                },2000)
            }
      }
  
  $(".delete_btn").click(function(event){
      event.preventDefault();
      var template_id = $(".user_data_table").attr("template_key"),form_id="";
      if(window.location.href.indexOf("?key=") > -1){
         form_id = window.location.href.split("?key=")[1];
         if(window.location.href.split("?key=")[1].indexOf("&updated")>-1){
              form_id = window.location.href.split("?key=")[1].split("&updated")[0];
          }
        }
        $(".success").empty();
        $('.delete_data_confirm').click(function(){
            $(".close_modal").trigger("click");
            $(".custom_spinner").removeClass("hide_me");
            if(template_id != ''){
                $.ajax({
                    url: "/dynamic-form/process.php",
                    type: "post",
                    cache: 'false',
                    data: {delete_key:form_id,temp_key:template_id}
                }).done(function(response, textStatus, jqXHR){
                    if(Number(response) == 0){
                        $(".custom_spinner").addClass("hide_me");
                        $(".success").append('<h3 style="text-align:center">Error</h3>');
                    }
                    else
                    {   
                        $(".crud_btn").hide();
                        $(".success").append('<h3>Data Deleted Successfully</h3>');
                        setTimeout(function(){
                            $(".custom_spinner").addClass("hide_me");
                            window.location.href = window.location.origin+"/dynamic-form/form.php?key="+template_id;
                        },1000);
                    }
                }).fail(function (jqXHR, textStatus, errorThrown){
                    $(".custom_spinner").addClass("hide_me");
                    $(".success").append('<h3 style="text-align:center">Errory</h3>');
                    console.error(
                        "The following error occurred: "+
                        textStatus, errorThrown
                    );
                });
            }
        })
    })
  
  $(document).on("click",".go_back_button",function(e){
      e.preventDefault();
      if(window.location.href.indexOf("&data_id=")>-1){
          var data_id = window.location.href.split("&data_id=")[1];
      }
      window.location.href = window.location.origin+"/dynamic-form/form-data.php?key="+data_id;
  });
  
  if(window.location.href.indexOf("admin_templates.php") > -1){
      $(".custom_spinner").removeClass("hide_me");
      get_all_templates();
  }

  $(document).on("click",".delete_temp",function(){
      var key = $(this).parent("td").parent("tr").find("th").text();
    //   confirm_delete
    $(".confirm_delete").click(function(){
        $(".success").empty();
        $(".confirm_close").trigger("click");
        $(".custom_spinner").removeClass("hide_me");
          $.ajax({
            url: "/dynamic-form/process.php",
            type: "post",
            cache: 'false',
            data: {delete_template:key}
         }).done(function(response, textStatus, jqXHR){
             $(".custom_spinner").addClass("hide_me");
            if(response == 0){
                $(".success").append('<h4 style="text-align:center">Error</h4>');
            }
            else
            {       
                $(".success").append('<h4 style="text-align:center;">Template Remove Successfully</h4>');
                get_all_templates();
            }
         }).fail(function (jqXHR, textStatus, errorThrown){
             $(".custom_spinner").addClass("hide_me");
            $(".success").append('<h4 style="text-align:center">Error</h4>');
            console.error(
                "The following error occurred: "+
                textStatus, errorThrown
            );
        });  
    })
    
  })

  $(document).on("click",".edit_temp",function(){
    var key= $(this).parent("td").parent("tr").find("th").text();
    window.location.href = '/dynamic-form/edit_template.php?edit_admin_temp_key='+$.trim(key)+'';
  });
  
  if(window.location.href.indexOf('?edit_admin_temp_key') > -1 ){
    $(".custom_spinner").removeClass("hide_me");
    var key = window.location.href.split("edit_admin_temp_key=")[1];
      $.ajax({
        url: "/dynamic-form/process.php",
        type: "get",
        cache: 'false',
        data: {edit_template_key:key}
      }).done(function(response, textStatus, jqXHR){
        if(response == 0){
            $(".success").append('<h3 style="text-align:center">Error</h3>');
        }
        else
        {       
            $(".success").text("");
            $(".custom_form_dynamic").append(response);
            setTimeout(function(){
                $(".custom_form_dynamic form").attr("template_id",key);
                $(".form_data_template_key").val(key);
                $(".button_from").remove();
                $(".custom_dynamic_form").find("div").each(function(){
                    var cls = $.trim($(this).attr('class'));
                   $(this).append('<button class="btn btn-primary remove_div btn-sm" >Remove</button>');
                });
            },500)
        }
        $(".custom_spinner").addClass("hide_me");
      }).fail(function (jqXHR, textStatus, errorThrown){
          $(".custom_spinner").addClass("hide_me");
        $(".success").append('<h4 style="text-align:center">Errory</h4>');
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
      });  
  }
  
  $(document).on("click",".remove_div",function(){
    $(this).parent().remove();
  });
  
  $(".update_templates_btn").click(function(event){
    event.preventDefault();
    $('.radio_attributes_data,.dropdown_attributes_data,.input_attributes_data').removeClass("show_me");
    if($(".custom_dynamic_form").find(".button_from").length > 0 ){
        try{
        $(".custom_dynamic_form").find("div").each(function(){
           $(this).find('.remove_div').remove();
        });
        $(".custom_spinner").removeClass("hide_me");
        var html = $(".custom_form_dynamic").html();
        var name = makeid();
        $(".success,.response_key,.success_key").text("");
        var temp_key = window.location.href.split("?edit_admin_temp_key=")[1];
        if($.trim($(".custom_dynamic_form").html()) != "")
        {
            $.ajax({
                url: "/dynamic-form/process.php",
                type: "post",
                cache: 'false',
                data: {updated_html:html,template_key:temp_key}
            }).done(function(response, textStatus, jqXHR){
                if(response == 0){
                    $(".success").append('<h3 style="text-align:center">Error</h3>');
                }
                else
                {   $(".success").text("");
                    $(".success").append('<h3 style="text-align:center">Template Update Successfully</h3>');
                    $(".success_key").append('<div><span style="margin-right:10px">Template URL: </span><a href="'+window.location.origin+'/dynamic-form/form.php?key='+$.trim(temp_key)+'">'+window.location.origin+'/dynamic-form/form.php?key='+$.trim(temp_key)+'');
                }
                $(".custom_spinner").addClass("hide_me");
                
            }).fail(function (jqXHR, textStatus, errorThrown){
                $(".success").append('<h3 style="text-align:center">Error: Data not submitted successfully</h3>');
                $(".custom_spinner").addClass("hide_me");
                console.error(
                    "The following error occurred: "+
                    textStatus, errorThrown
                );
            });
        }else{
            alert("Please add fields to form")
        }
    }catch(e){
    	console.log("Error ",e);
    }
    }else{alert("Add Save Button")}
    
    
  });
  
  $(".login_btn").click(function(event){
      event.preventDefault();
    var user_name = $.trim($(".login_username").val());
    var password = $.trim($(".login_password").val());
    if(user_name != '' && password != '' ){
        $(".success").empty();
        $(".custom_spinner").removeClass("hide_me");
        $.ajax({
            url:'/dynamic-form/process.php',
            type:"post",
            cache:"false",
            data:{username:user_name,password:password}
        }).done(function(response, textStatus, jqXHR){
            console.log("res: ",response);
            if(response == 0){
                $(".success").append('<h4 style="text-align:center; margin-bottom:20px;color:red;font-family: mascot;">Username and passowrd is incorrect</h4>');
            }else{
                 window.location.href = window.location.origin+"/dynamic-form/admin_templates.php";
            }
            $(".custom_spinner").addClass("hide_me");
        }).fail(function (jqXHR, textStatus, errorThrown){
            $(".success").append('<h3 style="text-align:center">Error: not loggedin successfully</h3>');
            $(".custom_spinner").addClass("hide_me");
        })
    }else{
          alert("Both username and password required");
        }
  })
  
  
  
  
  
  
}); 
  
  
  
  
function get_all_templates(){
    
    $(".templates_section .table tbody").empty();
      $.ajax({
        url: "/dynamic-form/process.php",
        type: "get",
        cache: 'false',
        dataType: 'json',
        data: {all_templates:"all"}
      }).done(function(response, textStatus, jqXHR){
           $(".custom_spinner").addClass("hide_me");
            // setTimeout(function(){
                var length = Object.keys(response).length;
                $(".templates_section .table tbody").append('<tr class="tbl_head_temp"><th>Unique Key</th><th>Template Name</th><th></th><th></th></tr>');
                for(var i=0; i<length; i++){
                    var unique_key = Object.keys(response)[i];
                    var template_name = Object.keys(response[unique_key])[0];
                    $(".templates_section .table tbody").append('<tr><th>'+unique_key+'</th><td>'+template_name+'</td><td><button class="edit_temp btn btn-primary custom_btn">Edit Template</button></td><td><button class="delete_temp btn btn-danger custom_btn" type="button" data-toggle="modal" data-target="#exampleModalCenter">Delete Template</button></td></tr>');
                }
            // },300)
        
      }).fail(function (jqXHR, textStatus, errorThrown){
          $(".custom_spinner").addClass("hide_me");
            $(".success").append('<h3 style="text-align:center">Errory</h3>');
            console.error(
                "The following error occurred: "+
                textStatus, errorThrown
            );
        });  
    
}  
  
  
  
  















//   $(document).on("click",".submit_form_btn",function(event){
//     event.preventDefault();
//     $(".success").empty();
//     var form_data = {};
//     try{
//       form_data["template_id"] = $.trim($("#dynamic_form").attr("template_id"));
//       $("#dynamic_form").find("input").each(function(){

//           if($(this).attr("type") == 'checkbox'){
//               var value = $(this).prop('checked');
//               var name_ = $(this).attr("name");
//               form_data[name_] = value;
//           }
//           else if($(this).attr("type") == 'radio')
//           { 
//                 if($(this).prop("required") === true)
//                 {
                        // var chk = 0;
                        // var chk_name = $(this).attr("name");
                        // $("#dynamic_form").find("input").each(function(){
                        
                        // if($(this).attr("name") == chk_name ){
                        //     if($(this).prop("checked") == true){
                        //         chk = 1;
                        //     }
                        // }
                        // })
                        // if(chk == 0){
                        //     $(this).addClass("error");
                        //     event.preventDefault();
                        //     return;
                        // }else{
        //               var name_ = $(this).attr("name");
        //               var value = $(this).val();
        //               if(value != "" && value != null && value != undefined){
        //                 form_data[name_] =value;
        //               }
                        // }
//                 }else{
        //               var name_ = $(this).attr("name");
        //               var value = $(this).val();
        //               if(value != "" && value != null && value != undefined){
        //                 form_data[name_] =value;
        //               } 
                    // }
 
//           }else{
    //          var name_ = $(this).attr("name");
//               var value = $(this).val();
//               if(value != "" && value != null && value != undefined){
//                 form_data[name_] =value;
//               }  
// }
          
//       });
//       $("#dynamic_form").find("textarea").each(function(){
//           var name_ = $(this).attr("name");
//           var value = $(this).val();
//           if(value != "" && value != null && value != undefined ){
//             form_data[name_] = value;
//           }
//       });
//       $("#dynamic_form").find("select").each(function(){
//           var name_ = "selected_option__"+makeid();
//           var value = $(this).find("option:selected").val();
//           if(value != "" && value != null && value != undefined ){
//             form_data[name_] = value;
//           }
//       });
//     }catch(e){
//     	console.log("Error ",e);
//     }
    
//     if(form_data != null && form_data != undefined){
//         $.ajax({
//         url: "/dynamic-form/process.php",
//         type: "post",
//         cache: 'false',
//         data: {form_data:JSON.stringify(form_data)}
//         }).done(function(response, textStatus, jqXHR){
//             console.log("rs ",response);
//             $(".success").append('<h3 style="text-align:center">Data Submit Successfully</h3>');
//             $(".response_key").text("Form data url: " + ''+window.location.origin+'/dynamic-form/form-data.php?key='+$.trim(response)+'' );
//         }).fail(function (jqXHR, textStatus, errorThrown){
//             $(".success").append('<h3 style="text-align:center">Error: Data not submitted successfully</h3>');
//             console.error(
//                 "The following error occurred: "+
//                 textStatus, errorThrown
//             );
//         });
//     }
    
//     });  
