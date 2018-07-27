package jsp.action.movie;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import movie.controller.Action;
import movie.model.BoardDao;
import movie.vo.BoardVo;
import movie.vo.PagingVo;

public class ReviewListByIdAction implements Action {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		request.setCharacterEncoding("utf-8");
		
		
		BoardDao bdao = BoardDao.getInstance();
		PagingVo pagingVO = new PagingVo();
		
		String id = request.getParameter("id");
		String keyWord=request.getParameter("keyWord");
		String keyValue=request.getParameter("keyValue");
		
		if(keyWord==null || keyWord.equals("")){
			keyWord="title";
		}
		if(keyValue==null || keyValue.equals("")){
			keyValue="";
		}
		pagingVO.setKeyWord(keyWord);
		pagingVO.setKeyValue(keyValue);
		
		int rtotal = bdao.reviewCountById(id,pagingVO);
		
		String pageNum_temp=request.getParameter("pageNum");
		
		pagingVO.setTotal(rtotal);
		pagingVO.setPageNum_temp(pageNum_temp);
		pagingVO=bdao.setPagingInfo(pagingVO);
		
		
		List<BoardVo> blist=bdao.boardSelectById(id,pagingVO);
		
		StringBuffer search = new StringBuffer(request.getContextPath());
		search.append("/reviewlistbyid.do?id="+id);
		search.append("&keyWoard="+keyWord);
		search.append("&keyValue="+keyValue);
		search.append("&pageNum=");
		
		request.setAttribute("id", id);
		request.setAttribute("blist", blist);
		request.setAttribute("rtotal", rtotal);
		request.setAttribute("search", search);
		request.setAttribute("pageNum", pagingVO.getPageNum());
		request.setAttribute("pageBlock", pagingVO.getPageBlock());
		request.setAttribute("pageCount", pagingVO.getPageCount());
		request.setAttribute("endPage", pagingVO.getEndPage());
		request.setAttribute("startPage", pagingVO.getStartPage());
		request.setAttribute("rowNum", pagingVO.getRowNum());
		
		return "/reviewlistbyid.jsp";
		
	}

}
