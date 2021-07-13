/* Logic to make the links appear when the burger is clicked*/

let wrapper = document.querySelector(".navigation__wrapper");
let links = document.querySelectorAll(".navigation__link");

function makeResponsive() {
  wrapper.classList.toggle('navigation__responsive');
}

for (i = 0; i < links.length; ++i) {
  /* Closing the burger nav when a link is clicked*/
  links[i].addEventListener("click", () => {
    wrapper.className = "navigation__wrapper";
  });
}

/*-----IMPORTANT------
I didn't come up with the next solution. It's a way to check the scroll position, in order to make the burger menu appear and disappear on scroll.
This method is quite limited, so for thing like lazy loading of images you should probably use the Intersection Observer API.
If you wanna know more, here's a link to an article written by the original
creator of this trick: https://pqina.nl/blog/applying-styles-based-on-the-user-scroll-position-with-smart-css/ */

// The debounce function receives our function as a parameter
const debounce = (fn) => {
  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame;

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) {
      cancelAnimationFrame(frame);
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      // Call our function and pass any params we received
      fn(...params);
    });
  };
};

// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
};

// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener("scroll", debounce(storeScroll), { passive: true });

// Update scroll position for first time
storeScroll();
