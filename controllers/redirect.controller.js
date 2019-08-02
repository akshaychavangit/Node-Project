module.exports.RedirectCntrl = function(req,res){


    console.log(req.session)
	console.log(req.session.username)
	username = req.session.username
	// res.end("redirect")
	if(username != undefined)
	{
		if(username == "admin")
			res.redirect("/admin")
		else
		{

			res.redirect("/users")
		}
	}
	else
	{
		res.redirect("/")
	}
}