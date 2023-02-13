<?php 
	header('Access-Control-Allow-Origin: *');
    include 'DbConnect.php';


	class Add {
		public $conn;

		private $name;
		private $SKU;
		private $price;
		private $special;
		private $value;
		private $mass;

		
		function setName($name) { 
			$this->name = $name; 
			}
		function setSKU($SKU) { 
			$this->SKU = $SKU; 
			}
		function setPrice($price) { 
			$this->price = $price; 
			}
		
		function setSpecial($special) { 
			$this->special = $special; 
			}
		
		function setValue($value) { 
			$this->value = $value; 
			}
			
		function setMass($mass) { 
			$this->mass = $mass; 
			}	  
			
		
		public function get() {
			return [
				$this->name,
				$this->SKU,
				$this->price,
				$this->special,
				$this->value,
				$this->mass
				];
			}
		public function __construct()  
		{  
			$objDb = new DbConnect;
			$this->conn = $objDb->connect();  
			if(!$this->conn)  
			{  
				echo 'Database Connection Error ' . mysqli_connect_error($this->conn);  
			}  
		}

		public function insertsingle()  
		{  
			$product = $this->get();
			$string = "INSERT INTO products (name,SKU,price,special,value,mass) VALUES (?, ?, ?, ?, ?, ?)";
			$stmt = mysqli_prepare($this->conn, $string);
			$stmt->bind_param("ssisss", $product[0], $product[1], $product[2], $product[3], $product[4], $product[5]);
			$rsint = $stmt->execute();
			return $rsint;
		}
	}



	$data = new Add();
	$data->setName($_POST['name']);
	$data->setSKU($_POST['SKU']);
	$data->setPrice($_POST['price']);
	$data->setSpecial($_POST['special']);
	$data->setValue($_POST['value']);
	$data->setMass($_POST['mass']);
	if($data->insertsingle())  
      {  
           echo 'Post Inserted';  
      }       
		?>