<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import = "java.sql.*" %> 

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>영화</title>
<jsp:include page="/common/head.jsp"></jsp:include>
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
            <form class="form-horizontal" id="join_form" method="post" action="/findpw.do">
              <fieldset>
                <legend>비밀번호찾기</legend>
                  <div class="form-group">
                    <label for="inputID" class="col-sm-2 control-label">ID</label>
                    <div class="col-sm-10">
						<input type="text" name="id" class="form-control" id="inputID" placeholder="아이디를 입력하세요" value="${inputid}" autofocus required>
                    </div>
                  </div>
                  <div class="form-group">
                 	 <label for="inputID" class="col-sm-2 control-label">EMAIL</label>
	                  <div class="col-sm-10">
						<input type="text" name="email" class="form-control" id="inputEMAIL" placeholder="이메일를 입력하세요" value="${inputemail}" required>
						</div>
						
                  </div>
                  <button type="submit" onclick="FindPw();" class="btn btn-default btn-lg btn-block" id="btnFindPw">비밀번호찾기</button>		
                </fieldset>
              </form>      
            </div>
            <c:if test="${inputid ne null }">
            	<c:if test="${memvo ne null }">
		            <div id="yourpw">
			            <hr>
			            <p>${memvo.id}님의 비밀번호는 ${memvo.pwd } 입니다.</p>
		            </div>
           	 	</c:if>
           	 	<c:if test="${memvo eq null }">
		            <div id="yourpw">
			            <hr>
			            <p>${inputid}님의 일치하는 정보가 없습니다.</p>
		            </div>
           	 	</c:if>
            </c:if>
            
          </div>
      </article>
    </div>

</section>
<footer>
<jsp:include page="/common/footer.jsp"></jsp:include>
</footer>
</body>
</html>