import { displayResponse } from "./shared.js";

document
  .getElementById("put-request")
  .addEventListener("click", function (event) {
    event.preventDefault();

    displayResponse(
      "put-request-result",
      201,
      fetch("/put/page.html", {
        method: "PUT",
        headers: {
          "Content-Type": "text/html",
        },
        body: "<html><body><h1>Created</h1><p>This was put here.</p></body></html>",
      })
    );
  });
