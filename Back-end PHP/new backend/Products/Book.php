<?php

class Book extends Product implements Validate
{
    protected $inputs;

    function __construct(array $inputs)
    {
        parent::__construct();
        
        $this->inputs = $inputs;
        $this->value;
        $this->name = $inputs["name"];
        $this->SKU = $inputs["SKU"];
        $this->price = $inputs["price"];
        $this->mass = $inputs["mass"];
        $this->special = $inputs["special"];
        
    }

    public function validateAttributes()
    {
        if(is_numeric($this->inputs['value']) && floatval($this->inputs['value'] >= 0)) {
            
            $this->value = $this->inputs['value'].' KG';
            // var_dump($this->inputs);
            // die();
            return true;
        }

        return false;
    }
};
