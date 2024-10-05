export function displayResponse(
  resultElementId,
  expectedResponseStatus,
  request
) {
  const resultElement = document.getElementById(resultElementId);
  resultElement.innerHTML = "Running test...";

  const statusElement = document.createElement("div");
  const headersElement = document.createElement("ul");

  request
    .then((response) => {
      statusElement.innerHTML = `<em>Response status (Should be ${expectedResponseStatus}):</em> ${response.status}`;

      response.headers.forEach((value, name) => {
        const headerElement = document.createElement("li");
        headerElement.innerHTML = `<em>${name}:</em> ${value}`;
        headersElement.appendChild(headerElement);
      });

      resultElement.innerHTML = "";
      resultElement.appendChild(statusElement);
      resultElement.appendChild(headersElement);

      return response;
    })
    .catch((error) => {
      resultElement.textContent = `Error: ${error.message}`;
    });
}
