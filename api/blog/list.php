<?php

    $lists = [
        '1001' => [
            'id' => 1001,
            'logo_url' => 'https://demo.mycodes.net/geren/jianyueshejishi/images/blog-4.jpg',
            'release_time' => date('m/d/Y'),
            'title' => 'elasticsearch 实例',
            'summary' => 'elasticsearch 实现博客全文、标签、分类搜索',
            'url' => '',
        ],
        '1002' => [
            'id' => 1002,
            'logo_url' => 'https://demo.mycodes.net/geren/jianyueshejishi/images/blog-4.jpg',
            'release_time' => date('m/d/Y'),
            'title' => 'swoole 实例',
            'summary' => 'swoole 实现简单的聊天室，可分组、私聊',
            'url' => '',
        ],
        '1003' => [
            'id' => 1003,
            'logo_url' => 'https://demo.mycodes.net/geren/jianyueshejishi/images/blog-4.jpg',
            'release_time' => date('m/d/Y'),
            'title' => 'laravel passport 实例',
            'summary' => 'laravel passport 实现三方授权',
            'url' => '',
        ]
    ];

    $format = $_GET['format'] ?? '';
    if(!empty($format)) {
        require_once "../functions.php";
        ajaxReturnJson($lists);
    }
    return $lists;
