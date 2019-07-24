$(document).ready(function(){

$("#btnregister").click(function(){
	formdata = $("#register-form").serialize()
	// alert(formdata)
	$.ajax({

			url : "/register_action",
			data : formdata,
			type : "post",
			success : function(response){
				alert(response)
					
			}


	}) 
})
})