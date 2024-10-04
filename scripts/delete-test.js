/*
          <a href="#" id="delete-request">DELETE a page (204)</a>
          <p id="delete-request-result"></p>
          */

document
  .getElementById("delete-request")
  .addEventListener("click", function (event) {
    const resultSection = document.getElementById("delete-request-result");

    event.preventDefault();

    fetch("/delete/delete-me.html", {
      method: "DELETE",
    })
      .then((response) => {
        resultSection.textContent = `Response status: ${response.status}`;
        response.headers.forEach((value, name) => {
          resultSection.textContent += `<div>${name}: ${value}</div>`;
        });
      })
      .catch((error) => {
        resultSection.textContent += `<div>Error: ${error.message}</div>`;
      });
  });
