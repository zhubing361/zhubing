<?php

    require_once "../functions.php";

    //获取推荐内容 todo

    $recom_lists = [
        [
            'logo_url' => 'https://demo.mycodes.net/geren/jianyueshejishi/images/blog-4.jpg',
            'release_time' => date('m/d/Y'),
            'title' => 'elasticsearch 实例',
            'summary' => 'elasticsearch 实现博客全文、标签、分类搜索',
            'url' => '/blog/detail.html/?id=1001',
        ],
        [
            'logo_url' => 'https://demo.mycodes.net/geren/jianyueshejishi/images/blog-4.jpg',
            'release_time' => date('m/d/Y'),
            'title' => 'swoole 实例',
            'summary' => 'swoole 实现简单的聊天室，可分组、私聊',
            'url' => '/blog/detail.html/?id=1002',
        ],
        [
            'logo_url' => 'https://demo.mycodes.net/geren/jianyueshejishi/images/blog-4.jpg',
            'release_time' => date('m/d/Y'),
            'title' => 'laravel passport 实例',
            'summary' => 'laravel passport 实现三方授权',
            'url' => '/blog/detail.html/?id=1003',
        ]
    ];

    ajaxReturnJson($recom_lists);