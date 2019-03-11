//business logic
function pingPong(number) {

  var textArr=[];

  for (var i=1; i<=number; i++){
    if ((i % 3 === 0) && (i % 5 === 0)){
      textArr.push("pingpong");
    }
    else if (i % 3 === 0){
      textArr.push("ping");
    }
    else if (i % 5 ===0) {
      textArr.push("pong");
    }
    else
    {
      textArr.push(i);
    }

  }
  return textArr;
}
//user interfac logic
$(document).ready(function(){
  $("#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#number").val());
    var result = pingPong(number);

    $("ul#result2").text("");
    for (var i = 0; i < result.length; i++)
    {
        $("ul#result2").append("<li>" + result[i] + "</li>");
    }

    $("#result").show();
  });
});
