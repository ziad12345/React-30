<?php

class ProductList
{

    public static function index(): void
    {        
        include '/storage/ssd5/865/20476865/public_html/index.html';
    }
   
    public static function renderData()
    {
        return response((new Product)->getAll());
    }

    public static function add(array $inputs): void 
    {
        $validator = new Validator($inputs);
    }

    public static function delete(array $data)
    {
        foreach ($data as $value) {
            (new Product)->delete($value);
        }

        return response(array('status' => 'success', 'message' => 'Deleted count of products: '.count($data)));
    }

};
