$(document).ready(function() {
  $("#blanks form").submit(function(event){
var person1Input = $("input#person1").val();
var person2Input = $("input#person2").val();
var animalInput = $("input#animal").val();


    $(".person1").text(person1Input);
$(".person2").text(person2Input)
$(".animal").text(animalInput).val();

    $("#story").show();
    event.preventDefault();
  });
});
