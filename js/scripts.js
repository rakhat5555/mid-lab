$(document).ready(function() {
  $("#blanks form").submit(function(event){
      event.preventDefault();
var person1Input1 = $("input#person1").val();
var person1Input = person1Input1.toUpperCase();
var person2Input2 = $("input#person2").val();
var person2Input = person2Input2.toUpperCase();
var animalInput = $("input#animal").val();

$(".person1").text(person1Input);
$(".person2").text(person2Input)
$(".animal").text(animalInput).val();

    $("#story").show();

  });
});
