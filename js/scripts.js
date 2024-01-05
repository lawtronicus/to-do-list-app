function newItem() {
  // Add new item to the list
  let li = $("<li></li>");
  let inputValue = $("input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    $("#list").append(li);
  }

  // Cross out an item from the list
  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", crossOut);

  // Add delete button "X";
  let crossOutButton = $("<button></button>");
  crossOutButton.text("X");
  li.append(crossOutButton);

  function deleteListItem() {
    li.toggleClass("delete");
  }

  crossOutButton.on("click", deleteListItem);

  // clear input value
  $("#input").val("");

  // Reorder items
  $("#list").sortable();
}

$(document).ready(function () {
  $("#button").click(function () {
    newItem();
  });

  $("input").keypress(function (e) {
    if (e.which == 13) {
      e.preventDefault();
      newItem();
    }
  });
});
