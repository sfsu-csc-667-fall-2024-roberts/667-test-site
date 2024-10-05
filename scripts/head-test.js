import { displayResponse } from "./shared.js";

document
  .getElementById("head-request-existing")
  .addEventListener("click", function (event) {
    event.preventDefault();

    displayResponse(
      "head-request-existing-result",
      200,
      fetch("/head/page.html", {
        method: "HEAD",
      })
    );
  });

document
  .getElementById("head-request-missing")
  .addEventListener("click", function (event) {
    event.preventDefault();

    displayResponse(
      "head-request-missing-result",
      404,
      fetch("/head/missing.html", {
        method: "HEAD",
      })
    );
  });
