<?php

class DbConnect
{
    private $server = "localhost";
    private $dbname = "id20476865_react";
    private $user = "id20476865_ziad";
    private $pass = "=<qu*)w&)|^qX8L@";

    public function connect()
    {
        try {
            $conn = new mysqli($this->server, $this->user, $this->pass, $this->dbname);;
            return $conn;
        } catch (\Exception $e) {
            echo "Database Error: " . $e->getMessage();
        }
    }
}
