
<?php 

    require __DIR__.'/vendor/autoload.php';
    
    use Kreait\Firebase\Factory;
    use Kreait\Firebase\ServiceAccount;
    
    $serviceAccount = ServiceAccount::fromJsonFile('firebaseCredentials.json');
    $firebase = (new Factory)
    ->withServiceAccount($serviceAccount)
    ->withDatabaseUri('https://solutionwin.firebaseio.com')
    ->create();
    $database = $firebase->getDatabase();
    
    function clean($string) {
       $string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.
       $string = preg_replace('/[^A-Za-z0-9_\-]/', '', $string); // Removes special chars.
    
       return preg_replace('/-+/', '-', $string); // Replaces multiple hyphens with single one.
    }
    
    session_start();
    
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        try{
            if(isset($_POST['username']))
            {
                $get_username = $_POST['username'];
                $get_password = $_POST['password'];
                $reference = $database->getReference('credentials');
                $data = json_encode($reference->getSnapshot()->getValue());
                $someArray = json_decode($data, true);
                $key = array_keys($someArray);
                $cond_chk = 0;
                foreach($key as $index => $new_key){
                    $username = $key[$index];
                    $password = $someArray[$username];
                    if($username === $get_username && $password === $get_password){
                        $cond_chk = 1;
                        $_SESSION['username'] = $username;
                        echo "1";
                    }
                }
                if($cond_chk==0){
                    echo "0";
                }
            }
            
            if(isset($_POST['html']))
            {
                $html = $_POST['html'];
                $template_name = $_POST['templates_name'];
                $postdata=[];
                $postdata[$template_name] = $html;
                $postRef = $database->getReference('templates')->push($postdata);
                $postKey = $postRef->getKey();
                echo $postKey;
            }
            
            if(isset($_POST['updated_html']))
            {
                $html = $_POST['updated_html'];
                $template_key = $_POST['template_key'];
                $temp_name = '';
                $postdata=[];
                $reference = $database->getReference('templates');
                $data = json_encode($reference->getSnapshot()->getValue());
                $someArray = json_decode($data, true);
                $chk = sizeof($someArray);
                foreach ($someArray as $key => $value) {
                    if($key == $template_key ){
                        $key_chk = array_keys($value);
                        $temp_name = $key_chk[0];
                    }else{
                        $chk = $chk - 1;
                    }
                }
                
                
                if($chk == 0){
                    echo "0";
                }else{
                    $postdata[$temp_name] = $html;
                    $database->getReference('templates/'.$template_key.'')->update($postdata);
                    echo "1";
                }
                
            }
            
            if(isset($_POST['form_data_template_key']))
            {   
                $data = $_POST;
                $postdata=[];
                foreach($data as $key=>$item){
                    $key=clean($key);
                    $postdata[$key]=$item;
                }
                $chk = 0;
                try{
                            // check form id
                    $data_key = $_POST['form_data_template_key'];
                    $reference = $database->getReference('users');
                    $data = json_encode($reference->getSnapshot()->getValue());
                    $someArray = json_decode($data, true);
                    // $chk = sizeof($someArray);
                    foreach ($someArray as $key => $value) {
                        if($key == $data_key ){
                            $chk = 1;
                        }
                    }
                }catch(Exception $error){}  
                if($chk == 0){
                    $postRef = $database->getReference('users')->push($postdata);
                    $postKey = $postRef->getKey();
                    $prev_link = preg_replace('/\?message.*/', '', $_SERVER['HTTP_REFERER']);
                    header('Location: '.$prev_link.'?message='.$postKey.'');
                }else{
                    unset($postdata['form_data_template_key']);
                    $postRef = $database->getReference('users/'.$data_key.'')->update($postdata);
                    header('Location: '.$_SERVER['HTTP_ORIGIN'].'/dynamic-form/form-data.php?key='.$data_key.'&updated=update');
                }
                
            }
            
            if(isset($_POST['delete_key'])){
                $data_key = $_POST['delete_key'];
                $temp_key = $_POST['temp_key'];
                $chk = 0;
                try{
                            // check form id
                    $reference = $database->getReference('users');
                    $data = json_encode($reference->getSnapshot()->getValue());
                    $someArray = json_decode($data, true);
                    $chk = sizeof($someArray);
                    foreach ($someArray as $key => $value) {
                        if($key == $data_key ){
                            $chk = 1;
                        }
                    }
                }catch(Exception $error){}
                
                if($chk == 1){
                    $postRef = $database->getReference('users/'.$data_key.'')->set(null);
                    // header('Location: '. $_SERVER['SERVER_NAME'].'/dynamic-form/form.php?key='.$temp_key.'');
                    echo "1";
                }else{
                    echo "0";
                }
            }
            
            if(isset($_POST['delete_template'])){
                $data_key = $_POST['delete_template'];
                $chk = 0;
                try{
                            // check form id
                    $reference = $database->getReference('templates');
                    $data = json_encode($reference->getSnapshot()->getValue());
                    $someArray = json_decode($data, true);
                    $chk = sizeof($someArray);
                    foreach ($someArray as $key => $value) {
                        if($key == $data_key ){
                            $chk = 1;
                        }
                    }
                }catch(Exception $error){}
                
                if($chk == 1){
                    $postRef = $database->getReference('templates/'.$data_key.'')->set(null);
                    echo "1";
                }else{
                    echo "0";
                }
            }
            
        }catch(\Exception $ex){
            echo $ex->getMessage();
        }
    }
    
    

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
       
       if(isset($_GET['template_key'])){  
            try{
                $data_key = $_GET['template_key'];
                $reference = $database->getReference('templates');
                $data = json_encode($reference->getSnapshot()->getValue());
                $someArray = json_decode($data, true);
                $chk = sizeof($someArray);
                foreach ($someArray as $key => $value) {
                    if($key == $data_key ){
                        $key_chk = array_keys($value);
                        $new_key = $key_chk[0];
                        print_r($value[$new_key]);
                    }else{
                        $chk = $chk - 1;
                    }
                }
            }catch(Exception $error){}  
                            // chk for form key (optional)
                if($chk == 0 ){
                    try{
                        $reference = $database->getReference('users');
                        $data = json_encode($reference->getSnapshot()->getValue());
                        $someArray = json_decode($data, true);
                        $chk = sizeof($someArray);
                        foreach ($someArray as $key => $value) {
                            if($key == $data_key ){
                                print_r(json_encode($value));
                            }else{
                                $chk = $chk - 1;
                            }
                        }
                    }catch(Exception $error){}
                }
                
                if($chk == 0){
                    echo $chk;
                }
         }
    
        if(isset($_GET['all_templates'])){
            $reference = $database->getReference('templates');
            $data = json_encode($reference->getSnapshot()->getValue());
            echo ($data);
        }
        
        if(isset($_GET['edit_template_key'])){  
            try{
                $data_key = $_GET['edit_template_key'];
                $reference = $database->getReference('templates');
                $data = json_encode($reference->getSnapshot()->getValue());
                $someArray = json_decode($data, true);
                $chk = sizeof($someArray);
                foreach ($someArray as $key => $value) {
                    if($key == $data_key ){
                        $key_chk = array_keys($value);
                        $new_key = $key_chk[0];
                        print_r($value[$new_key]);
                    }
                }
            }catch(Exception $error){}
       }
       
       
       
    }
    

  
?>