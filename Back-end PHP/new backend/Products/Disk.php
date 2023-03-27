<?php

class Disk extends Product implements Validate
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
        $this->special = $inputs["special"];
    
        
    }

    public function validateAttributes()
    {
        if(is_numeric($this->inputs['value']) && floatval($this->inputs['value'] >= 0)) {
            $this->value = $this->inputs['value'].' MB';
            return true;
        }

        return false;
    }
};
