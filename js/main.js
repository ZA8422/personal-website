    $(function() {
    $("#exampleModalCenter").modal('show');

});
    $( ".about" ).click(function() {
    if( $(".experience-content").css("visibility") == 'visible'){
    $(".experience-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".skills-content").css("visibility") == 'visible'){
    $(".skills-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".research-content").css("visibility") == 'visible'){
    $(".research-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".achievements-content").css("visibility") == 'visible'){
    $(".achievements-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".projects-content").css("visibility") == 'visible'){
    $(".projects-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".empty-content").css("visibility") == 'visible'){
    $(".empty-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    if (  $( ".hello" ).css( "transform" ) == 'none' ){
        if (window.matchMedia('(max-width: 767px)').matches) {
        $(".hello").css("transition","transform 300ms");
        $(".hello").css("transform","translateX(200px)");
        } else {
        $(".hello").css("transition","transform 300ms");
        $(".hello").css("transform","translateX(360px)");
        }
        $(".card").css("background-color","#501639");
    }
    $(".about-content").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});

});
    $( ".experience" ).click(function() {
    if( $(".about-content").css("visibility") == 'visible'){
    $(".about-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".skills-content").css("visibility") == 'visible'){
    $(".skills-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".research-content").css("visibility") == 'visible'){
    $(".research-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".achievements-content").css("visibility") == 'visible'){
    $(".achievements-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".projects-content").css("visibility") == 'visible'){
    $(".projects-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".empty-content").css("visibility") == 'visible'){
    $(".empty-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    if (  $( ".hello" ).css( "transform" ) == 'none' ){
        $(".hello").css("transition","transform 300ms");
        $(".hello").css("transform","translateX(360px)");
        $(".card").css("background-color","#501639");
    }
    $(".experience-content").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});

});
    $( ".skills" ).click(function() {
    if( $(".about-content").css("visibility") == 'visible'){
    $(".about-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".experience-content").css("visibility") == 'visible'){
    $(".experience-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".research-content").css("visibility") == 'visible'){
    $(".research-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".achievements-content").css("visibility") == 'visible'){
    $(".achievements-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".projects-content").css("visibility") == 'visible'){
    $(".projects-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".empty-content").css("visibility") == 'visible'){
    $(".empty-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    if (  $( ".hello" ).css( "transform" ) == 'none' ){
        $(".hello").css("transition","transform 300ms");
        $(".hello").css("transform","translateX(360px)");
        $(".card").css("background-color","#501639");
    }
    $(".skills-content").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
    if ( $("#chartinterests").is(':empty')){
    $.getScript("js/interestschart.js");
	$.getScript("js/softwareschart.js");}
    $(".progress_bar_content").css("animation","animate-positive 4s");
    $(".listitem").css({"opacity": "1",
	"animation-name": "fadeInOpacity",
	"animation-iteration-count": "1",
	"animation-timing-function": "ease-in"});
});
    $( ".research" ).click(function() {
    if( $(".about-content").css("visibility") == 'visible'){
    $(".about-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".experience-content").css("visibility") == 'visible'){
    $(".experience-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".skills-content").css("visibility") == 'visible'){
    $(".skills-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".achievements-content").css("visibility") == 'visible'){
    $(".achievements-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".projects-content").css("visibility") == 'visible'){
    $(".projects-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".empty-content").css("visibility") == 'visible'){
    $(".empty-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    if (  $( ".hello" ).css( "transform" ) == 'none' ){
        $(".hello").css("transition","transform 300ms");
        $(".hello").css("transform","translateX(360px)");
        $(".card").css("background-color","#501639");
    }
    $(".research-content").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
});
    $( ".achievements" ).click(function() {
    if( $(".about-content").css("visibility") == 'visible'){
    $(".about-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".experience-content").css("visibility") == 'visible'){
    $(".experience-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".skills-content").css("visibility") == 'visible'){
    $(".skills-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".research-content").css("visibility") == 'visible'){
    $(".research-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".projects-content").css("visibility") == 'visible'){
    $(".projects-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".empty-content").css("visibility") == 'visible'){
    $(".empty-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    if (  $( ".hello" ).css( "transform" ) == 'none' ){
        $(".hello").css("transition","transform 300ms");
        $(".hello").css("transform","translateX(360px)");
        $(".card").css("background-color","#501639");
    }
    $(".achievements-content").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});

});
    $( ".projects" ).click(function() {
    if( $(".about-content").css("visibility") == 'visible'){
    $(".about-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".experience-content").css("visibility") == 'visible'){
    $(".experience-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".skills-content").css("visibility") == 'visible'){
    $(".skills-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".achievements-content").css("visibility") == 'visible'){
    $(".achievements-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".research-content").css("visibility") == 'visible'){
    $(".research-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    else if( $(".empty-content").css("visibility") == 'visible'){
    $(".empty-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    if (  $( ".hello" ).css( "transform" ) == 'none' ){
        $(".hello").css("transition","transform 300ms");
        $(".hello").css("transform","translateX(360px)");
        $(".card").css("background-color","#501639");
    }
    $(".projects-content").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});

});
    $( ".research-card" ).click(function() {
    $(".research-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    var getClass = this.classList;
    var card = "";
    switch(getClass[1]){
              case "first":
                card = "first";
                break;
              case "second":
                card = "second";
                break;
              case "third":
                 card = "third";
                break;
              case "fourth":
                card = "fourth";
                break;
              case "fifth":
                card = "fifth";
                break;
              case "sixth":
                card = "sixth";
                break;
              case "seventh":
                card = "seventh";
                break;
              case "eighth":
                card = "eighth";
                break;
              case "ninth":
                card = "ninth";
        }
    $.getJSON('data/research_data.JSON', function(obj) {
        $('#empty-title').text(obj[card].title);
        $('#empty-status').text(obj[card].status);
        $("#empty-status").css( "display", "inline");
        $('.empty-summary').text(obj[card].summary);
        if(obj[card].code_link !== ""){
        var $newEl = $("<a/>")
                 .addClass("code-link")   // add a class
                 .html("<br /><a>Code</a>");
        $(".empty-summary").append($newEl);
        $('.code-link').attr("href", obj[card].code_link);}
        else{
        $('.code-link').attr("href", "");
        $('.code-link').remove();}
        if(obj[card].file_link !== ""){
        var $newEl = $("<a/>")
                 .addClass("paper-link")   // add a class
                 .html("<br /><a>Paper</a>");
        $(".empty-summary").append($newEl);
        $('.paper-link').attr("href", obj[card].file_link);}
        else{
        $('.paper-link').attr("href", "");
        $('.paper-link').remove();}
    });
    $(".empty-content").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
    $( ".go-back" ).click(function() {
    if( $(".empty-content").css("visibility") == 'visible'){
    $(".empty-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    if( $(".projects-content").css("visibility") == 'visible'){
    $(".projects-content").css( "visibility", "hidden");
    }
    $(".research-content").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
});
});
$( ".projects-card" ).click(function() {
    $(".projects-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    $(".empty-content").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
    $("#empty-status").css( "display", "none");
    var getClass = this.classList;
    var card = "";
    switch(getClass[1]){
              case "first":
                card = "first";
                break;
              case "second":
                card = "second";
                break;
              case "third":
                 card = "third";
                break;
              case "fourth":
                card = "fourth";
                break;
              case "fifth":
                card = "fifth";
                break;
              case "sixth":
                card = "sixth";
                break;
              case "seventh":
                card = "seventh";
                break;
              case "eighth":
                card = "eighth";
                break;
              case "ninth":
                card = "ninth";

        }
    $.getJSON('data/projects_data.JSON', function(obj) {
        $('#empty-title').text(obj[card].title);
        $('.empty-summary').text( obj[card].summary);
        if(obj[card].code_link !== ""){
        var $newEl = $("<a/>")
                 .addClass("code-link")
                 .html("<br /><a>Code</a>");
        $(".empty-summary").append($newEl);
        $('.code-link').attr("href", obj[card].code_link);}
        else{
        $('.code-link').attr("href", "");
        $('.code-link').remove();}
        if(obj[card].file_link !== ""){
        var $newEl = $("<a/>")
                 .addClass("paper-link")   // add a class
                 .html("<br /><a>Paper</a>");
        $(".empty-summary").append($newEl);
        $('.paper-link').attr("href", obj[card].file_link);}
        else{
        $('.paper-link').attr("href", "");
        $('.paper-link').remove();}
    });
    $( ".go-back" ).click(function() {
    if( $(".empty-content").css("visibility") == 'visible'){
    $(".empty-content").css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
    }
    if( $(".research-content").css("visibility") == 'visible'){
    $(".research-content").css( "visibility", "hidden");
    }
    $(".projects-content").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
});
});
$(".modal-button").click(function(){
    $(".about-menu").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
    $(".skills-menu").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
    $(".experience-menu").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
    $(".achievements-menu").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
    $(".research-menu").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
    $(".projects-menu").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
  });
