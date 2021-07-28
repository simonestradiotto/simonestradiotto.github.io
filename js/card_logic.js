/*Make the cards animations working for mobile*/

let backs = document.querySelectorAll(".hobby__card_side--back");
let fronts = document.querySelectorAll(".hobby__card_side--front");

for (const back of backs) {
  back.addEventListener("touchstart", (e) => {
    e.target.closest(".hobby__card_side--back").style.transform =
      "rotateY(180deg)";
    e.target.closest(
      ".hobby__card_side--back"
    ).previousElementSibling.style.transform = "rotateY(0deg)";
  });
}

for (const front of fronts) {
  front.addEventListener("touchstart", (e) => {
    e.target.closest(".hobby__card_side--front").style.transform =
      "rotateY(-180deg)";
    e.target.closest(
      ".hobby__card_side--front"
    ).nextElementSibling.style.transform = "rotateY(0deg)";
  });
}
