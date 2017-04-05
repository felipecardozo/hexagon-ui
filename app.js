var COMPLETE = "rgb(175, 17, 17)";
var INICIAL = "#eff595";
var GESTIONADO = "#e8ea51";
var DEFINIDO = "rgb(188, 225, 239)";
var CONTROLADO = "#99d1de";
var OPTIMIZADO = "#89cc78";

function changeModel() {
	var radiosChecked = $("input[name='options']:checked");
	
	jQuery.each(radiosChecked, function(i, val) {
		if (val.value == "1-1") {
			changeColorToComplete(".pyramid-container99-0 .pyramid-level-22");
		} else if (val.value == "1-2") {
			changeColorToComplete(".pyramid-container99-0 .pyramid-level-33");
		} else if (val.value == "1-3") {
			changeColorToComplete(".pyramid-container99-0 .pyramid-level-4");
		} else if (val.value == "1-4") {
			changeColorToComplete(".pyramid-container99-0 .pyramid-level-5");
		} else if (val.value == "1-5") {
			changeColorToComplete(".pyramid-container99-0 .pyramid-level-6");
		} else if (val.value == "2-1") {
			changeColorToComplete(".pyramid-container99-1 .pyramid-level-22");
		} else if (val.value == "2-2") {
			changeColorToComplete(".pyramid-container99-1 .pyramid-level-33");
		} else if (val.value == "2-3") {
			changeColorToComplete(".pyramid-container99-1 .pyramid-level-4");
		} else if (val.value == "2-4") {
			changeColorToComplete(".pyramid-container99-1 .pyramid-level-5");
		} else if (val.value == "2-5") {
			changeColorToComplete(".pyramid-container99-1 .pyramid-level-6");
		} else if (val.value == "3-1") {
			changeColorToComplete(".pyramid-container99-2 .pyramid-level-22");
		} else if (val.value == "3-2") {
			changeColorToComplete(".pyramid-container99-2 .pyramid-level-33");
		} else if (val.value == "3-3") {
			changeColorToComplete(".pyramid-container99-2 .pyramid-level-4");
		} else if (val.value == "3-4") {
			changeColorToComplete(".pyramid-container99-2 .pyramid-level-5");
		} else if (val.value == "3-5") {
			changeColorToComplete(".pyramid-container99-2 .pyramid-level-6");
		} else if (val.value == "4-1") {
			changeColorToComplete(".pyramid-container99-3 .pyramid-level-22");
		} else if (val.value == "4-2") {
			changeColorToComplete(".pyramid-container99-3 .pyramid-level-33");
		} else if (val.value == "4-3") {
			changeColorToComplete(".pyramid-container99-3 .pyramid-level-4");
		} else if (val.value == "4-4") {
			changeColorToComplete(".pyramid-container99-3 .pyramid-level-5");
		} else if (val.value == "4-5") {
			changeColorToComplete(".pyramid-container99-3 .pyramid-level-6");
		} else if (val.value == "5-1") {
			changeColorToComplete(".pyramid-container99-4 .pyramid-level-22");
		} else if (val.value == "5-2") {
			changeColorToComplete(".pyramid-container99-4 .pyramid-level-33");
		} else if (val.value == "5-3") {
			changeColorToComplete(".pyramid-container99-4 .pyramid-level-4");
		} else if (val.value == "5-4") {
			changeColorToComplete(".pyramid-container99-4 .pyramid-level-5");
		} else if (val.value == "5-5") {
			changeColorToComplete(".pyramid-container99-4 .pyramid-level-6");
		} else if (val.value == "6-1") {
			changeColorToComplete(".pyramid-container99-5 .pyramid-level-22");
		} else if (val.value == "6-2") {
			changeColorToComplete(".pyramid-container99-5 .pyramid-level-33");
		} else if (val.value == "6-3") {
			changeColorToComplete(".pyramid-container99-5 .pyramid-level-4");
		} else if (val.value == "6-4") {
			changeColorToComplete(".pyramid-container99-5 .pyramid-level-5");
		} else if (val.value == "6-5") {
			changeColorToComplete(".pyramid-container99-5 .pyramid-level-6");
		}
	});
	/*var radios = $("input[name='options']");
	jQuery.each(radios, function(i, val) {
		
		if(val.checked == false) console.log(val.value);
	});*/
}

function changeColorToComplete(selector) {
	$(selector).css("border-bottom-color", COMPLETE);
}

function changeToDefaultColor(selector, color) {
	$(selector).css("border-bottom-color", color);
}