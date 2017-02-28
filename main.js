

$(document).ready(function(){
	$(".sk-ppl").click(function(){
		$(".bk-ppl").show();
		$(".bk-toc").hide();
		$(".bk-de").hide();
		$(".bk-os").hide();
		$(".bk-daa").hide();
		$(".bk-oopc").hide();
		$(".default").hide();
		$("#hd").html("PPL<hr>").show();
		
	});
	
	$(".sk-toc").click(function(){
		$(".bk-toc").show();
		$(".bk-ppl").hide();
		$(".bk-de").hide();
		$(".bk-os").hide();
		$(".bk-daa").hide();
		$(".bk-oopc").hide();
		$(".default").hide();
		$("#hd").html("Theory of Computation(TOC)<hr>").show();
	});
	
	$(".sk-de").click(function(){
		$(".bk-de").show();
		$(".bk-ppl").hide();
		$(".bk-toc").hide();
		$(".bk-os").hide();
		$(".bk-daa").hide();
		$(".bk-oopc").hide();
		$(".default").hide();
		$("#hd").html("Digital Electronics<hr>").show();
	});
	
	$(".sk-os").click(function(){
		$(".bk-os").show();
		$(".bk-ppl").hide();
		$(".bk-toc").hide();
		$(".bk-de").hide();
		$(".bk-daa").hide();
		$(".bk-oopc").hide();
		$(".default").hide();
		$("#hd").html("Operating System(OS)<hr>").show();
	});
	
	$(".sk-daa").click(function(){
		$(".bk-daa").show();
		$(".bk-ppl").hide();
		$(".bk-de").hide();
		$(".bk-os").hide();
		$(".bk-toc").hide();
		$(".bk-oopc").hide();
		$(".default").hide();
		$("#hd").html("Desgin of Algorithm(DAA)<hr>").show();
	});
	
	$(".sk-oopc").click(function(){
		$(".bk-oopc").show();
		$(".bk-ppl").hide();
		$(".bk-de").hide();
		$(".bk-os").hide();
		$(".bk-daa").hide();
		$(".bk-toc").hide();
		$(".default").hide();
		$("#hd").html("Java(OOPC)<hr>").show();
	});
	
});