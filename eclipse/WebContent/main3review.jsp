<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

       <!-- 리뷰 -->
        <article id="board-wrap">
            <div class="obj_section">
      				<div class="main_review">
                <div class="title_area">
                	<h4 class="hh_review"><strong class="blind">평점/리뷰</strong></h4>
              	</div>
      					<div class="hh_review_area">
      						<div id="movieReview" class="hh_review_ct">
      							<ul class="lst_con first" data-index="0" style="display:block">
      							
      							<c:forEach var="mtop" items="${mtop}" begin="1" end="4" step="1">
      							<!-- [D] 선택된 경우 li에 class="on" 추가 -->
        							<li id="review1" data-index="0" class="_select_title">
        								<a href="moviedetail.do?mid=${mtop.mid }" class="thmb"><img src="images/poster/${mtop.mid }.jpg" width="64" height="91" alt="${mtop.mname }"></a>
          							<div class="detail">
          								<a href="moviedetail.do?mid=${mtop.mid }" data-index="0" class="_select_title_anchor"><strong>${mtop.mname }</strong>
          									<div class="star_score">
          									
          									<c:if test="${mtop.avgscore != 10.00 }">
          									<c:set var="TextValue" value="${mtop.str_avgscore}"/>
      												<span class="st_off"><span class="st_on" style="width:${mtop.avgscore*10 }%">평점 - 총 10점 중</span></span>
      												<span class="score">
        												<span class="char sc_num${fn:substring(TextValue,0,1) }"><em>${fn:substring(TextValue,0,1) }</em></span><span class="char sc_dot"><em>.</em></span><span class="char sc_num${fn:substring(TextValue,2,3) }"><em>${fn:substring(TextValue,2,3) }</em></span><span class="char sc_num${fn:substring(TextValue,3,4) }"><em>${fn:substring(TextValue,3,4) }</em></span>
          											</span>
          									</c:if>
          									<c:if test="${mtop.avgscore == 10.00 }">
          									<c:set var="TextValue" value="${mtop.str_avgscore}"/>
      												<span class="st_off"><span class="st_on" style="width:${mtop.avgscore*10 }%">평점 - 총 10점 중</span></span>
      												<span class="score">
        												<span class="char sc_num${fn:substring(TextValue,0,1) }"><em>${fn:substring(TextValue,0,1) }</em></span><span class="char sc_num${fn:substring(TextValue,1,2) }"><em>${fn:substring(TextValue,1,2) }</em></span><span class="char sc_dot"><em>.</em></span><span class="char sc_num${fn:substring(TextValue,3,4) }"><em>${fn:substring(TextValue,3,4) }</em></span>
          											</span>
          									</c:if>
          									          										
          									</div>
          								</a>
          							 	<ul class="info">
          								
          								<c:set var="cnt" value="0" />
          								<c:forEach var="rlist" items="${rlist}">
          								<%-- <li><a href="reviewdetail.do?num=${rlist.num }"><span class="tit"> ${rlist.title }</span></a></li> --%>
	          									<c:if test="${rlist.mid eq mtop.mid }">
	          									    <c:set var="cnt" value="${cnt + 1}" />
	          									    <c:if test="${cnt<4}" >
	      											<li><a href="reviewdetail.do?num=${rlist.num }"><span class="tit">${rlist.title }</span></a></li>
	      											</c:if>
	      										</c:if>
      									</c:forEach>

          								</ul> 
          							</div>
          						</li>
          						</c:forEach>
            
                   			 </ul>
            			</div>
            		</div>
            	</div>
          	</div>

        </article>