window.onload= function(){

var inputButtons = document.getElementsByClassName("sendButton"); //select all our buttons
//let i = 0;
	for (let i= 0; i < inputButtons.length; i++){
		let button = inputButtons[i];
		button.addEventListener("click", function(){
			//alert("Button " + i + " Pressed with ID: " + this.id);
			sessionStorage.setItem(this.id,"true");
			//alert(sessionStorage);
		});
	}


var listButtons = document.getElementsByClassName("viewButton");
//var storageItems = [];
	for (let j = 0; j < listButtons.length; j++){
		//var alertMsg = "";
		let vbutton = listButtons[j];
		vbutton.addEventListener("click", function(){
			window.location='checkout.html';
		});
    }
    

var colClick = document.getElementsByClassName("column");
var locA = ['about.html','checkout.html','classes.html'];

      for (let k =0 ; k < colClick.length; k++){
		 let vbutton = colClick[k];
		vbutton.addEventListener("click", function(){
			window.location=locA[k];
		}); 
	  }
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
			//console.log("The Elements got by this is",navigation);
			//console.log("original is:", original);
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
//note: we want to make a new javascript for a new page such that when it loads, it is created using code given by professor neufeld
// then, we want to rewrite the page on deletion of the item when we push the delete item (it will run the same/similar rewrite code on click of the delete button and remove the item to be deleted.)