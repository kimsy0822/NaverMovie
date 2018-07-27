<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import = "java.sql.*" %> 

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>영화</title>
<jsp:include page="/common/head.jsp"></jsp:include>
<style>
li.active{color:red}
</style>
</head>
<body>
<header>
<jsp:include page="/common/nav.jsp"></jsp:include>
</header>
<section>
<h1>Active Button</h1>
<p>Highlight the active/current (pressed) button.</p>
  
<div class="navbar span8" id="navbar">
    <div class="navbar-inner">
        <ul class="nav">
             <li><a href="#a">A</a></li>
             <li><a href="#b">B</a></li>
             <li><a href="#c">C</a></li>
             <li><a href="#d">D</a></li>
             <li><a href="#e">E</a></li>
             <li><a href="#f">F</a></li> 
       </ul>
    </div>
</div>

<script>
$('.nav li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
})
</script>

</section>
<footer>
<jsp:include page="/common/footer.jsp"></jsp:include>
</footer>
</body>
</html>