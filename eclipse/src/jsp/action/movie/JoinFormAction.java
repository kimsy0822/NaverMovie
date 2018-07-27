package jsp.action.movie;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import movie.controller.Action;
import movie.model.MemberDao;
import movie.vo.MemberVo;



public class JoinFormAction implements Action{

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Throwable {

		request.setCharacterEncoding("utf-8");

		//리스트 목록 가져오기
		MemberDao memberdao = MemberDao.getInstance();
		MemberVo memvo = memberdao.joinform(request.getParameter("id"));
		
		//리스트정보를 저장하기
		request.setAttribute("memvo", memvo);
		
		return "/joinform.jsp";

	}

}
