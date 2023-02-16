// array to represent what is being stored in our stack
var stack = [];

//currentCount and newCount are used to push and pop elements on and off the stack
var currentCount = -1;
var newCount = -1; 
var colorSwitch = 0;
var divColor = "";
$(document).ready(function(){
	$("#push-button").click(function(){
		stack.push($("#text-input").val());
		$("#text-input").val("");
		newCount = currentCount + 1;
		$("#screen-stack-0").after('<div class=stackElem id=it-' + newCount + '>' + stack[stack.length-1] + '</div>');
		colorSwitch = newCount % 3;
		switch(colorSwitch) {
			case 0:
				divColor = "#bf8040";
				break;
			case 1: 
				divColor = "#ff5c33";
				break;
			case 2:
				divColor = "#33cc33";
				break;
		}

		$("#it-" + newCount).css('background-color', divColor);
		ScrollReveal().reveal("#it-" + newCount);
		currentCount = newCount;
	});

	$("#pop-button").click(function() {
		stack.pop();
		$("#it-" + currentCount).remove();
		currentCount = currentCount - 1;
	});

	$(function () {
		$("#ebp").draggable();
	});


	$(function () {
		$("#esp").draggable();
	});
	
	$(function () {
		$("#eip").draggable();
	});
});

