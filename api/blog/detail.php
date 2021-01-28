<?php
    require_once "../functions.php";

    $id = $_GET['id'] ?? 0;

    $lists = require_once './list.php';
    $data = $lists[$id] ?? [];

    ajaxReturnJson($data);