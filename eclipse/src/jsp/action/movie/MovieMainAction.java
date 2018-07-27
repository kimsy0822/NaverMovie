package jsp.action.movie;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import movie.controller.Action;
import movie.model.BoardDao;
import movie.model.MovieDao;
import movie.vo.BoardVo;
import movie.vo.MovieVo;

public class MovieMainAction implements Action {

	@Override
	public String execute(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		request.setCharacterEncoding("utf-8");
		
		//영화리스트 목록 가져오기
		MovieDao m = MovieDao.getInstance();
		ArrayList<MovieVo> mlist = m.selectmovie();
		//영화리스트정보를 저장하기
		request.setAttribute("mlist", mlist);
		
		
		
		
		//리뷰리스트 목록 가져오기
		BoardDao bdao = BoardDao.getInstance();
		
		//리뷰많은 영화가져오기
		ArrayList<BoardVo> mtop = bdao.topmovie();
		//립리스트 정보 저장하기
		request.setAttribute("mtop", mtop);
		//리뷰리스트 가져오기
		ArrayList<BoardVo> rlist = bdao.selectreview();
		request.setAttribute("rlist",rlist);
		
		//영화아이디검색해주는 최근리뷰리스트
		//ArrayList<BoardVo> rlist = bdao.selectreview(id);
				
		return "/main.jsp";
	}

}
