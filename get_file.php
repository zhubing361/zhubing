<?php

	$year     = isset($_GET['y']) && in_array($_GET['y'], [2019,2020]) ? $_GET['y'] : 2019;
	$file     = "./docs/{$year}-zhubing-resume.md";
	$mdfile   = fopen($file, "r") or die("Unable to open file!");
	$content  = fread($mdfile,filesize($file));
	fclose($mdfile);
	header('Content-Type:application/json; charset=utf-8');
	exit(json_encode(array('status'=>1,'content'=>$content), JSON_UNESCAPED_UNICODE));