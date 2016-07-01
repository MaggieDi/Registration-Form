
	$( document ).ready(function() {	

		function error(key){
			var errorMessage = 'must not be empty';
			if(!($('#registration').find('input[name=' + key + ']').next('p.arrow-box').length)){
  					$('#registration').find('input[name=' + key + ']')
  					.after('<p class="visible arrow-box">This field ' + errorMessage + '</p>');
  					}
		}
		var showAddr = true;
		var showUserInfo = false;
		$( "#registration" ).on( "submit", function( event ) {
			var hasError = false;
			
			$(this).find('p.arrow-box').remove();
  			event.preventDefault();
  			var serilizedForm = $(this).serialize();

  			console.log(serilizedForm);

  			var arr = serilizedForm.split('&');
  			var arrFormValue = [];
  			$.each(arr, function(index, value){
  
  				var tempArr = value.split("=");
  			
  				arrFormValue[tempArr[0]]=tempArr[1];
  			});
		
  			for(var key in arrFormValue){
				if(arrFormValue[key] == ''){
					hasError = true;
  				switch(key){
  					case 'fname':			
  					case 'lname':
  					case 'nationality':
  					case 'country':
  					case 'location':
  					case 'address':
  					case 'user-name':
  					case 'pass':
  					case 'confirm-pass':
  					error(key);
  					break;
  				}

  				}
  			}

  		if(!hasError && showAddr){
  			$.ajax({
 				method: "GET",
  				url: "adress.txt",
			 	dataType: "html",
			 	success: function(result){
			 		
			 		$('#registration').find('#personal-info').after(result);
			 		showAddr=false;
			 		showUserInfo=true;
			 	}
			});
  		}
  		console.log(showUserInfo);
  		if(!hasError && showUserInfo){
  			$.ajax({
  				method: "GET",
  				url: "userInfo.txt",
  				dataType:"html",
  				success: function(result){
					$('#registration').find('#address').after(result);
					showUserInfo = false;
  				}
  			});
  		}
		});

		

			
		});