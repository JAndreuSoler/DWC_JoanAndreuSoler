<?php
include 'jsons.php';
if(isset($_GET['name'])) {
    $and = "and dificultat.name = '" . $_GET['name'] . "'";
    echo getRutesJson($and);
}else{
    echo getRutesJson();
}


