$('.SignUpNow').on('click', function(){
    alert('We are not currently taking sign ups.');
});

$('.SignUpNow').toggle(function() {
          $(this).text('Sign Up Now!');
        }, function() {
          $(this).text('No Sign Ups!');
        }); 