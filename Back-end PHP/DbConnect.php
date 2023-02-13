<?php

class DbConnect {
    private $server = "localhost";
    private $dbname = "id20275571_myproductdata";
    private $user = "id20275571_ziad";
    private $pass = "1wznsI9QQl8([o.4";

    public function connect(){
        try {
            $conn = new mysqli($this->server, $this->user, $this->pass, $this->dbname);;
            return $conn;
        } catch (\Exception $e) {
            echo "Database Error: " . $e->getMessage();
        }
    }
}

?>