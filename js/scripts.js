$(function() {
  $("#meow").click(function() {
    $("#wesaid").children().remove();
    $("#compsaid").children().remove();
    $("#wesaid").prepend("<li>Meow</li>");
  })

  $("#bark").click(function() {
     $("#wesaid").children().remove();
     $("#compsaid").children().remove();
    $("#compsaid").prepend("<li>Bark</li>");
  })


})
