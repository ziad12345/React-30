<?php

class Product extends Controller
{

    protected $inputs;
    protected $SKU;
    protected $name;
    protected $price;
    protected $special;
    protected $value;

    function __construct()
    {
        parent::__construct();
    }

    public function getArray(): array
    {
        return array($this->SKU, $this->name, $this->price, $this->special, $this->value);
    }

    public function find(string $SKU)
    {
        return $this->getSKU($SKU)->get();
    }

    public function save()
    {
        return $this->insert(array($this->name, $this->SKU, $this->price, $this->special, $this->value));
    }

    public function getAll()
    {
        return $this->select()->get();
    }

};
