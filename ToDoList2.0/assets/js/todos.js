/*global $*/

// Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if (event.which === 13) {
        var text = $(this).val();
        $(this).val("");
        $("ul").append("<li> <span><i class='fa fa-trash'></i></span> " + text + "</li>")
    }
});

$(".fa-plus").click(function(){
    $("input").fadeToggle();
});