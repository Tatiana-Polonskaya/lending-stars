function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
window.onload = function () {
  const allImages = [...document.getElementsByClassName("item")].filter(
    (el) => !el.className.includes("big")
  );
  const lens = allImages.length;

  setInterval(() => {
    const getPairsForAnimation = [
      getRandomInt(lens),
      getRandomInt(lens),
      getRandomInt(lens),
      getRandomInt(lens),
    ];

    getPairsForAnimation.forEach((num) => {
      allImages[num].style.animation = "swinging 8s ease-in-out 0s infinite";
    });
    setTimeout(() => {
      getPairsForAnimation.forEach((num) => {
        allImages[num].style.animation = "";
      });
    }, 8000);
  }, 6000);
};

function stars() {
  let e = document.createElement("div");
  e.setAttribute("class", "star");
  document.body.appendChild(e);
  e.style.left = Math.random() * +innerWidth + "px";

  let size = Math.random() * 12;
  let duration = Math.random() * 5;

  e.style.fontSize = 12 + "px";
  e.style.animationDuration = 2 + duration + "s";
  setTimeout(function () {
    document.body.removeChild(e);
  }, 5000);
}

setInterval(function () {
  stars();
}, 50);
