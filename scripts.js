const articles = document.querySelectorAll(".actions");

function addIconsToActions() {
  for (var i = 0; i < 6; i++) {
    articles[i].children[0].src = "images/star-8-32.png";
    articles[i].children[1].src = "images/eye-3-32.png";
    articles[i].children[2].src = "images/sharethis-32.png";
  }
}

addIconsToActions();