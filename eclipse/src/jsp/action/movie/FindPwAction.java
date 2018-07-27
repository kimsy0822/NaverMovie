package jsp.action.movie;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import movie.controller.Action;
import movie.model.MemberDao;
import movie.vo.MemberVo;

public class FindPwAction implements Action {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Throwable {

		MemberDao memdao = MemberDao.getInstance();
		String id = request.getParameter("id");
		String email = request.getParameter("email");
		MemberVo memvo = memdao.memberPw(id,email);
		
		request.setAttribute("inputid", id);
		request.setAttribute("inputemail", email);
		request.setAttribute("memvo", memvo);
		
		return "/findpwd.jsp";

	}

}
