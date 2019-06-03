<?php

/**
 * 回发处理逻辑
 */
function postback () {
  // // 申明 $message 是全局
  // global $message;

  // 1. 校验参数的完整性
  if (empty($_POST['username'])) {
    // 没有提交用户名 或 用户名为空字符串
    $GLOBALS['message'] = '会不会玩';
    return;
  }
  /*  解决嵌套问题：
  1.exit()不只是让我们代码不再往下继续了，是整个程序都不再往下执行了，
  2.return 我们不建议在非函数的作用域中写return，但是在php中不在函数中确实可以使用return,这里我们就用return，不用else层层嵌套
 */

  if (empty($_POST['password'])) {
    $GLOBALS['message'] = '请输入密码';
    return;
  }

  if (empty($_POST['confirm'])) {
    $GLOBALS['message'] = '请输入确认密码';
    return;
  }
  // 用户名 密码 确认密码都输入了
  if ($_POST['password'] !== $_POST['confirm']) {
    $GLOBALS['message'] = '两次输入的密码不一致';
    return;
  }

  if (!(isset($_POST['agree']) && $_POST['agree'] === 'on')) {
    $GLOBALS['message'] = '必须同意注册协议';
    return;
  }

  // 所有的校验都OK
  $username = $_POST['username'];
  $password = $_POST['password'];

  // 将数据保存到文本文件中
  file_put_contents('users.txt', $username . '|' . $password . "\n", FILE_APPEND);
  $GLOBALS['message'] = '注册成功';
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  postback();
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>注册</title>
</head>
<body>
  <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
    <table border="1">
      <tr>
        <!--label实际上的作用是为了一个input而存在的，目的是解释说明一下我们的input是用来干什么的，利用for关联起来-->
        <td><label for="username">用户名</label></td>
        <td><input type="text" name="username" id="username" value="<?php echo isset($_POST['username']) ? $_POST['username'] : ''; ?>"></td>
      </tr>
      <tr>
        <td><label for="password">密码</label></td>
        <td><input type="password" name="password" id="password"></td>
      </tr>
      <tr>
        <td><label for="confirm">确认密码</label></td>
        <td><input type="password" name="confirm" id="confirm"></td>
      </tr>
      <tr>
        <td></td>
        <td><label><input type="checkbox" name="agree" value="on"> 同意注册协议</label></td>
      </tr>
      <?php if (isset($message)): ?>
      <tr>
        <td></td>
        <td><?php echo $message; ?></td>
      </tr>
      <?php endif ?>
      <tr>
        <td></td>
        <td><button>注册</button></td>
      </tr>
    </table>
  </form>
</body>
</html>
