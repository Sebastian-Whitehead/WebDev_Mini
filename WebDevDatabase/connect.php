<?php
    if($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['submit'])){
        $connect = mysqli_connect('localhost', 'root', '', 'registration_form') or die("Connection to database failed" .mysqli_connect_error()); #Variable for creating connection
        
        if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['ssn'])){
            $name = $_POST['name'];
            $email = $_POST['email'];
            $ssn = $_POST['ssn'];

            $sql = "INSERT INTO 'users' ('name', 'email', 'ssn') 
            VALUES ('$name', '$email', '$ssn')"; #insert the typed data in database
            
            $query = mysqli_query($connect, $sql);
            if($query){
                echo 'Successful entry';
            }
            else{
                echo 'Error in entry';
            }
            
        }
        
    }
?>