
//visitor表单信息合法性验证
function visitor_info_validate()
{
	var name_flag=0,email_flag=0;

	var visitor_name = document.getElementById("VisitorName").value;
	var visitor_email = document.getElementById("VisitorEmail").value;

	
	let name_validate = /^[a-zA-Z]\w{0,9}$/;
	let email_validate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	
	/*	验证为空的被合法性验证取代了呢...
	if (visitor_name == null || visitor_name == "") {
		document.getElementById("visitor_name_validate").innerHTML="*来访者名字不能为空";
    }
	if (visitor_email == null || visitor_email == "") {
		document.getElementById("visitor_email_validate").innerHTML="*来访者邮箱不能为空";
	}
	*/
	if(!(name_validate.test(visitor_name)))
	{
		document.getElementById("visitor_name_validate").innerHTML="*需以字母开头，1~10个字符";
	}
	else
	{
		name_flag=1;	
	}
	
	if(!(email_validate.test(visitor_email)))
	{
		document.getElementById("visitor_email_validate").innerHTML="*请输入正确的邮箱~";
	}
	else
	{
		email_flag=1;
	}
	if(name_flag==1&&email_flag==1)
	{
		
		var button_jump = document.getElementById("Login_Sheet_Window_M button");
		button_jump.onclick=location.href=("index_r.html?visitor_name=<br>"+visitor_name);
	}

/*由于发现github无法直接使用post并且用api来传表单的话因为源代码是在库里
而且这个过程也是由前端进行（压根没有能用的后端TT）然后会直接暴露token
随后我意识到所谓的“访客信息”事实上只是用来为访客留言服务的，并不需要长期存储
也就是说，它事实上可以和网页本身一样作为“一次性元素”暂时地存储在web上
只不过不可见罢了....誒...等等等等，访客留言不能是一次性的，所以还是得
让表单上传，不过没法直接上传到github，但是也许可以试试邮箱，思路如下：

访客填写表单，表单发送至邮箱，写一个程序让邮箱中的内容读取至本地文件，
再将本地文件push至github
好像有点麻烦...应该不可避免的会有手动部分
不知道这个过程该怎么自动化一下呢...想想。
*/
/*	
	if(name_flag==1 && email_flag==1)
	{
		document.getElementById("sheet_submit").innerHTML="存储确认~";
		newnode=xmlDoc.createElement("visitor");
		newnode1=xmlDoc.createElement("name");
		newnode2=xmlDoc.createElement("email");
		newtext1=visitor_name;
		newtext2=visitor_email;
		
		node=xmlDoc.getElementsByTagName("visitor_list")[0];
		node.appendChild(newnode1);
		
		node1=xmlDoc.getElementsByTagName("visitor")[0].childNodes[0];
		node2=xmlDoc.getElementsByTagName("visitor")[0].childNodes[1];
		node1.nodeValue=newtext1;
		node1.nodeValue=newtext1;
	}
	*/
}


//监听input窗口click事件清除提示
function clear_tip()
{
	document.getElementById('VisitorName').addEventListener('click', function () {document.getElementById("visitor_name_validate").innerHTML="";});
	document.getElementById('VisitorEmail').addEventListener('click', function () {document.getElementById("visitor_email_validate").innerHTML="";});

}
