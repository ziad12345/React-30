<?php 
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");

    include 'DbConnect.php';



    $objDb = new DbConnect;
	$conn = $objDb->connect();


    if(mysqli_connect_error()){
		echo mysqli_connect_error();
		exit();
	} else {
		$idArray = $_POST["idArray"];
		
		
          
			$sql = "DELETE FROM products WHERE id = $idArray";
			$res = mysqli_query($conn, $sql);
			if($res){
					echo "Deleted data successfully!";
				}
				else{
					echo "Error!";
				}
				
		
		$conn->close();
        
    }

?>