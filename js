<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title></title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<!--   引入jQuery -->
<script src="../../../jquery.min.js" type="text/javascript"></script>
<script src="demo.js" type="text/javascript"></script>
<script type="text/javascript">
	/*
		表格内容过滤练习：功能，在文本框中输入信息，在表格中自动过滤出包含文本框中文字的记录
	*/
	//文档就绪函数
  $(function(){
  })
</script>
</head>
<body>
<div>
<br/>
筛选：
<input id="filterName" />
<br/>

</div>

<table>
	<thead>
		<tr><th>姓名</th><th>性别</th><th>暂住地</th></tr>
	</thead>
	<tbody>
		<tr><td>张山</td><td>男</td><td>浙江宁波</td></tr>
		<tr><td>李四</td><td>女</td><td>浙江杭州</td></tr>
		<tr><td>王五</td><td>男</td><td>湖南长沙</td></tr>
		<tr><td>找六</td><td>男</td><td>浙江温州</td></tr>
		<tr><td>Rain</td><td>男</td><td>浙江杭州</td></tr>
		<tr><td>MAXMAN</td><td>女</td><td>浙江杭州</td></tr>
		<tr><td>王六</td><td>男</td><td>浙江杭州</td></tr>
		<tr><td>李字</td><td>女</td><td>浙江杭州</td></tr>
		<tr><td>李四</td><td>男</td><td>湖南长沙</td></tr>
	</tbody>
</table>

</body>
</html>
