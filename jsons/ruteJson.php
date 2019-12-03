<?php
include 'jsons.php';
if(isset($_GET['name'])) {
    $and = "and dificultat.name = '" . $_GET['name'] . "'";
    echo getRutesJson($and);
}else if(isset($_GET['id'])) {
    $and = "and rute.id = " . $_GET['id'];
    echo getRutesJson($and);
}else{
    echo getRutesJson();
}