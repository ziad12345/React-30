<?php

require '/storage/ssd5/865/20476865/public_html/PHP/Helper.php';

function autoload($class_name) 
{

    // List all the class directories in the array.
    $array_paths = array(
        __DIR__ ."/PHP",
        __DIR__ ."/PHP/Products"
    );

    foreach($array_paths as $path)
    {
        $file = sprintf('/%s/%s.php', $path, $class_name);
        if(is_file($file)) {
            include_once $file;
        } 
    }
}

spl_autoload_register('autoload');
