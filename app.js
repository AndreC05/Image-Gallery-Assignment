const backgroundImage = document.getElementById("backgroundImage");
const thumbnailGroup = document.getElementById("thumbnailGroup");

const images = [
  {
    src: "./assets/dayForest.jpg",
    alt: "forest during the day",
    title: "Day Forest",
  },
  {
    src: "./assets/nightForest.jpg",
    alt: "forest during the night",
    title: "Night Forest",
  },
  {
    src: "./assets/taxi.jpg",
    alt: "taxi",
    title: "Taxi",
  },
  {
    src: "./assets/fish.jpg",
    alt: "blue fish",
    title: "Nice Fish",
  },
  {
    src: "./assets/moonDay.jpg",
    alt: "beach with the moon on the sky",
    title: "Beach Moon",
  },
];

for (let index = 0; index < images.length; index++) {
  const img = document.createElement("img");
  let targetIndex = 0;

  img.src = images[index].src;
  img.alt = images[index].alt;
  img.title = images[index].title;
  img.tabIndex = "1";
  img.focusIndex = index;
  img.setAttribute("focusIndex", index);

  img.addEventListener("click", function () {
    backgroundImage.src = images[index].src;
    backgroundImage.alt = images[index].alt;
    backgroundImage.title = images[index].title;
  });

  img.addEventListener("keydown", function (event) {
    if (event.key == " " || event.key == "Enter") {
      backgroundImage.src = images[index].src;
      backgroundImage.alt = images[index].alt;
      backgroundImage.title = images[index].title;
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else if (event.key == "ArrowRight") {
      if (img.focusIndex + 1 < images.length) {
        targetIndex = img.focusIndex + 1;
      } else {
        targetIndex = 0;
      }

      const newFocusTarget = document.querySelector(
        `img[focusIndex="${targetIndex}"]`
      );
      newFocusTarget.focus();

      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else if (event.key == "ArrowLeft") {
      if (img.focusIndex - 1 >= 0) {
        targetIndex = img.focusIndex - 1;
      } else {
        targetIndex = images.length - 1;
      }

      const newFocusTarget = document.querySelector(
        `img[focusIndex="${targetIndex}"]`
      );
      newFocusTarget.focus();
    }
  });

  thumbnailGroup.appendChild(img);
}
