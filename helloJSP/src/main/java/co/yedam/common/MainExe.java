package co.yedam.common;

//import java.text.ParseException;
//import java.text.SimpleDateFormat;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardDAO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
//import co.yedam.student.service.StudentService;
//import co.yedam.student.service.StudentVO;
//import co.yedam.student.serviceImpl.StudentServiceImpl;

public class MainExe {

	public static void main(String[] args) {
//		//학생아이디, 비밀번호, 이름, 학과, 생일
//		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//		// 2012-03-05 Nov-23-2012
//		// Date -> String : sdf.format().
//		// String -> Date: sdf.parse()
//		StudentVO vo = new StudentVO();
//		vo.setStudentId("newbie");
//		vo.setStudentName("신입생");
//		vo.setStudentPw("1357");
//		vo.setStudentDept("국문학과");
//		try {
//			vo.setStudentBirthday(sdf.parse("2001-01-01"));
//		}catch(ParseException e) {
//			e.printStackTrace();
//		}
//		StudentService svc = new StudentServiceImpl();
////		if(svc.removeStudent(vo.getStudentId())) {
////			System.out.println("정상등록");
////		}else {
////			System.out.println("에러발생");
////		}
//		System.out.println("단건조회: " + svc.getStudent(vo.getStudentId()));
//		svc.listStudent().forEach(student -> System.out.println(student));
		BoardDAO dao = new BoardDAO();
		BoardVO vo = new BoardVO();
		vo.setTitle("newpost");
		vo.setContent("practice");
		vo.setWriter("user");

		System.out.println(dao.selectList());

		vo.setBoardNo(4);
		vo.setTitle("오번째제목");
		vo.setContent("오번째내용");
		vo.setWriter("USER05");

		System.out.println(dao.selectList());

		dao.delete(4);

		System.out.println(dao.selectList());

	}// endmaim
}// end
