/*
        <li>
          <a href="#" id="get-secret-no-credentials"
            >GET secret page without credentials (401)</a
          >
          <p id="get-secret-no-credentials-result"></p>
        </li>
        <li>
          <a href="#" id="get-secret-correct-credentials"
            >GET secret page with correct credentials (200)</a
          >
          <p id="get-secret-correct-credentials-result"></p>
        </li>
        <li>
          <a href="#" id="get-secret-wrong-credentials"
            >GET secret page with wrong credentials (401)</a
          >
          <p id="get-secret-wrong-credentials-result"></p>
        </li>
        */

document
  .getElementById("get-secret-no-credentials")
  .addEventListener("click", function (event) {
    const resultSection = document.getElementById(
      "get-secret-no-credentials-result"
    );

    event.preventDefault();

    fetch("/secret/secret.html")
      .then((response) => {
        resultSection.textContent = `Response status (should be 401): ${response.status}`;
        response.headers.forEach((value, name) => {
          resultSection.textContent += `<div>${name}: ${value}</div>`;
        });
      })
      .catch((error) => {
        resultSection.textContent += `<div>Error: ${error.message}</div>`;
      });
  });

document
  .getElementById("get-secret-correct-credentials")
  .addEventListener("click", function (event) {
    const resultSection = document.getElementById(
      "get-secret-correct-credentials-result"
    );
    const htmlResultSection = document.getElementById(
      "get-secret-correct-credentials-html-result"
    );

    event.preventDefault();

    fetch("/secret/secret.html", {
      headers: {
        Authorization: "Basic " + btoa("jrob:password"),
      },
    })
      .then((response) => {
        resultSection.textContent = `Response status (should be 200): ${response.status}`;
        response.headers.forEach((value, name) => {
          resultSection.textContent += `<div>${name}: ${value}</div>`;
        });

        return response.text();
      })
      .then((text) => {
        htmlResultSection.innerHTML = text;
      })
      .catch((error) => {
        resultSection.textContent += `<div>Error: ${error.message}</div>`;
      });
  });

document
  .getElementById("get-secret-wrong-credentials")
  .addEventListener("click", function (event) {
    const resultSection = document.getElementById(
      "get-secret-wrong-credentials-result"
    );

    event.preventDefault();

    fetch("/secret/secret.html", {
      headers: {
        Authorization: "Basic " + btoa("jrob:wrongpassword"),
      },
    })
      .then((response) => {
        resultSection.textContent = `Response status (should be 403): ${response.status}`;
        response.headers.forEach((value, name) => {
          resultSection.textContent += `<div>${name}: ${value}</div>`;
        });
      })
      .catch((error) => {
        resultSection.textContent += `<div>Error: ${error.message}</div>`;
      });
  });
