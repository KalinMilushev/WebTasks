function testFunction() {
	var emailField = document.getElementById("email");
	emailField.setCustomValidity(emailField.value + " is invalid! Please try again.");
}

function valdiateForm() {
	var emailField = document.getElementById("email");
	emailField.setCustomValidity(emailField.value + " is invalid! Please try again.");
}

function validate()
      {
      
         if( document.mapsForm.firstname.value == "" )
         {
            alert( "Please provide your name!" );
            document.mapsForm.firstname.focus() ;
            return false;
         }

         if( document.mapsForm.lastname.value == "" )
         {
            alert( "Please provide your name!" );
            document.mapsForm.lastname.focus() ;
            return false;
         }
         
         if( document.mapsForm.adress.value == "" )
         {
            alert( "Please provide your name!" );
            document.mapsForm.adress.focus() ;
            return false;
         }

         if( document.mapsForm.email.value == "" )
         {
            alert( "Please provide your Email!" );
            document.mapsForm.email.focus() ;
            return false;
         }

         if( document.mapsForm.phonenumber.value == "" )
         {
            alert( "Please provide your Email!" );
            document.mapsForm.phonenumber.focus() ;
            return false;
         }

         if( document.mapsForm.website.value == "" )
         {
            alert( "Please provide your Email!" );
            document.mapsForm.website.focus() ;
            return false;
         }
         
         return( true );
      }