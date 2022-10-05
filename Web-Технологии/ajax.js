$(document).ready(function() {
	$('form').on('submit', function() {
		let name = $("#name").val()
		let phone = $("#phone").val()
        let question = $("#question").val()
		let data = {
			'name': name,
			'phone': phone,
            'question':question
		};
		$.get("action.php", data, function(d) {
			$("#result").html(d);
		});
		alert('Форма отправлена: "+name+" "+phone+" "+question+" ');
		return false;
	});
});