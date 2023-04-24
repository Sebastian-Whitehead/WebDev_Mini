<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF-8">
    <meta name = "viewport" content = "width=device-width, initial-scale = 1.0">
    <title> Registration form </title>
</head>

<h1> Register for the newsletter</h1>
<body bgcolor ="ADD8E6">
    <div><h2>Registration form</h2></div>
    <form action ='connect.php' method = "POST"> <!--file we will create later to connect registration page to database -->
        <label for ="User"> Name:</label><br>
        <input type ='text' name = 'name' id ="name" required> <br> <br>
        
        <label for ="email"> Email: </label> <br>
        <input type ='email' name = 'email' id ="email" required> <br> <br>
       
        <label for ="socialSecuritySumber"> social security number </label> <br>
        <input type ='text' name = 'ssn' id ="ssn" required> <br> <br>

        <input type ='submit' name = 'submit' id = "submit" />   
    </form>
</body>
</html>