<?php

    require_once "./functions.php";
	$year     = isset($_GET['y']) && in_array($_GET['y'], [2019,2020]) ? $_GET['y'] : 2019;
	$file     = "../docs/{$year}-zhubing-resume.md";
	$mdfile   = fopen($file, "r") or die("Unable to open file!");
	$content  = fread($mdfile,filesize($file));
	fclose($mdfile);
	ajaxReturnJson($content);