<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="../layout/menu.jsp" %>
<%@include file="../layout/header.jsp" %>
	<%
	BoardVO vo = (BoardVO) request.getAttribute("bno");
	System.out.println(vo);
	System.out.println("boardNo는 " + vo.getBoardNo());
	%>
	<h3>상세화면(조회화면)</h3>
	<form action="modifyForm.do" name="myForm" enctype="multipart/form-data">
	<input type="hidden" name="bno" value="<%=vo.getBoardNo() %>">
	<table class="table">
		<tr>
			<th>글번호</th>
			<td><%=vo.getBoardNo()%></td>
			<th>작성일시</th>
			<td><%=vo.getWriteDate()%></td>
		</tr>
		<tr>
			<th>글제목</th>
			<td colspan="3"><%=vo.getTitle()%></td>
		</tr>
		<tr>
			<td colspan="4">
			<textarea class="form-control" rows="5" cols="40"><%=vo.getContent()%></textarea>
			</td>
		</tr>
		<tr>
		<th>이미지</th>
		<td colspan="3"><img width="80px" src="images/<%=vo.getImage()%>"></td>
		</tr>
		
		<tr>
			<th>작성자</th>
			<td><%=vo.getWriter()%></td>
			<th>조회수</th>
			<td><%=vo.getViewCnt()%></td>
		</tr>
		<tr>
				<td colspan="2" align="center">
				<input type="submit" class="btn btn-primary" value="수정"> 
				<input type="button" class="btn btn-warning" value="삭제">
				</td>
			</tr>

	</table>
	</form>
	<p><a href="boardList.do">목록으로</a></p>
	<script>
		document.querySelector('input[type=button]').addEventListener('click', function(e){
			document.forms.myForm.action = 'removeForm.do';
			document.forms.myForm.submit();
		})
	</script>
<%@include file="../layout/footer.jsp" %>