<?php
/*逻辑问题
1.if else的使用：有的条件经过取非，把正确的结果放在else中，更有逻辑性
2.把每一步执行的结果记录下来，更有逻辑性，看着条理更清晰，
*/
function upload () {
  if (!isset($_FILES['avatar'])) {
    $GLOBALS['message'] = '别玩我了';
    // 客户端提交的表单内容中根本没有文件域
    return;
  }

  $avatar = $_FILES['avatar'];
  // $avatar => array(5) {
  //   ["name"]=>
  //   string(11) "icon-02.png"
  //   ["type"]=>
  //   string(9) "image/png"
  //   ["tmp_name"]=>
  //   string(27) "C:\Windows\Temp\php1138.tmp"
  //   ["error"]=>
  //   int(0)
  //   ["size"]=>
  //   int(4398)
  // }
  echo $avatar['error'];
  if ($avatar['error'] !== UPLOAD_ERR_OK) {
//     服务端没有接收到上传的文件
//    1.只有0才是上传成功
//    4.没有上传文件

    $GLOBALS['message'] = '上传失败';
    return;
  }

  // 接收到了文件
  // 将文件从临时目录移动到网站范围之内
  $source = $avatar['tmp_name']; // 源文件在哪
  // => 'C:\Windows\Temp\php1138.tmp'

  if(!is_dir("upload")){ //如果当前目录下upload不存在，那就新建一个文件夹
        mkdir("upload");  //创建upload文件夹
  }
  $target = './uploads/' . $avatar['name']; // 目标放在哪,放在当前目录下的upload文件夹中，这里这个路径是相对路径，但是一般文件上传是绝对路径
  // => './uploads/icon-02.png'
  // 移动的目标路径中文件夹一定是一个已经存在的目录
  $moved = move_uploaded_file($source, $target);
  $moved记录是否保存成功，true或者false
  if (!$moved) {
    $GLOBALS['message'] = '上传失败';
    return;
  }

  // 移动成功（上传整个过程OK）

}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // 接收文件 使用一个 叫做 $_FILES 超全局成员
  // var_dump($_FILES);
  upload();
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>文件上传</title>
</head>
<body>
  <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" enctype="multipart/form-data">
    <input type="file" name="avatar">
    <button>上传</button>
    <?php if (isset($message)): ?>
    <p style="color: hotpink"><?php echo $message; ?></p>
    <?php endif ?>
  </form>
</body>
</html>
