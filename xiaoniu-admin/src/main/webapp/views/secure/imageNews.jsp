<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>首页新闻</title>
<jsp:include page="../public/common/head.jsp"></jsp:include>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/xiaoniu/CRUD.css'/>"/>
<link rel="stylesheet" href="/resources/kindeditor-4.1.10/themes/default/default.css" />
<script type="text/javascript" src="<c:url value='/resources/js/xiaoniu/dateTool.js'/>?r=1134"></script>
<script type="text/javascript" src="<c:url value='/resources/js/xiaoniu/common.js'/>?r=31"></script>
<script type="text/javascript" src="/resources/kindeditor-4.1.10/kindeditor-all-min.js"></script>
<script type="text/javascript" src="/resources/kindeditor-4.1.10/lang/zh_CN.js"></script>
<style type="text/css" rel="stylesheet">
     body{height:100%;width:100%}
     *{margin:0;padding:0}
     ul,li{list-style: none}
     a{text-decoration: none;outline: none;color:#FFF;text-align: center;}
     img{vertical-align: middle;width:100%;max-width: 100%;}
     .clear{clear:both}
     .wrap{width:1000px;margin:100px auto 0;border:1px solid #000;padding:20px}
     .btns{margin-bottom: 20px;}
     .btns a{display:inline-block;width:150px;height:50px;line-height: 50px;font-size: 16px;color:#FFF;border-radius: 5px;background: #ce2f10;margin-right: 20px;}
     .btns .btn2{background: #4863ff}
     .btns .btn3{background: #29bd4d}
     .main a{display:inline-block;width:50px;height:600px;line-height: 600px;border-radius: 25px;font-size: 40px;}
     .left{float:left;background:#3fb9be}
     .right{float:right;background:#3fb9be}
     .main_c{float:left;width:840px;;margin-left:30px;;overflow: hidden;border:1px solid #ff9829;height:600px;text-align: center;position:relative;box-sizing: border-box}
     .main_c ul{position:absolute;left:0;top:0;}
     .main_c li{width:200px;;margin:0 5px;border:1px solid #d03cff;float:left;height:600px;box-sizing: border-box;position:relative}
     .main_c li p{position:absolute;bottom:0;left:0;font-size: 16px;line-height: 24px;width:100%}
 </style>
<script type="text/javascript">
    $(function(){
        var w=parseInt($(".main_c ul li").css("width").slice(0,-2));
        var i=$(".main_c ul li").length;
        $(".main_c ul").css("width",i*(w+10)+"px");
        var uw=parseInt($(".main_c ul").css("width").slice(0,-2));
        var mw=parseInt($(".main_c").css("width").slice(0,-2));
        $(".right").click(function(){
            var l=parseInt($(".main_c ul").css("left").slice(0,-2));
            if(l==0){
                $(".main_c ul").animate({"left":-w/2+"px" });
            }else{
                if(l==-(uw-mw-(w/2+10))||l==-(uw-mw)){
                    $(".main_c ul").animate({"left":-(uw-mw)+"px"})
                }else if((-(l+w/2))%(w+10)==0||l==-w/2){
                    $(".main_c ul").animate({"left":(l-(w+10))+"px" });
                }

            }
        });
        $(".left").click(function(){
            var l=parseInt($(".main_c ul").css("left").slice(0,-2));
            if(l==-(uw-mw)){
                $(".main_c ul").animate({"left":l+(w/2+10)+"px"});
            }else{
                if(l==-w/2||l==0){
                    $(".main_c ul").animate({"left":"0"});

                }else if((-(l+w/2))%(w+10)==0){
                    $(".main_c ul").animate({"left":l+(w+10)+"px"});
                }
            }
        })
    })
</script>
<script type="text/javascript">
	commonTable.loadDateURI = "/secure/imageNews/queryList";
	commonTable.batchUpdateValidURI = "/secure/imageNews/batchUpdateValid?strIds=";
	commonTable.batchDeleteURI = "/secure/imageNews/batchDelete?strIds=";
	commonTable.updateURI = "/secure/imageNews/save";
	commonTable.insertURI = "/secure/imageNews/save";
	commonTable.title = "新闻图集";
	commonTable.nowrap = false;
	commonTable.tableQueryParams = {
			orderBy:'id desc'
	}
	commonTable.columns = [
		{field:'ck',checkbox:true},
		{field:'id', title: 'ID',align:'center',  hidden:true},
		{field:'newsId',title: '新闻ID',align:'left'},
		{field:'image',title: '图片连接',align:'left',width:340},
		{field:'serialNumber',title: '序号',align:'center'},
		validColumn,
		createTimeColumn,
		updateTimeColumn,
		{field:'operator',title: '操作',align:'center',
			formatter: function(value,row,index){
				return "<a href='#' onclick='javascript:commonTable.initUpdateWindow("+index+")'>修改</a>";
				}
		},
	];
	
	
	$(function(){
		showPageLoading();
		
		$("#htm_edit").window({
			title : '添加',
			modal : true,
			width : width,
			height : height,
			shadow : false,
			closed : true,
			minimizable : false,
			maximizable : false,
			collapsible : false,
			draggable : true,
			iconCls : 'icon-add',
			resizable : false,
			onClose : function(){
				$("#htm_edit .clear-input").val('');
				$("#htm_edit .clear-textbox").textbox('setValue','');
				$("#htm_edit .clear-numberbox").numberbox('setValue',1);
				$("#htm_edit .clear-combobox").combobox('setValue',1);
				$('#htm_edit_img_preview').addClass('none');
			},
		});
		
		
		KindEditor.ready(function(K) {
			PluginUpload = K.editor({
				cssPath : '/resources/kindeditor-4.1.10/plugins/code/prettify.css',
				uploadJson : '/secure/aliyunOss/upload_json',
				fileManagerJson : '/secure/aliyunOss/file_manager_json',
				allowFileManager : true,
			});
		});
		
		$("#btn-banner-upload").click(function(){
			PluginUpload.loadPlugin('image',function(){
				PluginUpload.plugin.imageDialog({
					imageUrl : $("#edit-div-banner").textbox('getValue'),
					clickFn : function(url, title, width, height, border, align){
						$('#edit-div-banner').textbox('setValue',url);
						$('#htm_edit_img_preview').attr('src',url).removeClass('none');
						PluginUpload.hideDialog();
					}
				});
			});
		});
		
		commonTable.init();
		removePageLoading();
	});
	
	function initAddNewsWindow(){
		$(".datagrid").addClass("none");
		$("#edit-div").removeClass("none");
		$("#edit-form").attr("action",commonTable.insertURI);
	}
	
	function addSingleImage(){
		
	}
	
</script>
</head>
<body>
		<div id="html_table" >
		</div>
		
		<!-- tool bar -->
		<div id="table_tb" style="padding:5px;height:auto" class="none">
			<a href="javascript:void(0);" onclick="javascript:commonTable.initAddWindow()"class="easyui-linkbutton" title="添加" plain="true" iconCls="icon-add" id="addBtn">添加</a>
			<a href="javascript:void(0);" onclick="javascript:commonTable.batchDelete()"class="easyui-linkbutton" title="删除" plain="true" iconCls="icon-cancel" id="delBtn">删除</a>
			<a href="javascript:void(0);" onclick="javascript:commonTable.batchPublish()"class="easyui-linkbutton" title="发布" plain="true" iconCls="icon-ok">发布</a>
			<a href="javascript:void(0);" onclick="javascript:commonTable.batchCancelPublish()"class="easyui-linkbutton" title="撤销" plain="true" iconCls="icon-undo">撤销发布</a>
		</div>
		
		<!-- 添加 -->
		<div id="edit-div" class="none" >
			<form id="edit-form" method="post">
				<!-- 图片 -->
				<div class="wrap">
				    <div class="btns">
				        <a class="btn1" href="javascript:;">按钮一</a>
				        <a class="btn2" href="javascript:;">按钮二</a>
				        <a class="btn3" href="javascript:;">按钮三</a>
				    </div>
				    <div class="main">
				        <a class="left" href="javascript:;"><</a>
				        <div class="main_c">
				            <ul>
				                <li><img src="" alt="图片1"/><p>文字一</p></li>
				                <li><img src="" alt="图片2"/><p>文字二</p></li>
				                <li><img src="" alt="图片3"/><p>文字三</p></li>
				                <li><img src="" alt="图片4"/><p>文字四</p></li>
				                <li><img src="" alt="图片5"/><p>文字五</p></li>
				                <li><img src="" alt="图片6"/><p>文字六</p></li>
				                <li><img src="" alt="图片7"/><p>文字七</p></li>
				                <li><img src="" alt="图片8"/><p>文字八</p></li>
				                <li><img src="" alt="图片9"/><p>文字九</p></li>
				                <li><img src="" alt="图片10"/><p>文字十</p></li>
				                <li><img src="" alt="图片11"/><p>文字十一</p></li>
				                <li><img src="" alt="图片12"/><p>文字二</p></li>
				                <li><img src="" alt="图片13"/><p>文字十三</p></li>
				                <li><img src="" alt="图片14"/><p>文字十四</p></li>
				                <li><img src="" alt="图片15"/><p>文字十五</p></li>
				            </ul>
				        </div>
				        <a class="right" href="javascript:;">></a>
				        <div class="clear"></div>
				    </div>
				</div>
				
				<div class="opt_btn"  style="text-align: center;padding-top: 10px;">
					<a class="easyui-linkbutton" id="import-form-submit-btn" iconCls="icon-ok" onclick="javascript:save();">确定</a> 
					<a class="easyui-linkbutton" iconCls="icon-cancel" onclick="cancel();">取消</a>
				</div>
				<div class="loading display-none" style="text-align: center; padding-top: 10px; vertical-align:middle;">
					<img alt="" src="/resources/images/loading.gif" style="vertical-align:middle;">
					<span style="vertical-align:middle;">请稍后...</span>
				</div>
				
				<div id="display-none-input" class="none">
					<input id="display-none-id" name="id" class="clear-input">
					<input id="display-none-type" name="type" class="clear-input">
					<input id="display-none-top" name="top" class="" value="0">
				</div>
			</form>
		</div>
		
		<div id="htm_edit">
			<form id="edit_form" method="post">
				<table id="htm_edit_table" width="450">
					<tr>
						<td>选择图片</td>
						<td>
							<input id="edit-div-banner" class="clear-input">
							<input type="button" id="btn-banner-upload" value="选择图片"/>
						</td>
					</tr>
					<tr>
						<td>图片预览</td>
						<td>
							<img alt="" src="" id="htm_edit_img_preview" class="none">
						</td>
					</tr>
					<tr>
						<td>文字说明</td>
						<td><textarea cols="" rows="10" id="htm_edit_img_desc"></textarea></td>
					</tr>
					<tr>
						<td><input style="display:none"  readonly="readonly" id="htm_edit_index"  class="clear-input"></td>
						<td><input style="display:none"  readonly="readonly" id="htm_edit_id"  class="clear-input"></td>
					</tr>
					<tr>
						<td class="opt_btn" colspan="2" style="text-align: center;padding-top: 10px;">
							<a class="easyui-linkbutton" iconCls="icon-ok" onclick="javascript:addSingleImage();">确定</a> 
							<a class="easyui-linkbutton" iconCls="icon-cancel" onclick="$('#htm_edit').window('close');">取消</a>
						</td>
					</tr>
				</table>
			</form>
		</div>
</body>
</html>