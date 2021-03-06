/**
 * @author zxx
 * @time 2016年8月7日下午4:28:51
 */
package com.xiaoniu.controller.cmpy;

import java.util.HashMap;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.xiaoniu.controller.base.BaseController;
import com.xiaoniu.db.domain.CmpyInfo;
import com.zxx.common.contants.Contants;
import com.zxx.common.enums.MsgCode;

/**
 * @author zxx
 * @time 2016年8月7日
 *
 */
@Controller
@RequestMapping("/secure/info")
public class InfoController extends BaseController<CmpyInfo>{
	Logger log = Logger.getLogger(InfoController.class);
	@RequestMapping("info.html")
	public ModelAndView infoHtml(){
		ModelAndView mv = new  ModelAndView("secure/info");
		CmpyInfo vo;
		try {
			vo = service.selectByKey(1);
			mv.addObject("info", vo);
		} catch (Exception e) {
			log.error(e);
		}
		return mv;
	}
	
	@RequestMapping("save")
	@ResponseBody
	public Map<String,Object> save(CmpyInfo vo){
		Map<String,Object> map = new HashMap<String,Object>();
		try{
			CmpyInfo entity = new CmpyInfo();
			entity.setId(1);;
			long r = service.selectCount(entity);
			if(r == 0){
				service.save(vo);
			}else{
				service.updateNotNull(vo);
			}
			map.put(Contants.RESULT_CODE, MsgCode.SAVE_SUCCESS.getCode());
			map.put(Contants.MSG, MsgCode.SAVE_SUCCESS.getMsg());
		}catch(Exception e){
			map.put(Contants.RESULT_CODE, MsgCode.SAVE_FAILED.getCode());
			map.put(Contants.MSG, e);
		}
		return map;
	}
}
