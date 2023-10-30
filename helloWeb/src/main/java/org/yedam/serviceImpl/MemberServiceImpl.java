package org.yedam.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

import org.yedam.common.DataSource;
import org.yedam.service.MemberService;
import org.yedam.service.MemberVO;

public class MemberServiceImpl implements MemberService{

	DataSource dao = DataSource.getInstance();
	Connection conn;
	PreparedStatement ps;
	ResultSet rs;
	
	@Override
	public List<MemberVO> memberList() {
		List<MemberVO> member = new ArrayList<>();
		MemberVO vo;
		String sql = "SELECT * FROM MEMBER";
		try {
			conn = dao.getConnection();
			ps = conn.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			System.out.printf("");
			while(rs.next()) {
				vo = new MemberVO();
				vo.setMid(rs.getString("mid"));
				vo.setPass(rs.getString("pass"));
				vo.setName(rs.getString("name"));
				vo.setPhone(rs.getString("phone"));
				member.add(vo);
			}
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			try {
				if(rs != null) 
					rs.close();
				if(ps != null)
					ps.close();
				if(conn != null)
					conn.close();
			}catch(SQLException e) {
				e.printStackTrace();
			}
		}
		return member;
	}

	@Override
	public boolean addMember(MemberVO vo) {
		String sql = "insert into member values(?, ?, ?, ?)";
		conn = dao.getConnection();
		
		try {
			ps = conn.prepareStatement(sql);
			ps.setString(1, vo.getMid());
			ps.setString(2, vo.getPass());
			ps.setString(3, vo.getName());
			ps.setString(4, vo.getPhone());
			
			int r = ps.executeUpdate(); //반환값은 데이터처리 건수.
			if(r == 1) {
				return true;
			}
		}catch(SQLException e) {
			e.printStackTrace();
		}
		
		
		return false;
	}
	
	@Override
	public boolean modifyMember(MemberVO vo) {
		String sql = "update member set pass=?, name=?, phone=? where mid=?";
		conn = dao.getConnection();
		
		try {
			ps = conn.prepareStatement(sql);
			ps.setString(1, vo.getPass());
			ps.setString(2, vo.getName());
			ps.setString(3, vo.getPhone());
			ps.setString(4, vo.getMid());
			
			int r = ps.executeUpdate(); //반환값은 데이터처리 건수.
			if(r == 1) {
				return true;
			}
		}catch(SQLException e) {
			e.printStackTrace();
		}
		return false;
	}
		
	

}
