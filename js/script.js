// WEB303 Assignment 2
// Eric Batiste


$('#vprospect').click(function(e){
	e.preventDefault()
	$('#solution').hide().fadeIn(3000, function(){
	})
	$('#solution').load('prospect.html')
}) 

$('#vconvert').click(function(e){
	e.preventDefault()
	$('#solution').hide().fadeIn(3000, function(){
	})
	$('#solution').load('convert.html')
}) 

$('#vretain').click(function(e){
	e.preventDefault()
	$('#solution').hide().fadeIn(3000, function(){
	})
	$('#solution').load('retain.html')
}) 

