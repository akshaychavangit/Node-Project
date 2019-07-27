module.exports.RedirectCntrl = function(req,res){


    console.log(req.session)
	console.log(req.session.username)
	username = req.session.username
	// res.end("redirect")
	if(username != undefined)
	{
		if(username == "admin")
			res.redirect("/category")
		else
		{

			res.redirect("/products")
		}
	}
	else
	{
		res.redirect("/")
	}
}