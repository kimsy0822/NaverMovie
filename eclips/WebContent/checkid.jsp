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
	function checkid(){
		var id = document.getElementById("inputID").value;

		location.href="checkid.do?id="+id;	
		}
</script>
</head>
<body>
<header>
<jsp:include page="/common/nav.jsp"></jsp:include>
</header>
<section>
    <div class="content-wrap">
      <article id="joinform">
        <div class="join_content">
				  <div class="join_form">
            <form class="form-horizontal" id="join_form" method="post" action="/joinform.do?id=${id}">
              <fieldset>
                <legend>아이디중복체크</legend>
                  <div class="form-group">
                    <label for="inputID" class="col-sm-2 control-label">ID</label>
                    <div class="col-sm-10">
                   		<div class="input-group">
	                      	<input type="text" name="id" class="form-control" id="inputID" placeholder="아이디를 입력하세요" value="${id}" autofocus required>
	                      	<input type="hidden" id="idcheck" value="${idcheck}">
	                        <span class="input-group-btn"><button type="button" class="btn btn-default" onclick="checkid();">중복체크</button></span>
                      	</div>
                    </div>
                  </div>
                  <div class="form-group">
                 	 <label for="inputID" class="col-sm-2 control-label"></label>
	                  <div class="col-sm-10">
		                  <c:if test="${idcheck!=0}">
								<P><span>사용불가</span> </P>
							</c:if>
							<c:if test="${idcheck==0}">
								<p><span>사용가능</span></p>
							</c:if>
						</div>
						
                  </div>
                  <button type="submit" class="btn btn-default btn-lg btn-block">사용하기</button>
                  
                </fieldset>
              </form>      
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