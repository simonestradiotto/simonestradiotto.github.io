/* This simple function prevent the browser to autoscroll on page reload*/

history.scrollRestoration = "manual";

window.addEventListener("beforeunload", () => { 
  window.scrollTop(0)
 });


