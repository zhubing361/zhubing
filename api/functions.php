<?php

/**
 * @func   ajax返回数据
 * @author zhubing 2020/11/07
 * @param $content
 */
function ajaxReturnJson($content)
{
    header('Content-Type:application/json; charset=utf-8');
    exit(json_encode(array('status'=>1,'content'=>$content), JSON_UNESCAPED_UNICODE));
}