var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li"); //contains default li elements


//return size of input object
function inputLength() 
{
	return input.value.length;
}

//enter new item
function createListElement() 
{
	var li = document.createElement("li");	//create li element
	li.appendChild(document.createTextNode(input.value)); //create and add a text node to li element
	var btn = document.createElement("button");	 //create button
	btn.appendChild(document.createTextNode("Delete")); 	//create and add a text node to button element (btn.innerHTML = "Delete";)
	li.addEventListener("click", toggleElement); //same toggle rule applies to newly added item
	li.appendChild(btn); //add button to li element
	ul.appendChild(li); //add li element to the list
	input.value = ""; //reset input

	btn.addEventListener("click", function(){
		li.remove();
	}); //remove li element(and child) when button is clicked 
}

//do not add an empty item to the shopping list 
function addListAfterClick() 
{
	if (inputLength() > 0) {
		createListElement();
	}
}

//add item if user presses "enter"
function addListAfterKeypress(event) 
{
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//toggle between two classes(default and .done) for the current element
function toggleElement()
{
		this.classList.toggle("done");
}

function updateListElement()
{
	for(var i = 0; i < items.length; i++)
	{
		items[i].addEventListener("click", toggleElement);//use another class for an item if clicked
		var btn = document.createElement("button");	//create button
		btn.appendChild(document.createTextNode("Delete")); //create and add a text node to button element
		items[i].appendChild(btn); //add button to corresponding li element
		btn.addEventListener("click", function () {
			//remove li element(and child) when button is clicked; this refers to current pressed button
			this.parentElement.parentElement.removeChild(this.parentElement); //button->li->ul.removeChild(button->li)
    });
	}

}

updateListElement();

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);