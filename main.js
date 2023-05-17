$("img").css({border: '1px solid #000'});

$("h1").css("color", "#76AD57");

function onHoverIn() {
    $(this).css('background-color', '#76AD57');
 }
 function onHoverOut() {
    $(this).css('background-color', 'white');
 }
 $("#submit").hover(onHoverIn, onHoverOut);