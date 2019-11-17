$(".submit").on("click", function(event) {
  event.preventDefault();

  // Here we grab the form elements
  var newPerson = {
    name: $("#name")
      .val()
      .trim(),
    email: $("#email")
      .val()
      .trim(),
    message: $("#message")
      .val()
      .trim()
  };

  console.log(newPerson);
});
