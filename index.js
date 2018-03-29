$(document).ready(function() {
	$("#praiseDiv").bind("click", function() {
		var infoNum = Number($("#infoSpan").text());
		$("#infoSpan").text(infoNum+1)
		// $("#infoSpan").text(infoNum<99?infoNum+1:"99+");
	});
});