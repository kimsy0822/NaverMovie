<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import = "java.sql.*" %> 

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>영화</title>
<jsp:include page="/common/head.jsp"></jsp:include>
<script>
	function goback(){
		history.go(-1);
	}
</script>

</head>
<body>
<header>
<jsp:include page="/common/nav.jsp"></jsp:include>
</header>
<section>
    <div class="content-wrap">
      <article id="join">
        <div class="join_content">
		  <div class="join_form text-center">
            
                <legend>작성글 존재 확인</legend>
                <p>작성된 리뷰가 존재합니다.<br> 작성한 리뷰를 모두 삭제하시겠습니가?<br>
                *작성글 삭제 후 탈퇴가능</p>
				<div>
				<form method="get" action="deletereviewall.do?id=${id}">
					<input type="hidden" name="id" value="${id}">
				  	<button type="submit" class="btn btn-primary btn-lg">확인</button>
				  	<button type="button" class="btn btn-default btn-lg" onclick="goback();">취소</button>
				</form>
				</div>
            </div>
          </div>
      </article>
    </div>
</section>
<footer>
<jsp:include page="/common/footer.jsp"></jsp:include>
</footer>
</body>
</html>