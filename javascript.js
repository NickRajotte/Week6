//Nick Rajotte Week 6 Lab

// function test if first name has a space
//variable declared and RegEx used to check for letters only
// then returns a true or false
function noSpaceAlphaValidate(str){			
	var noSpaceAlpha = /^[a-zA-Z]+$/;		
	return noSpaceAlpha.test(str);			
}


// this function checks for letters but allows for spaces in the name
// returns true if only letters and spaces and false if not
function SpaceAlphaValidate(str){	
	var SpaceAlpha = /^[a-zA-Z\s]+$/;		
	return SpaceAlpha.test(str);			 
}

function emailValidate(str){			// function validates if email has characters, @, and .com
	var email_Validate = /^[a-zA-Z]+@[a-zA-Z_]+?\.[a-zA-Z]{3}$/;
	return email_Validate.test(str);		// returns the test results
}

function commentValidate(str){		// function validates and finds if there is any html tags in comment box
	var comment_validate = /(<([^>]+)>)/ig;
	return str.replace(comment_validate, "");		// replaces if it finds html tags
}



function submitform(){
//variables are declared and told where to get there information from or set to a default like hasErrors
var fname = document.getElementById('fname');						
var error_fname = document.getElementById('error_fname');
var hasErrors = false;

		//Checks to make sure there is something in the box
		if ( !fname.value.length){							
			error_fname.innerHTML = "*";
			fname.className = "error_box";
			hasErrors = true;
		//if it has something in the box it goes through the function to check for only Alphabit and no spaces
		}else if(noSpaceAlphaValidate(fname.value) == false){		
			error_fname.innerHTML = "Letters Only No Spaces Allowed!";
			fname.className = "error_box";
			hasErrors = true;
// comes to this else if everything passes for first name
		} else {
			error_fname.innerHTML = "";					
			fname.className = "good_box";
		}

//declaring variables for last name check		
var lname = document.getElementById('lname');
var error_lname = document.getElementById('error_lname');			

		//another check to make sure there is atleast something in the box and they are not leaving it blank
		if ( !lname.value.length){
			error_lname.innerHTML = "*";
			lname.className = "error_box";
			hasErrors = true;
		// calls last name function check in allowing letters and spaces
		}else if(SpaceAlphaValidate(lname.value) == false){			 
				error_lname.innerHTML = "Last name letters and spaces only!";
			lname.className = "error_box";
			hasErrors = true;
		//if it passes the tests it will give it the good box css class
		} else {
			error_lname.innerHTML = "";		
			lname.className = "good_box";
		}
//variables for checking the email getting the email var from the html
var email = document.getElementById('email');
var error_email = document.getElementById('error_email');				
		
		// makes sure there is something in the email box
		if ( !email.value.length ){
			error_email.innerHTML = "*";				
			email.className = "error_box";
			hasErrors = true;
		// calls the email check function into use to make sure there is an @ and . in it
		}else if(emailValidate(email.value) == false){			
			error_email.innerHTML = "email is invalid check for @ and .";
			email.className = "error_box";
			hasErrors = true;

		}else if (email.value.indexOf("@") == -1) { 				// error message if textbox is missing @
			error_email.innerHTML = "MISSING (@)";
			email.className = "error_box";
			hasErrors = true;

		}else if (email.value.indexOf(".") == -1) { 				// error message if textbox is missing (.)
			error_email.innerHTML = "MISSING (.)";
			email.className = "error_box";
			hasErrors = true;	

		}else{
			error_email.innerHTML = "";
			email.className = "good_box";		//comes down to this else if everything is good to go
		}	

		var comment = document.getElementById('comment');
		var error_comment = document.getElementById('error_comment');

		if ( !comment.value.length ){								/* checks if any words are recorded, and validates it */
			error_comment.innerHTML = "*";
			comment.className = "error_box";
			hasErrors = true;
		// this is making sur the comment isnt longer than 150 characters and sending a notice if it is more than
		}else if (comment.value.length > 150) { 				
			error_comment.innerHTML = "	too many characters";
			comment.className = "error_box";
			hasErrors = true;
		// if the above two tests work it will come to this statement
		}else{
			error_comment.innerHTML = "";				
			comment.className = "good_box";
			comment.value = commentValidate(comment.value);
			}
		// takes the results makes a new page and displays the information that input as long as there is no errors
		if(!hasErrors){
			var confirmation = document.getElementById('confirmation');					
			confirmation.style.display = "block";
			var main_form = document.getElementById('main_form');
			main_form.style.display = "none";
			var results = "";
			results += "First Name: " + fname.value + "<br />";
			var confirmation_result = document.getElementById('confirmation_result');
			confirmation_result.innerHTML =  results;
			results += "Last Name: " + lname.value + "<br />";
			var confirmation_result = document.getElementById('confirmation_result');
			confirmation_result.innerHTML =  results;
			results += "Email: " + email.value + "<br />";
			var confirmation_result = document.getElementById('confirmation_result');
			confirmation_result.innerHTML =  results;
			results += "comment: " + comment.value + "<br />";
			var confirmation_result = document.getElementById('confirmation_result');
			confirmation_result.innerHTML =  results;

		}

	}
