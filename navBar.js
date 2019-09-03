//on load, do stuff
window.onload= function(){
	var navigation = document.getElementsByClassName("navBarItem"); //Parent
	var original = document.getElementById("original");
	var isMouseOver = false;
	//just some debugging stuff checking the elements in the class and how many there are.
	console.log("Get elements By Class: ", navigation);
    console.log("Total elements by Class: ", navigation.length);
	//for each item, create event listeners...
	for(let i = 0, len = navigation.length; i < len; i++) {
    //for both mouseover..
		navigation[i].onmouseover = function () {
			console.log("The Elements got by this is",navigation);
			console.log("original is:", original);
		   //checks if the list of classes has colored..
				for (let j = 0, len = navigation.length; j < len; j++){
					console.log(navigation[j]);
					navigation[j].classList.remove("colored");
				}
		
		   if (!this.classList.contains("colored")){
			   //if it doesn't,add it.
			   this.classList.add("colored");
			   console.log("ClassName:", this.className);
			}
		}
		
	
	//and mouseout
		navigation[i].onmouseout = function() {
			console.log("removed!");
			//checks if the list of classes has colored...
			if (this.classList.contains("colored")){
				//if it DOES, remove it
				this.classList.remove("colored");
				} 
				original.classList.add("colored");
		}
	}
}
