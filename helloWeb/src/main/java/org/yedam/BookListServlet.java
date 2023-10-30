package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.service.BookService;
import org.yedam.service.BookVO;
import org.yedam.serviceImpl.BookServiceImpl;

@WebServlet("/BookListServlet")
public class BookListServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
	
    public BookListServlet() {
        super();
    }
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		BookService svc = new BookServiceImpl();
		List<BookVO> list = svc.bookList();
		
		response.setContentType("text/xml;charset=utf-8");
		PrintWriter out = response.getWriter();
		String str = "";
		str += "[";
		int cnt = 0;
		for (BookVO vo : list) {
			str += "{";
			str += "\"bookcode\":\"" + vo.getBookCode() + "\",";
			str += "\"booktitle\":\"" + vo.getBookTitle()+ "\",";
			str += "\"bookauthor\":\"" + vo.getBookAuthor() + "\",";
			str += "\"bookpress\":\"" + vo.getBookPress() + "\",";
			str += "\"bookprice\":\"" + vo.getBookPrice() + "\"";
			str += "}";
			if (++cnt != list.size()) {
				str += ",";
			}
		}
		str += "]";
		out.print(str);
	
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
