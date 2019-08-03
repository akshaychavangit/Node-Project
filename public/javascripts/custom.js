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
				// alert(response)
				$('#err2').html(response)
				
					
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
			// alert(response)
			// $('#err1').html(response)
			if(response.trim() == 1)
			{
				window.location.href = "/redirect"
			}
			else
			{
				$('#err1').html(response)
			}

		}

	})	})




	$("#btnadd").click(function(){
		// alert()
		formdata = $("#myform").serialize()
		// alert(formdata)
		$.ajax({
	
				url : "./addcategory_action",
				data : formdata,
				type : "post",
				success : function(response){
					// alert(response)
					$('#err').html(response)
					
						
				}
	
	
		}); 
	
	})


	$("#mypform").on('submit', function(e){
		e.preventDefault();

		// return;
		var form_data = new FormData(this);                  
		// alert(form_data);	
		$("#err").html("Please wait...")
		$.ajax({
			url: './addproduct_action', 
			cache: false,
			contentType: false,
			processData: false,
			data: form_data,                         
			type: 'post',
			success: function(response){
				
				
					$("#err").html(response)

			}
		 });
	})
})
