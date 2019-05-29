$('#submit').on('click', function(){
  event.preventDefault();
  var bName = $('#burgName').val().trim()
  var newBurger = {
    name: bName,
    devourit: 0
  }
  $.post("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(function(){
    console.log("created")
    location.reload();
  })

})

$(".devourBtn").on("click", function(event) {
  var id = $(this).data("id");
  var bName = $(this).data("bName");

  var newBurger = {
    id: id,
    devourit: 1
  };

  // Send the PUT request.
  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newBurger
  }).then(
    function() {
      console.log("devourit changed to ", newBurger);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});
