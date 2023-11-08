package co.yedam.reply.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import co.yedam.reply.service.ReplyVO;
// mapper : select insert update delete  mapper.xml의 id와 매칭되야함
public interface ReplyMapper {
	public List<ReplyVO> replyList(@Param("boardNo") int boardNo, @Param("page") int page); //목록
	public ReplyVO selectReply(int replyNo); //단건조회
	public boolean insertReply(ReplyVO vo);  //등록
	public boolean updateReply(ReplyVO vo); //수정 ->댓글내용만 수정
	public boolean deleteReply(int replyNo); //삭제
	
	public int getTotalCnt(int boardNo);
	public List<Map<String, Object>> getReplyCountByWriter();
}
