$(document).ready(function(){
// alert()
$("#btnregister").click(function(){
	// alert()
	formdata = $("#register-form").serialize()
	// alert(formdata)
	$.ajax({

			url : "/register_action",
			data : formdata,
			type : "post",
			success : function(response){
				alert(response)
					
			}


	}); 

})


	




$("#btnlogin").click(function(){

	// alert()
	data = $("#login-form").serialize()
	// alert(data)
	
	$.ajax({
		url : "/login_action",
		data : data,
		type : "post",
		success : function(response){
			alert(response)
			if(response.trim() == 1)
				window.location.href = "/redirect"

		}

	})	})
})
