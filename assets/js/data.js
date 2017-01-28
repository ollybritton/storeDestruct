/*jshint esversion: 6 */

function elem(tag) {
  return document.getElementById(tag);
}

function hide(elem) {
  elem.style.display = "none";
}

function show(elem, pref = "block") {
  elem.style.display = pref;
}

function setVolume(seconds) {
  volume = (120 - seconds)/120;
  elements.beep.volume = volume;
}

var elements = {
  body: elem("body"),
  btn: elem("btn"),
  pre: elem("pre"),
  init: elem("init"),
  explosion: elem("explosion"),
  cntdown: elem("countdown"),
  all: document.documentElement,
  top: elem("top"),
  bottom: elem("bottom"),
  timer: elem("timer"),
  beep: elem("beep"),
  faultCode: elem("faultCode"),
  explosionNoise: elem("explosionNoise")
};

var custom = {
  video: "https://www.apple.com/media/us/macbook-pro/2016/b4a9efaa_6fe5_4075_a9d0_8e4592d6146c/films/design/macbook-pro-design-tft-cc-us-20161026_1536x640h.mp4"
};

function addClass(elements, myClass) {

  // if there are no elements, we're done
  if (!elements) { return; }

  // if we have a selector, get the chosen elements
  if (typeof(elements) === 'string') {
    elements = document.querySelectorAll(elements);
  }

  // if we have a single DOM element, make it an array to simplify behavior
  else if (elements.tagName) { elements=[elements]; }

  // add class to all chosen elements
  for (var i=0; i<elements.length; i++) {

    // if class is not already found
    if ( (' '+elements[i].className+' ').indexOf(' '+myClass+' ') < 0 ) {

      // add class
      elements[i].className += ' ' + myClass;
    }
  }
}
