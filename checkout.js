//window.onload = function() {
    //var myStr = ""
	document.write('<div id="fillDiv">');
	if (sessionStorage.length == 0){
		document.write('<p class="emptypara">no Subscriptions currently! hit buttons to add subscriptions!</p>');
	}
	for (let i= 0; i < sessionStorage.length; i++){
	    document.write('<div id=');
		document.write(sessionStorage.key(i));
		document.write(' class ="deleteitemsDiv">');
		document.write('<p class="delName">');
		document.write(sessionStorage.key(i));
		document.write('</p>');
		document.write('<div class="clear"></div>');
		document.write('<button class="dbutton">delete sub on ');
		document.write(sessionStorage.key(i));
		document.write('</button></div>');
		//myStr = "<p>" ++ sessionStorage[i].key ++ "</p>"
		//myStr = "</div>"
	}
	document.write('</div>');
	
	var list = document.getElementsByClassName("dbutton");
	for (let j = 0; j < list.length;j++){
		list[j].addEventListener("click",function(){
			var parent = list[j].parentElement.id;
		if (sessionStorage.getItem(parent) == "true") {
			console.log("did a delete thing on" + parent);
			sessionStorage.removeItem(parent);
		}
         window.location='checkout.html';
		 });
	}
	
//}
	
	//document.writeln(myStr);

