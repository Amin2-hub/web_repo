package co.yedam.common;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.board.service.BoardService;
import co.yedam.board.serviceImpl.BoardServiceImpl;

public class LoginControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// TODO Auto-generated method stub
		String id = req.getParameter("id");
		String pw = req.getParameter("pass");
		
		//Session : 서버-클라이언트   웹브라우저에서 로그아웃하거나 종료하기전엔 데이터가 계속 저장되있음
		HttpSession session = req.getSession();
		session.setAttribute("logId", id);

		BoardService svc = new BoardServiceImpl();
		if(svc.loginCheck(id, pw)) {
			try {
				resp.sendRedirect("boardList.do");
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}else {
			try {
				resp.sendRedirect("loginForm.do");
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

}