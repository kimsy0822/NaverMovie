package jsp.action.movie;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import movie.controller.Action;
import movie.model.BoardDao;
import movie.vo.BoardVo;

public class DeleteReviewAllAction implements Action{

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		request.setCharacterEncoding("utf-8");
		String id = request.getParameter("id");
		
		BoardVo bvo = new BoardVo();
		bvo.setId(id);
		
		BoardDao bdao = BoardDao.getInstance();
		
		int result = bdao.deleteReviewall(id);
		if(result!=0){
			return "/modifyform.do?id="+id;
		}else{
			return "/deletereviewall.do?id="+id;
		}
	}

}
