<?php

// 这里是在 响应头中添加一个 location 的头信息
// header('Location: 01-content-type.php');
// 客户端浏览器在接收到这个头信息过后会自动跳转到 指定的地址

/* 切记不能循环重定向
header('Location: 03-location2.php');
header('Location: 02-location2.php');连个页面之间来回跳转也会产生死循环
*/
/*所有涉及到响应头的地方都不要加空格，会报错：Internal Server Error*/
header('Location:demo1.php')
