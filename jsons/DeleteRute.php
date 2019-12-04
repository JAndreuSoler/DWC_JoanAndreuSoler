<?php
include 'BDConnection.php';

$id = $_REQUEST['id'];

$array = null;
$sql = "delete from rute where id = $id";
$stmt = DBConnection::getInstance()->getConnection()->prepare($sql);
$stmt->execute();

