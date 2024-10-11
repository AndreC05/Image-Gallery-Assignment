const backgroundImage = document.getElementById("backgroundImage");
const thumbnailGroup = document.getElementById("thumbnailGroup");

const images = [
  {
    srcset:
      "./assets/dayForest_1200x1800.jpg 1200w, ./assets/dayForest_800x1199.jpg 800w, ./assets/dayForest_450x675.jpg 450w",
    sizes: "(max-width: 600px) 450px, (max-width: 1000px) 800px, 1200px",
    alt: "forest during the day",
    title: "Day Forest",
  },
  {
    srcset:
      "./assets/nightForest_1200x800.jpg 1200w, ./assets/nightForest_800x533.jpg 800w, ./assets/nightForest_450x300.jpg 450w",
    sizes: "(max-width: 600px) 450w, (max-width: 1000px) 800w, 1200w",
    alt: "forest during the night",
    title: "Night Forest",
  },
  {
    srcset:
      "./assets/taxi_1200x1500.jpg 1200w, ./assets/taxi_800x1000.jpg 800w, ./assets/taxi_450x563.jpg 450w",
    sizes: "(max-width: 600px) 450w, (max-width: 1000px) 800w, 1200w",
    alt: "taxi",
    title: "Taxi",
  },
  {
    srcset:
      "./assets/fish_1200x1801.jpg 1200w, ./assets/fish_800x1200.jpg 800w, ./assets/fish_450x676.jpg 450w",
    sizes: "(max-width: 600px) 450w, (max-width: 1000px) 800w, 1200w",
    alt: "blue fish",
    title: "Nice Fish",
  },
  {
    srcset:
      "./assets/moonDay_1200x1800.jpg 1200w, ./assets/moonDay_800x1200.jpg 800w, ./assets/moonDay_450x675.jpg 450w",
    sizes: "(max-width: 600px) 450w, (max-width: 1000px) 800w, 1200w",
    alt: "beach with the moon on the sky",
    title: "Beach Moon",
  },
];

for (let index = 0; index < images.length; index++) {
  const img = document.createElement("img");
  let targetIndex = 0;

  img.srcset = images[index].srcset;
  img.alt = images[index].alt;
  img.title = images[index].title;
  img.tabIndex = "1";
  img.focusIndex = index;
  img.setAttribute("focusIndex", index);

  img.addEventListener("click", function () {
    backgroundImage.srcset = images[index].srcset;
    backgroundImage.alt = images[index].alt;
    backgroundImage.title = images[index].title;
  });

  img.addEventListener("keydown", function (event) {
    if (event.key == " " || event.key == "Enter") {
      backgroundImage.srcset = images[index].srcset;
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
