var reset = function(){
	var	leftArr = [];
	var rightArr =[];
	var totalArr = [];
	var leftVal = 0;
	var rightVal = 0;

	};

$(function(){

	var	leftArr = [];
	var rightArr =[];
	var totalArr = [];
	var leftVal = 0;
	var rightVal = 0;
	var total = 0;

	var operators = {
		add: function(a, b){return(a+b)},
		sub: function(a, b){return(a-b)},
		mult: function(a, b){return(a*b)},
		divi: function(a, b){return(a/b)};
	}

	$("#button-container").click(function(e){
		if(e.target.id==="cancel"){
			$("#screen").append("p").html("");
			leftArr = [];
			rightArr =[];
			totalArr = [];
			leftVal = 0;
			rightVal = 0;
			}
		
		else if ($(e.target).hasClass("operator")) {
			var opValue = $(e.target).text();
			if(opValue==="="){
				if(totalArr[1]==="+"){
					total = operators.add(totalArr[0], totalArr[2]);
					$("#screen").append("p").html(total);
				}
				if(totalArr[1]==="-"){
					total = operators.sub(totalArr[0], totalArr[2]);
					$("#screen").append("p").html(total);
				}
				if(totalArr[1]==="x"){
					total = operators.mult(totalArr[0], totalArr[2]);
					$("#screen").append("p").html(total);
				}
				else if(totalArr[1]==="÷") {
					total = operators.divi(totalArr[0], totalArr[2]);
					$("#screen").append("p").html(total);
					console.log(total);
				}
					leftArr = [];
					rightArr =[];
					totalArr = [];
					leftVal = 0;
					rightVal = 0;
					total = 0;


			}
			else{
				$("#screen").append(opValue).clone();
				totalArr[1] = opValue;	
				console.log(opValue);
			}
		}

		else {
			if(totalArr[1]){
				var digitValue = $(e.target).html();
				$("#screen").append(digitValue).clone();
				rightArr.push(digitValue);
				totalArr[2] = parseInt(rightArr.join(""), 10);
			}
			else {
				var digitValue = $(e.target).html();
				$("#screen").append(digitValue).clone();
				leftArr.push(digitValue);
				totalArr[0] = parseInt(leftArr.join(""), 10);
			}

		}	
		console.log(totalArr);

	});
});