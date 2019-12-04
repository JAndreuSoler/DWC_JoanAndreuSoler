<?php
include 'BDConnection.php';

$id = $_REQUEST['id'];
$inici = "'" . $_REQUEST['inici'] . "'";
$final = "'" . $_REQUEST['final'] . "'";
$km = $_REQUEST['km'];
$diff = $_REQUEST['diff'];

$array = null;
$sql = "insert into rute values ($id, $inici, $final, $diff, $km, 'https://imagenes.forociudad.com/fotos/160536-panoramica-de-san-salvador-felanitx.jpg')";
$stmt = DBConnection::getInstance()->getConnection()->prepare($sql);
$stmt->execute();

