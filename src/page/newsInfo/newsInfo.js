$(function() {

	var Ohref=window.location.href;
	var arrhref=Ohref.split("?id=");
	var id = arrhref[1];

	detail({id: id}).then(function(res) {
		console.log(res.data)
		$('.title').html(res.data.textTitle)
		$('title').html(res.data.title)
		$('.text').html(res.data.content)
		$('meta[name=keywords]').attr('content', res.data.keywords)
		$('meta[name=description]').attr('content', res.data.description)

		Crumbs(2, res.data.typeId, true)
	})	
})