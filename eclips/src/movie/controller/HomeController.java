package movie.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import jsp.action.movie.DeleteAction;
import jsp.action.movie.DeleteReviewAllAction;
import jsp.action.movie.DetailAction;
import jsp.action.movie.FindPwAction;
import jsp.action.movie.IdCheckAction;
import jsp.action.movie.JoinAction;
import jsp.action.movie.JoinFormAction;
import jsp.action.movie.LoginAction;
import jsp.action.movie.LogoutAction;
import jsp.action.movie.MovieDetailAction;
import jsp.action.movie.MovieListAction;
import jsp.action.movie.MovieMainAction;
import jsp.action.movie.MovieSearchAction;
import jsp.action.movie.ReviewDeleteAction;
import jsp.action.movie.ReviewDetailAction;
import jsp.action.movie.ReviewEditFormAction;
import jsp.action.movie.ReviewFormAction;
import jsp.action.movie.ReviewInsertAction;
import jsp.action.movie.ReviewListAction;
import jsp.action.movie.ReviewListByIdAction;
import jsp.action.movie.ReviewUpdateAction;
import jsp.action.movie.UpdateAction;

public class HomeController extends HttpServlet{
	private static final long serialVersionUID = 1L;

	/* GET 방식일 경우 doGet() */
    public void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
            doProcess(request,response);
    }      
        
    /* POST 방식일 경우 doPost() */
    public void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
            doProcess(request,response);
    }    
    
    public void doProcess(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
    	
		String requestURI = request.getRequestURI();
		int cmdIdx = requestURI.lastIndexOf("/")+1;
		String command = requestURI.substring(cmdIdx);
		// URI, command 확인
		//System.out.println("requestURI : "+requestURI);
		//System.out.println("command : "+command);
		
        Action action = null;
        String view = null;
        
       try {
    	   //실습테스트페이지
           if(command.equals("hello.do")){view = "hello.jsp";}
    	   //테스트페이지
           if(command.equals("test.do")){view = "test.jsp";}
           
           // 화면전환
           if(command.equals("index.do")){view = "index.jsp";}
           // 메인화면 이동
           //if(command.equals("main.do")){view = "main.jsp";}
           if(command.equals("main.do")){action = new MovieMainAction(); view= action.execute(request, response);}
        	//영화목록폼
           if(command.equals("movielist.do")){action = new MovieListAction(); view = action.execute(request, response);}
           //영화상세폼
           if(command.equals("moviedetail.do")){action = new MovieDetailAction(); view = action.execute(request, response);}
           //영화검색결과
           if(command.equals("searchresult.do")){action = new MovieSearchAction(); view = action.execute(request, response);}
           //리뷰목록
           if(command.equals("reviewlist.do")){action = new ReviewListAction(); view = action.execute(request, response);}
           //리뷰상세
           if(command.equals("reviewdetail.do")){action = new ReviewDetailAction(); view = action.execute(request, response);}
           	//리뷰등록폼
           if(command.equals("reviewform.do")){action = new ReviewFormAction(); view = action.execute(request, response);}
           //리뷰등록
           if(command.equals("reviewinsert.do")){action = new ReviewInsertAction(); view = action.execute(request, response);}
           //리뷰수정폼
           if(command.equals("revieweditform.do")){action = new ReviewEditFormAction(); view = action.execute(request, response);}
           //리뷰수정
           if(command.equals("reviewupdate.do")){action = new ReviewUpdateAction(); view = action.execute(request, response);}
           //리뷰삭제
           if(command.equals("reviewdelete.do")){action = new ReviewDeleteAction(); view = action.execute(request, response);}
           //회원가입폼
           if(command.equals("joinform.do")){action = new JoinFormAction(); view = action.execute(request, response);}
           //아이디중복체크
           if(command.equals("checkid.do")){action = new IdCheckAction(); view = action.execute(request, response);}
           //회원가입등록
           if(command.equals("join.do")){action = new JoinAction();view = action.execute(request, response);}
           //비밀번호찾기폼
           if(command.equals("findpwd.do")){view = "findpwd.jsp";}
           //비밀번호찾기
           if(command.equals("findpw.do")){action = new FindPwAction(); view = action.execute(request, response);}
           //내정보수정폼
           if(command.equals("modifyform.do")){action = new DetailAction(); view = action.execute(request, response);}
           //내정보수정등록
           if(command.equals("modify.do")){action = new UpdateAction(); view = action.execute(request, response);}
           //내가쓴리뷰목록
           if(command.equals("reviewlistbyid.do")){action = new ReviewListByIdAction(); view = action.execute(request, response);}
           //탈퇴
           if(command.equals("delete.do")){action = new DeleteAction(); view = action.execute(request, response);}
           //탈퇴작성리뷰삭제처리
           if(command.equals("deletereviewall.do")){action = new DeleteReviewAllAction(); view = action.execute(request, response);}
           //로그인폼
           if(command.equals("loginform.do")){view="loginform.jsp";}
           //로그인
           if(command.equals("login.do")){action = new LoginAction(); view = action.execute(request, response);}
           //로그아웃
           if(command.equals("logout.do")){action = new LogoutAction(); view = action.execute(request, response);}
           
       } catch (Throwable e) {
           e.printStackTrace();
       }
       
       RequestDispatcher dispatcher = request.getRequestDispatcher(view);
       dispatcher.forward(request, response);
   } 	// end doProcess


}
