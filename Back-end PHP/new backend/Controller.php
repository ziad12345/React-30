<?php

abstract class Controller
{
    private $db;
    private $query = '';
    private $stmt;
    private $data = array();

    function __construct()
    {
        $obj = new DbConnect;
        $this->db = $obj->connect();
        if (!$this->db) {
            echo 'Database Connection Error ' . mysqli_connect_error($this->db);
        }
    }

    public function getSKU($SKU)
    {
        $this->query = "SELECT * FROM products WHERE SKU = $SKU";
        return $this;
    }

    public function select()
    {
        $this->query = "SELECT * FROM products";
        return $this;
    }

    public function delete($value)
    {
        $this->query = "DELETE FROM products WHERE id = $value";
        
        $this->stmt = $this->db->prepare($this->query);
        $this->stmt->execute();
        return $this->stmt;
    }
  

    public function insert(array $data)
    {
        $product = $data;
        $string = "INSERT INTO products (name,SKU,price,special,value) VALUES (?, ?, ?, ?, ?)";
        $stmt = mysqli_prepare($this->db, $string);
        $stmt->bind_param("ssiss", $product[0], $product[1], $product[2], $product[3], $product[4]);
        
        $rsint = $stmt->execute();
        return $rsint;
    }

    private function bind()
    {
        $this->stmt = $this->db->prepare($this->query);

        if (!$this->stmt) {
            echo $this->db->error;
        }
        
        $this->data = array();
        $this->stmt->execute();
        return $this->stmt;
    }

    public function get()
    {
        return mysqli_fetch_all($this->bind()->get_result(), MYSQLI_ASSOC);
    }

};

