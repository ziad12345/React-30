<?php

class Furniture extends Product implements Validate
{
    protected $inputs;

    function __construct(array $inputs)
    {
        parent::__construct();
        $this->inputs = $inputs;

        $this->name = $inputs["name"];
        $this->SKU = $inputs["SKU"];
        $this->price = $inputs["price"];
        $this->special = $inputs["special"];
       
        
    }

    public function validateAttributes()
    {
        if(is_numeric($this->inputs['height']) && is_numeric($this->inputs['width']) && is_numeric($this->inputs['length']) && floatval($this->inputs['height'] >= 0) && floatval($this->inputs['width'] >= 0) && floatval($this->inputs['length'] >= 0)) {
            $this->value = $this->inputs["value"];
            // $this->inputs['height'].'x'.$this->inputs['width'].'x'.$this->inputs['length'];
            return true;
        }

        return false;
    }

};
