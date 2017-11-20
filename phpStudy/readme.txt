SERVER&HTTP DAY02:
 * PHP语言
   * 基本内容
     * PHP语言 - 类似于javascript语言的
       * javascript是客户端(HTML)的脚本语言
       * PHP是服务器端的脚本语言
     * PHP文件的扩展名为".php"
     * 注意
       * PHP文件是不能鼠标右键,使用浏览器直接打开
       * PHP文件是应该运行在服务器(Apache)上的
     * PHP文件允许的内容
       * 允许编写HTML代码
       * 允许编写PHP代码
   * PHP页面与HTML页面的区别
     * HTML页面 - 静态页面
       * 静态资源 - HTML|CSS|JAVASCRIPT
     * PHP页面 - 动态页面
       * 动态资源 - 根据用户的操作,动态变化
   * 第一个PHP文件
     * 创建PHP文件 - 扩展名为".php"
     * 如何编写PHP代码
       * 是以"<?php"开始,是以"?>"结束的
     * 使用echo进行输出
 * PHP语法
   * 常量与变量
     * 常量 - 一旦定义并初始化后,值不会改变
       * 使用const关键字
         const 常量名=常量值
       * define(常量名,常量值)
     * 变量 - "$"符号只是表示当前定义的是变量
       $变量名=值;
   * 数据类型
     * 四种标量类型
       * boolean - 布尔类型
       * integer - 数值类型(整型)
       * float/double - 数值类型(浮点型)
       * string - 字符串
         * '' - 定义固定字符串
	   * 性能比较高
	 * "" - 可以识别变量名的
	   * 性能相对低(有匹配的过程)
     * 两种复合类型
       * array - 数组
       * object - 对象
     * 两种特殊类型
       * resource - 资源
         * 作用 - 用于保存外部资源的一个引用
	 * 使用场景
	   * 在文件上传中,保存上传的文件
       * NULL
   * 运算符
     * 基本与javascript的运算符保持一致
     * 字符串连接符 - "."
       * 在实际开发中,很少使用
   * 循环结构
     * while
     * do...while
     * for
     * foreach
       foreach(数组 as key => value){}
   * 分支结构
     * if...else if...else
     * switch...case
   * break与continue的区别
     * break - 结束循环
     * continue - 结束本次循环
 * PHP预定义
   * 预定义变量
     * $_GET - 接收客户端以请求类型为GET方法发送的数据内容
     * $_POST - 接收客户端以请求类型为POST方法发送的数据内容
     * $_REQUEST - $_GET、$_POST等
     * $_FILES - 专门用于文件上传
     * $_COOKIE - 接收客户端保存的Cookie数据
   * 预定义函数
     * 数据库扩展 
 * PHP连接MySQL数据库
   * 准备工作
     * 在XAMPP软件的安装目录/php/ext目录中
       * php_mysql.dll和php_mysqli.dll文件必须存在
     * 在XAMPP软件的安装目录/php目录中
       * php.ini文件 - php的主配置文件
         extension=php_mysql.dll
         extension=php_mysqli.dll
       * 在php中配置有关MySQL数据库
   * PHP如何连接MySQL数据库
     * 过程化风格
       * 建立与MySQL数据库的连接
         $conn = mysqli_connect(host,username,passwd,dbname,port);
	 * 该方法返回数据库的连接对象
       * 定义SQL语句
         $sql = "";
       * 发送SQL语句 - MySQL数据库
         $result = mysqli_query($conn,$sql);
	 * 该方法返回执行SQL语句的结果
       * (可选)解析结果集对象
         * 结果集对象 - mysqli_result对象
       * 关闭与MySQL数据库的连接
         mysqli_close($conn)
     * 面向对象风格
       * 创建mysqli或mysql对象
         $mysqli = new mysqli(host,username,passwd,dbname,port);
	 * 相当于与MySQL数据库建立连接
       * 定义SQL语句
       * 调用mysqli对象的query()方法,向MySQL数据库发送SQL语句
         $mysqli->query($sql);
       * 如果SELECT语句,解析mysqli_result对象
       * 调用mysqli对象的close()方法,关闭与MySQL的连接
     * 中文乱码问题
       * 执行mysqli_query($conn,'SET NAMES UTF8');
       * 执行$mysqli->query('SET NAMES UTF8');
   * 结果集对象 - 执行SELECT语句
     * 属性
       * num_rows - 记录数量
       * field_count - 字段数量
     * 方法
       * mysqli_fetch_array(结果集对象)
         * 返回数组
       * mysqli_fetch_object(结果集对象)
         * 返回object
 * 案例 - 开发完整的Web应用(客户端|服务器端|数据库)
   * 用户登录功能
   * 用户注册功能
     * 先查询用户名是否存在
       SELECT * FROM 表名 WHERE name=用户名
       * $result->num_rows - 0(不存在)
       * $result->num_rows - 不为0(存在)
     * 再插入数据内容