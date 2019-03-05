	function print99(x){
		while(x.length>0 && x.charAt(0)==' ')
	 		x = x.substring(1,x.length);
		while(x.length>0&&x.charAt(x.length-1)==' ')
			x = x.substring(0,x.length-1);
		return x;
	}
	
	function isNull(elem,message){
		var va=print99(elem.value);
		if(va==""){
			alert(message);
			elem.focus();
			return false;
		}
		return true;
	}
 
	function checkName(){
		var first=document.forms[0].Name.value.charAt(0);
		var exp=/^[a-zA-Z0-9]+$/;
		if(isNull(document.forms[0].Name,"账号不能为空，请输入账号！")){
			if(first>='a'&&first<='z'||first>='A'&&first<='Z'){
			}
			else{
				alert("登录账号要求以字母开头，请您重新输入！");
				document.forms[0].Name.focus();
				return false;
			}
			if(!exp.test(document.forms[0].Name.value)){
				alert("账号必须是字母或数字！");
				document.forms[0].Name.focus();
				return false;
			}
			return true;
		}else
			{
			return false;
		}
	}
 
	function checkpw(){
		var exp=/^[A-Za-z0-9]+$/;
		if(isNull(document.forms[0].pw,"密码不能为空，请输入密码！")){
			if(document.forms[0].pw.value.length<=8){
				alert("密码必须大于8位！");
				document.forms[0].pw.focus();
				return false;
			}
			else{
				if(exp.test(document.forms[0].pw.value)){
					alert("密码需要包含其他字符!");
					document.forms[0].pw.focus();
					return false;
				}
			}
		}
		else{
			return false;
		}
		if(document.forms[0].pw.value!=document.forms[0].pw1.value){
			alert("两次密码输入不同!");
			document.forms[0].pw.focus();
			return false;
		}
		return true;
	}
	
    function checkname(){
    	var exp =/^[\u4e00-\u9fa5]{2,4}$/i;
    	if(isNull(document.forms[0].name,"姓名不能为空，请输入姓名")){
 			if (!exp.test(document.forms[0].name.value)) {
 				alert("请输入正确格式的姓名！");
 				document.forms[0].name.focus();
				return false;
 			}
 			return true;
 		}
 		else{
			return false;
 			}
    }
    
    function checkIdenty(){
		var bir=document.forms[0].birth.value;
		var ide=document.forms[0].identy.value;
		var biride=ide.substring(6,10)+"-"+ide.substring(10,12)+"-"+ide.substring(12,14);
		if(isNull(document.forms[0].identy,"身份证号码不能为空，请输入")){
			if(ide.length!=18){
				alert("请输入正确格式的身份证号码（18位）");
				document.forms[0].identy.focus();
				return false;
			}else
			{
				if(bir!=biride){
					alert("您的身份证信息与生日不符合，请重新输入！");
					document.forms[0].identy.focus();
					return false;
				}
			}
			return true;
		}
		else{
			return false;
		}
	}
    
	function checkecode(){
		var exp=/^[0-9]+$/;
		if(isNull(document.forms[0].ecode,"邮编不能为空，请输入")){
			if(document.forms[0].ecode.value.length!=6){
				alert("请输入正确格式的邮政编码（6位）");
				document.forms[0].ecode.focus();
				return false;
			}else{
				if(!exp.test(document.forms[0].ecode.value)){
					alert("邮编为数字");
					document.forms[0].ecode.focus();
					return false;
				}
			}
			return true;
		}
		else{
			return false;
		}
	}
	
	function checkEmail(){
		// var exp=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        // var exp=/^[\u4e00-\u9fa5]{3,20}$/;//3-20个汉字
        // var exp=/^[a-zA-Z\u4e00-\u9fa5]{3,20}$/;//3-20个汉字 + 英文
        // var exp=/^[0-9a-zA-Z\u4e00-\u9fa5]{3,20}$/;//3-20个汉字 + 英文 + 数字
        // var exp=/^[0-9A-Z]{18}$/;//18位数字加大写字母
        // var exp=/^[0-9]$/;//纯数字没有限制
        // var exp=/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;//姓名的验证
        // var exp=/^([159Y]{1})([1239]{1})([0-9ABCDEFGHJKLMNPQRTUWXY]{6})([0-9ABCDEFGHJKLMNPQRTUWXY]{9})([0-90-9ABCDEFGHJKLMNPQRTUWXY])$/;//企业统一社会信用代码正则
        // var exp=/^((0\d{2,3}-\d{7,8})|(1[35894]\d{9}))$/;//座机或手机的正则
        // var exp=/^0\d{2,3}-\d{7,8}$/;//座机的正则
        // var exp=/^1[35894]\d{9}$/;//手机的正则
        // var exp=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;//邮箱的正则
        // var exp=/^((https|http|ftp|rtsp|mms){0,1}(:\/\/){0,1})www\.(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;//网址的正则
        
        
        alert(document.forms[0].email.value)
        if(!exp.test(document.forms[0].email.value)){
            alert("Email格式错误！");
            document.forms[0].email.focus();
            return false;
        }
        return true
}
 
	function last(){
		// if(checkName()&&checkpw()&&checkname()&&checkIdenty()&&checkecode()&&checkEmail()){
        if(checkEmail()){
			document.forms[0].submit();
			return true;
		}
		return false;
	}