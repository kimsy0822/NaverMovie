package jsp.action.movie;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import movie.controller.Action;
import movie.model.MemberDao;
import movie.vo.MemberVo;

public class IdCheckAction implements Action{

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		response.setCharacterEncoding("utf-8");
		String id = request.getParameter("id");
		
		MemberVo memvo = new MemberVo();
		memvo.setId(id);
		
		MemberDao memdao = MemberDao.getInstance();
		int result = memdao.memberIdCheck(id);
		
		//System.out.println("id: "+id+", result: "+result);
		
		request.setAttribute("id", id);
		request.setAttribute("idcheck", result);
		
		return "checkid.jsp";
	}

}
