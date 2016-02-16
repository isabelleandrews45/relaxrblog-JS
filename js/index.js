$('.SignUpNow').on('click', function(){
    alert('We are not currently taking sign ups.');
});

	$('.SignUpNow').on('click', changeText)
		function changeText(){
			$('.SignUpNow').text('No More Sign Ups!');
		};

$('#newparagraph1').hide();

	$('.Readmore1').on('click', function(){
		$('#newparagraph1').slideToggle();
	});

		$('#newparagraph2').hide();

	$('.Readmore2').on('click', function(){
		$('#newparagraph2').slideToggle();
	});


$('#LearnMoreParagraph').hide();
	
	$('#learnmorebutton').on('click', function(){
			$('#LearnMoreParagraph').slideToggle();
	});