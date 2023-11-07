package co.yedam.reply.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Command;
import co.yedam.reply.service.ReplyService;
import co.yedam.reply.serviceImpl.ReplyServiceImpl;

public class DelReplyControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// TODO Auto-generated method stub
		String replyNo = req.getParameter("replyNo");
		
		Gson gson = new GsonBuilder()
				.setDateFormat("yyyy-MM-dd")
				.create();
		
		Map<String, Object> map = new HashMap<>();
		ReplyService svc = new ReplyServiceImpl();
		resp.setContentType("application/json;charset=utf-8");
		
		if(svc.deleteReply(Integer.parseInt(replyNo))) {
			map.put("retCode", "OK");
		}else {
			map.put("retCode", "NG");
		}

		try {
			resp.getWriter().print(gson.toJson(map));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
