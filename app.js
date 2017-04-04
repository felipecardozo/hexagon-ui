function changeModel() {
	var radios = $("input[name='options']:checked");
	radios.forea
	jQuery.each(radios, function(i, val) {
		console.log(val.value);
		if (val.value == "1-1") {
			$(".pyramid-container99-0 .pyramid-level-22").css("border-bottom-color", "rgb(175, 17, 17)");
		} else if (val.value == "1-2") {
			$(".pyramid-container99-0 .pyramid-level-33").css("border-bottom-color", "rgb(175, 17, 17)");
		} else if (val.value == "1-3") {
			$(".pyramid-container99-0 .pyramid-level-4").css("border-bottom-color", "rgb(175, 17, 17)");
		} else if (val.value == "1-4") {
			$(".pyramid-container99-0 .pyramid-level-5").css("border-bottom-color", "rgb(175, 17, 17)");
		} else if (val.value == "1-5") {
			$(".pyramid-container99-0 .pyramid-level-6").css("border-bottom-color", "rgb(175, 17, 17)");
		} else if (val.value == "2-1") {

		} else if (val.value == "2-2") {

		} else if (val.value == "2-3") {

		} else if (val.value == "2-4") {

		} else if (val.value == "2-5") {

		} else if (val.value == "3-1") {

		}
	});

}