<?php
include 'BDConnection.php';

$id = $_REQUEST['id'];
$inici = "'" . $_REQUEST['inici'] . "'";
$final = "'" . $_REQUEST['final'] . "'";
$km = $_REQUEST['km'];
$diff = $_REQUEST['diff'];

$array = null;
$sql = "update rute set inici = $inici, final = $final, km = $km, dificultat_id = $diff where id = $id ";
echo $sql;
$stmt = DBConnection::getInstance()->getConnection()->prepare($sql);
$stmt->execute();
