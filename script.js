$(function(){
	var operators = {
		add: function(a, b){return(a+b)},
		sub: function(a, b){return(a-b)},
		mult: function(a, b){return(a*b)},
		div: function(a, b){return(a/b)}
	}

	var total = "";
	$("#button-container").click(function(e){
		if(e.target.id==="cancel"){
			$("#screen").append("p").html("");
			}
		
		else if ($(e.target).hasClass("operator")) {
			var opValue = $(e.target).text();
			if(opValue==="="){
				if(innerOp==="+"){
					add(left, clickValue1);
				}

			//$("#screen").append("p").html(opValue);
			}
			else{
				var clickValue2 = $("#screen").append(opValue).clone();
				var innerOp = opValue;	
				console.log(innerOp);
				
			}
		}

		else {
			var digitValue = $(e.target).html();
			var clickValue1 = $("#screen").append(digitValue).clone();
		}	
	});
});