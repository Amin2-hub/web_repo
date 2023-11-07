package co.yedam.reply.mapper;

import java.util.List;

import co.yedam.reply.service.ReplyVO;
// mapper : select insert update delete
public interface ReplyMapper {
	public List<ReplyVO> replyList(int boardNo); //목록
	public ReplyVO selectReply(int replyNo); //단건조회
	public boolean insertReply(ReplyVO vo);  //등록
	public boolean updateReply(ReplyVO vo); //수정 ->댓글내용만 수정
	public boolean deleteReply(int replyNo); //삭제
	
}
