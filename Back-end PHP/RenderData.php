<?php 
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
include 'DbConnect.php';


$objDb = new DbConnect;
$conn = $objDb->connect();


if(mysqli_connect_error()){
  echo mysqli_connect_error();
  exit();
}
$sql ='SELECT * FROM products';
$result = mysqli_query($conn, $sql);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($data);
?>