exports.registroContacto=function(req,res){
	res.render( 'registroContacto',{Titulo:'registro de contacto'});


}

exports.respuestaContacto=function(req,res){
	res.render('respuestaContacto',{mensaje:'se registro el contacto'});
}