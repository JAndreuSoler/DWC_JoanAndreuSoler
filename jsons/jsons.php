<?php
include 'BDConnection.php';

function getRutesJson( $and = '') {
    $array = null;
    $sql = "SELECT rute.id, inici, final, name, km, imgUrl FROM rute, dificultat where dificultat.id = dificultat_id  $and;";
    $stmt = DBConnection::getInstance()->getConnection()->prepare($sql);
    $stmt->execute();
    $array = $stmt->fetchAll();

    return json_encode($array);
}

function getDificultatJson() {
    $array = null;
    $sql = "SELECT name FROM dificultat ;";
    $stmt = DBConnection::getInstance()->getConnection()->prepare($sql);
    $stmt->execute();
    $array = $stmt->fetchAll();

    return json_encode($array);
}

//echo getRutesJson();