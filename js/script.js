let count;
const slider = document.querySelector(".slider");
const image = document.querySelector(".img");
const imgcnt = document.querySelector(".image-conatiner");
const leftButton = document.querySelector(".leftsideicon");
const rightButton = document.querySelector(".rightsideicon");
slider.addEventListener("mouseover", () => {
  count = parseInt(imgcnt.getAttribute("data-value"));
  //   console.log(count);
  if (count === 1) {
    rightButton.style.display = "block";
    leftButton.style.display = "none";
  } else if (count > 1 && count < 4) {
    rightButton.style.display = "block";
    leftButton.style.display = "block";
  } else {
    rightButton.style.display = "none";
    leftButton.style.display = "block";
  }
});
slider.addEventListener("mouseleave", () => {
  leftButton.style.display = "none";
  rightButton.style.display = "none";
});
leftButton.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("fa-chevron-left")) {
    count--;

    if (count > 0) {
      imgcnt.setAttribute("data-value", count);
      image.setAttribute("src", `./img/img-${count}.jpg`);
    }
  }
});
rightButton.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("fa-chevron-right")) {
    count++;

    if (count < 5) {
      imgcnt.setAttribute("data-value", count);
      image.setAttribute("src", `./img/img-${count}.jpg`);
    }
  }
});
