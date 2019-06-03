<?php

// PHP 中 header 函数专门用于设置响应头
/*还有注意Content-Type与冒号之间不能有空格，要不然会报错*/
/*Content-Type的作用就是 当页面请求的php文件中内容是css或者javascript格式的，就可以利用
header('Content-Type: text/css');或者
header('Content-Type: application/javascript');
来改变响应体的内容类型
*/
header('Content-Type: text/html');

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>这是一个网页内容</title>
   <link rel="stylesheet" href="style.php">
</head>
<body>
  <h1>这是一个网页内容</h1>
</body>
</html>
