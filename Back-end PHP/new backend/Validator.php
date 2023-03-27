<?php

class Validator
{
    private $inputs;
    private $message = null;

    function __construct(array $inputs)
    {
        $this->inputs = $inputs;
        switch ($this->inputs['special']) {
        case "Size":
            $this->validate(new  Disk($this->inputs));
            break;
        case "Weight":
            $this->validate(new  Book($this->inputs));
            break;
        case "Dimenstions":
            $this->validate(new  Furniture($this->inputs));
            break;
        }

    }

    public function validate(Validate $validate)
    {
        if(!$validate->validateAttributes()) {
            $this->message .= 'Invalid attributes <br>';
        }

        if($this->message == null) {
            $validate->save();
            return response(array('status' => 'success', 'message' => 'Product added to the database'));
        }

        return response(array('status' => 'danger', 'message' => $this->message));
    }
};
