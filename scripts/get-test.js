import { displayResponse } from "./shared.js";

document
  .getElementById("get-request-missing")
  .addEventListener("click", function (event) {
    event.preventDefault();

    displayResponse(
      "get-request-missing-result",
      404,
      fetch("/get/missing.html")
    );
  });
