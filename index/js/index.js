function greet()
{
	var queryString = window.location.search;
	var urlParams = new URLSearchParams(queryString);
	var name = urlParams.get('visitor_name');
	document.getElementById("window_greet_index_h3").innerHTML="你好~\r\n"+name;
}
function close_window(window_id,mask_id)
{
	window_dom=document.getElementById(window_id)
	mask_dom=document.getElementById(mask_id)
	window_dom.remove();
	mask_dom.remove();
}
