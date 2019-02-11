$(document).ready(function(){

  $(".mark-complete").on("click", function() {

    // read id from button
    const burgerId = $(this).attr("data-id");
    $.ajax({
      url: "/api/todos/" + burgerId,
      method: "PUT"
    }).then(function(data) {
      location.reload();
    });

  });

  $(".delete").on("click", function () {

    // read id from button
    const burgerId = $(this).attr("data-id");
    $.ajax({
      url: "/api/todos/" + burgerId,
      method: "DELETE"
    }).then(function (data) {
      location.reload();
    });

  })

  $("#submit-btn").on("click", function(e) {
    e.preventDefault();

    // package up todo
    const burgerItem = {
      burger: $("#todo-input").val().trim()
    }

    $.ajax({
      url: "/api/todos",
      method: "POST",
      data: burgerItem // req.body
    })
    .then(function(data) {
      location.reload();
    });
  });

});