/* debugging strategies
debugging level 1 => check if JS syntax is correct (check console)
debugging level 2 => check if the targeting is working (check the connection between the HTML element and equivalent JS functionality ==> alert("here"); inside the function)
debugging level 3 => check if the logic makes sense (check if the JS functionality returns what we expect ==> alert alert(VALUE-NAME); inside the function)
*/
/* function for adding items to the shopping list using the add to list button and enter key */
function addItem() {
//get the value of the input box
	var itemValue = $('#addItem').val();
    
//validate input
    if( (itemValue == "") || (itemValue == " ") || (itemValue == "  ") ) {
		alert("Please add a valid product");
	}
//if the input is valid adding a line ....
	else {
		//dynamically create one row inside the shopping list, adding each row to others
		var row = $('<li><button class="checkbox">&#x2713;</button><span class="list">' + itemValue + '</span><button class="delete" id="remove-button">x</button></li>');
	// Function for making sure item gets to bottom of list
		$('#list').append(row);
	}
    //empty the input box after submit
    	$('#addItem').val('');
}
/*Funtion to remove item from list*/
function removeItem() {
    //$(this) means that on WHATEVER you just clicked, go to the parent of it (in our case the LI) and remove it
	$(this).parent().remove();
}
/* Function to check off item*/
function crossOut() {
    //$this means that on WHATEVER you clicked, go to parent of it, and add / remove crossOut class to it
    $(this).parent().toggleClass('cross-out');    
}
/*Function to clear the list */
 function clearList() {
     //find the UL container(ID list) and delete it
        $('#list').empty();
 }
 /*
 STEP 2
 Declaring functions in document ready and connecting them to HTML containers
/* These should be in document ready because needed on page load*/
$(document).ready(function() {
    /*on click of the add to list button id add-button action add item */
    $('#submitItem').on('click', addItem); 
    /* on click of the reset list button id startover action reset list */
    $('#clearList').on('click', clearList);
    
});
/* The following three function calls should be OUTSIDE the $(document).ready(function() because they are needed after page is loaded *?

/*on click of the 'x' button id remove-buttion action remove item */
	$(document).on('click', '#remove-button', removeItem);

/*on click of a list item id cross-out action, cross-out the item */
	$(document).on('click', '.checkbox', crossOut);

/*on ENTER add item */
$(document).on('keypress', function(key) {
        if (key.keyCode == 13) {
            addItem();
        }
	});