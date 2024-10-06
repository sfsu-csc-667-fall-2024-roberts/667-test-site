import { displayResponse } from "./shared.js";

document
  .getElementById("get-secret-no-credentials")
  .addEventListener("click", function (event) {
    event.preventDefault();

    displayResponse(
      "get-secret-no-credentials-result",
      401,
      fetch("/secret/secret.html")
    );
  });

document
  .getElementById("get-secret-correct-credentials")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const htmlResultSection = document.getElementById(
      "get-secret-correct-credentials-html-result"
    );

    displayResponse(
      "get-secret-correct-credentials-result",
      200,
      fetch("/secret/secret.html", {
        headers: {
          Authorization: `Basic ${btoa("jrob:password")}`,
        },
      })
    )
      .catch((error) => {
        console.log(error);
      })
      .then((response) => response.text())
      .then((text) => {
        htmlResultSection.innerHTML = text;
      })
      .catch((error) => {
        console.log(error);
        htmlResultSection.innerHTML = `Error: ${error.message}`;
      });
  });

document
  .getElementById("get-secret-wrong-credentials")
  .addEventListener("click", function (event) {
    event.preventDefault();

    displayResponse(
      "get-secret-wrong-credentials-result",
      403,
      fetch("/secret/secret.html", {
        headers: {
          Authorization: `Basic ${btoa("jrob:wrongpassword")}`,
        },
      })
    );
  });
