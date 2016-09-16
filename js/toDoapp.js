(function() {
      var notification  = document.getElementById("notice").classList,
         addButton     = document.getElementById("add"),
         listWrapper   = document.getElementById("list"),
         allItems      = document.getElementById("to_do"), //had to change from li (originally getElementsByTagName("li"))
         allDelButtons	= listWrapper.getElementsByTagName("button"),
         addTask = function() {

        var taskItem	= document.createElement("li")
        taskItem.id = 'to_do',  // created an id so that css will generate the correct output
            userInput = document.getElementById("task-input").value;

        if (!userInput.length) {

          alert("You need to put something here...");

        } else {

          taskItem.innerHTML = userInput + " <button class=\"delete\">Delete</button>";

          listWrapper.appendChild( taskItem );

          document.getElementById("task-input").value = "";

          loadRemoveOptions();

          if (allItems.length) {
            notification.add("hidden");
          }
        }
      },
      loadRemoveOptions	= function() {

        for (var i = 0, l = allItems.length; i < l; i++) {
          allDelButtons[i].addEventListener("click", removeTask, false);
        }

      },
      removeTask = function() {

        var taskToDelete = this.parentNode,
            confirmRemoval = confirm("If you click Ok, you cannot go back from here. Are you sure you want to do this??");

       taskToDelete.outerHTML = "";

      if (!allItems.length) {
        notification.remove("hidden");
      }
    };

  loadRemoveOptions();

  addButton.addEventListener("click", addTask, false);
}());
