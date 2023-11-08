<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
<jsp:include page="../layout/menu.jsp"></jsp:include>    
<jsp:include page="../layout/header.jsp"></jsp:include>  


	<h3>게시글 수정화면</h3>
	<form action="modifyBoard.do" method="post" >
		<input type="hidden" name="bno" class="form-control" value="${vo.boardNo }">
		<table class="table">
			<tr>
				<th>제목</th>
				<td><input type="text" class="form-control" name="title" value="${vo.title }"></td>
			</tr>
			<tr>
				<th>작성자</th>
				<td><input type="text" class="form-control" name="writer" value="${vo.writer }"></td>
			</tr>
			<tr>
				<th>내용</th>
				<td colspan="2"><textarea class="form-control" cols="40" rows="5" name="content">${vo.content }</textarea></td>
			</tr>
			<tr>
				<th>파일명</th>
				<td><img src="images/">
					<c:choose>
					<c:when test="${!empty vo.image }">
						<img width="80px" src="images/${vo.image }"> 
					</c:when>
					<c:otherwise>
					</c:otherwise>
				</c:choose>
				</td>
			</tr>
			<tr>
				<td colspan="2">
				<input type="submit" class="btn btn-primary" value="수정"> 
				<input type="reset" class="btn btn-warning" value="초기화">
				</td>
			</tr>
		</table>
	</form>
<jsp:include page="../layout/footer.jsp"></jsp:include> 