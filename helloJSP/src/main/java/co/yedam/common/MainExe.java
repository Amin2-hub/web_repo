package co.yedam.common;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import co.yedam.student.service.StudentService;
import co.yedam.student.service.StudentVO;
import co.yedam.student.serviceImpl.StudentServiceImpl;

public class MainExe {

	public static void main(String[] args) {
		//학생아이디, 비밀번호, 이름, 학과, 생일
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		// 2012-03-05 Nov-23-2012
		// Date -> String : sdf.format().
		// String -> Date: sdf.parse()
		StudentVO vo = new StudentVO();
		vo.setStudentId("newbie");
		vo.setStudentName("신입생");
		vo.setStudentPw("1357");
		vo.setStudentDept("국문학과");
		try {
			vo.setStudentBirthday(sdf.parse("2001-01-01"));
		}catch(ParseException e) {
			e.printStackTrace();
		}
		StudentService svc = new StudentServiceImpl();
//		if(svc.removeStudent(vo.getStudentId())) {
//			System.out.println("정상등록");
//		}else {
//			System.out.println("에러발생");
//		}
		System.out.println("단건조회: " + svc.getStudent(vo.getStudentId()));
		svc.listStudent().forEach(student -> System.out.println(student));
		
		
	}//endmaim
}//end
