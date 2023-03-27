<?php

include '/storage/ssd5/865/20476865/public_html/AutoLoader.php';

$router = new Router();

$router->get('', 'ProductList::index');
$router->get('/products/get', 'ProductList::renderData');

$router->post('/products/add', 'ProductList::add');
$router->post('/products/delete', 'ProductList::delete');

$router->check();
