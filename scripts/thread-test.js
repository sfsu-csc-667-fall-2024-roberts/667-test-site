document
  .getElementById("thread-test")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const resultSection = document.getElementById("thread-test-result");

    const image = document.getElementById("thread-test-image");
    image.src = "/images/really-big-image.png";

    image.onload = function () {
      const imageResult = document.createElement("p");
      imageResult.textContent = "Image loaded!";

      resultSection.appendChild(imageResult);
    };

    for (let index = 0; index < 100; index++) {
      fetch(`/threads/${(index % 5) + 1}.json`)
        .then((response) => response.json())
        .then((json) => {
          const threadResult = document.createElement("pre");
          threadResult.style.display = "block";
          threadResult.style.paddingBottom = "10px";

          threadResult.textContent = `[${index}] Thread ${JSON.stringify(
            json
          )} loaded!`;
          resultSection.appendChild(threadResult);
        });
    }
  });
