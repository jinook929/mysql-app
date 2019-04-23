<?php
  $host = "www.db4free.net";
  $dbusername = "jinook929";
  $dbpassword = "jc325710";
  $dbname = "joinus_node";

  // Create connection
  $conn = mysqli_connect ($host, $dbusername, $dbpassword, $dbname);
  
$sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql);

$num_rows = mysqli_num_rows($result);
?>
<br>
<!DOCTYPE html>
<html>
    
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Join Us</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400" rel="stylesheet">
    <link rel="stylesheet" href="./app.css">
</head>

<body>
    <div class="flex-container">
        <div class="container">
            <h1>JOIN US</h1>

            <p class="lead"><span>Make a Change in Number!</span> <span>JOIN US with <strong><?php echo "$num_rows"; ?></strong> Others on Our List.</span>
            </p>
            <form method="POST" action='connect.php'>
                <input type="text" class="form" name="email" placeholder="Enter Your Fake Email">
                <button>Join Now</button>
            </form>
        </div>
    </div>

</body>

</html>