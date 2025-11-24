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
	if(name_flag&&email_flag)
	{
		var form=document.getElementById("visitor_info");
		form.submit();
	}
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
