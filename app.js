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

  img.src = images[index].src;
  img.alt = images[index].alt;
  img.title = images[index].title;

  img.addEventListener("click", function () {
    backgroundImage.src = images[index].src;
    backgroundImage.alt = images[index].alt;
    backgroundImage.title = images[index].title;
  });

  thumbnailGroup.appendChild(img);
}
