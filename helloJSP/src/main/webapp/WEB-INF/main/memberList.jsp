
<%@page import="co.yedam.board.service.MemberVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>    
<jsp:include page="../layout/menu.jsp"></jsp:include>    
<jsp:include page="../layout/header.jsp"></jsp:include>  


<table class="table">
	<thead>
		<tr>
			<th>아이디</th>
			<th>이름</th>
			<th>전화번호</th>
		</tr>
	</thead>
	<tbody>
	<c:forEach items="${list }" var="member">
		<tr>
			<td>${member.mid }</td>
			<td>${member.name }</td>
			<td>${member.phone }</td>
		</tr>
	</c:forEach>
	</tbody>
</table>
<c:forEach var="i" begin="1" end="10" step="2">
<p>${i }</p>
</c:forEach>
<jsp:include page="../layout/footer.jsp"></jsp:include>  