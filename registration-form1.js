
	$( document ).ready(function() {	

		function error(key, errorMessage=null){
      if(errorMessage === null){
         errorMessage = 'fill this field correctly';
      }
			if(!($('#registration').find('input[name=' + key + ']').next('span.arrow-box').length)){
  					$('#registration').find('input[name=' + key + ']').after('<span class="arrow-box">Please ' + errorMessage + '</span>');
  					$('.arrow-box').css('padding');
  					$('.arrow-box').css('padding','10px');
  					
  				} 
		}
		

		var showAddr = true;
		var showUserInfo = false;
		
		$( "#registration" ).on( "submit", function( event ) {
			
			var hasError = false;
			$(this).find('span.arrow-box').remove();
  			event.preventDefault();
  			var serilizedForm = $(this).serialize();
  			var arr = serilizedForm.split('&');
  			var arrFormValue = [];
  			$.each(arr, function(index, value){
  
  				var tempArr = value.split("=");
  				arrFormValue[tempArr[0]]=tempArr[1];
  			});
		
  			for(var key in arrFormValue){

				if(arrFormValue[key] == ''){
					hasError = true;
  						error(key);
				} else {
				  switch(key){
              case 'fname':

              break;
              case 'lname':

              break;
              case 'nationality':
                
              break;
              case 'country':

              break;
              case 'location':

              break;
              case 'address':

              break;
              case 'user-name':

              break;
              case 'email': 
                var errorMessage = 'fill your email in this format: example@example.com',
                    correctEmail = /[a-zA-Z0-9_-]+@[a-zA-Z]+[.][a-z]*/g,
                    email = $('#registration').find('input[name=' + key +']').val();
                if(!(correctEmail.test(email))){
                  error(key, errorMessage);
                }
              break;
              case 'pass':
                var pass =  $('#registration').find('input[name=' + key +']').val();
              break;
              case 'confirm-pass':
                var errorMessage = 'insert same password',
                    confirmPass = $('#registration').find('input[name=' + key +']').val();
                if(!(pass===confirmPass)) {
                  error(key, errorMessage);
                }
              break;
            }
          }
			}

  		if(!hasError && showAddr){
  			$.ajax({
 				  method: "GET",
  				url: "address.html",
			 	  dataType: "html",
			   	success: function(result){
			 		$('#registration').find('#personal-info').after(result);
			 		showAddr=false;
			 		showUserInfo=true;
			 	}
			});
  		}
  		
  		if(!hasError && showUserInfo){
  			$.ajax({
  				method: "GET",
  				url: "userInfo.html",
  				dataType:"html",
  				success: function(result){
					$('#registration').find('#address').after(result);
					showUserInfo = false;
  				}
  			});
  		}
		});

		

			
		});