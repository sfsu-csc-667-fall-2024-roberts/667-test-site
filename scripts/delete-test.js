import { displayResponse } from "./shared.js";

document
  .getElementById("delete-request")
  .addEventListener("click", function (event) {
    event.preventDefault();

    displayResponse(
      "delete-request-result",
      204,
      fetch("/delete/delete-me.html", {
        method: "DELETE",
      })
    );
  });
