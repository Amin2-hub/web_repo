package co.yedam.student.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import co.yedam.common.DataSource;
import co.yedam.student.service.StudentVO;

public class StudentDAO {
	DataSource ds = DataSource.getInstance();
	Connection conn;
	PreparedStatement psmt;
	ResultSet rs;

	void close() {
		try {
			if (rs != null)
				rs.close();
			if (psmt != null)
				psmt.close();
			if (conn != null)
				conn.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	// 등록
	public int insert(StudentVO vo) {
		String sql = "insert into student(student_id, student_name, " + "student_pw, student_dept, student_birthday) "
				+ "values (?, ?, ?, ?, ?)";
		conn = ds.getConnection();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		System.out.println(sdf.format(vo.getStudentBirthday()));
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getStudentId());
			psmt.setString(2, vo.getStudentName());
			psmt.setString(3, vo.getStudentPw());
			psmt.setString(4, vo.getStudentDept());
			psmt.setString(5, sdf.format(vo.getStudentBirthday()));
			int r = psmt.executeUpdate();
			return r;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return 0; // 처리가 된 건수가 없음: 에러
	}

	// 수정:update
	public int update(StudentVO vo) {
		String sql = "update student set student_name = ?, student_pw = ?, student_dept = nvl(?, student_dept), student_birthday = ? where student_id=?";
		conn = ds.getConnection();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		int r = 0;
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getStudentName());
			psmt.setString(2, vo.getStudentPw());
			psmt.setString(3, vo.getStudentDept());
			psmt.setString(4, sdf.format(vo.getStudentBirthday()));
			psmt.setString(5, vo.getStudentId());
			r = psmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return r;

	}

	// 삭제:delete
	public int delete(String sid) {
		int r = 0;
		String sql = "delete from student where student_id=?";
		conn = ds.getConnection();
		try {
			int rowNo = 1;
			psmt = conn.prepareStatement(sql);
			psmt.setString(rowNo++, sid);
			r = psmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return r;
	}

	// 목록:list
	public List<StudentVO> list() {
		List<StudentVO> student = new ArrayList<>();
		StudentVO vo;
		String sql = "select * from student";
		conn = ds.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				vo = new StudentVO();
				vo.setStudentId(rs.getString("student_id"));
				vo.setStudentName(rs.getString("student_name"));
				vo.setStudentPw(rs.getString("student_pw"));
				vo.setStudentDept(rs.getString("student_dept"));
				vo.setStudentBirthday(rs.getDate("student_birthday"));
				student.add(vo);
			}
			rs.close();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return student;
	}

	// 조회:select
	public StudentVO select(String sid) {
		StudentVO vo = new StudentVO();
		String sql = "select * from student where student_id = ?";
		conn = ds.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, sid);
			rs = psmt.executeQuery();
			if (rs.next()) {
				vo.setStudentId(rs.getString("student_id"));
				vo.setStudentName(rs.getString("student_name"));
				vo.setStudentPw(rs.getString("student_pw"));
				vo.setStudentDept(rs.getString("student_dept"));
				vo.setStudentBirthday(rs.getDate("student_birthday"));
			}
			rs.close();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return vo;
	}

}
