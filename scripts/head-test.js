/* <li>
<a href="#" id="head-request-existing">HEAD existing page (200)</a>
<p id="head-request-existing-result"></p>
</li>

<li>
<a href="#" id="head-request-missing">HEAD missing page (404)</a>
<p id="head-request-missing-result"></p>
</li> */

document
  .getElementById("head-request-existing")
  .addEventListener("click", function (event) {
    const resultSection = document.getElementById(
      "head-request-existing-result"
    );

    event.preventDefault();

    fetch("/head/page.html", {
      method: "HEAD",
    })
      .then((response) => {
        resultSection.textContent = `Response status: ${response.status}`;
        response.headers.forEach((value, name) => {
          resultSection.textContent += `<div>${name}: ${value}</div>`;
        });
      })
      .catch((error) => {
        resultSection.textContent += `Error: ${error.message}`;
      });
  });

document
  .getElementById("head-request-missing")
  .addEventListener("click", function (event) {
    const resultSection = document.getElementById(
      "head-request-missing-result"
    );

    event.preventDefault();

    fetch("/head/missing.html", {
      method: "HEAD",
    })
      .then((response) => {
        resultSection.textContent = `Response status: ${response.status}`;
        response.headers.forEach((value, name) => {
          resultSection.textContent += `\n${name}: ${value}`;
        });
      })
      .catch((error) => {
        resultSection.textContent += `<div>Error: ${error.message}</div>`;
      });
  });
