document
  .getElementById("put-request")
  .addEventListener("click", function (event) {
    const resultSection = document.getElementById("put-request-result");

    event.preventDefault();

    fetch("/put/page.html", {
      method: "PUT",
      headers: {
        "Content-Type": "text/html",
      },
      body: "<html><body><h1>Created</h1><p>This was put here.</p></body></html>",
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
