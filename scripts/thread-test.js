document
  .getElementById("thread-test")
  .addEventListener("click", function (event) {
    const resultSection = document.getElementById("thread-test-result");

    event.preventDefault();

    const image = document.getElementById("thread-test-image");
    image.src = "/images/really-big-image.png";

    image.onload = function () {
      resultSection.textContent += "Image loaded!";
    };

    for (let index = 0; index < 100; index++) {
      fetch(`/threads/${(index % 5) + 1}.json`)
        .then((response) => response.json())
        .then((json) => {
          resultSection.textContent += `[${index}] Thread ${JSON.stringify(
            json
          )} loaded!`;
        });
    }
  });
