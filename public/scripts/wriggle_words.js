// WRIGGLE ANIMATION  ©Peter Binkowski 
// Found at https://codepen.io/peterbinks/pen/zqaKbg

// BACKGROUND COLOR RANDOMIZER
// COLOR FUNCTION
// This was made possible thanks to ChatGPT.

/**
 * Initializes the page once the document is fully loaded.
 * - Applies the "wiggle" effect to elements matching the `.skills--words` selector.
 * - Defines an array of colors and assigns random background colors to elements in the skills list.
 */
$(document).ready(function() {
  wiggle(".skills--words");

  const colors = [
    '#087e8b',
    '#222E50',
    '#AA1155', 
    '#BDB2FF',
    '#FFC6FF', 
    '#FFD6A5',
    '#FDFFB6', 
    '#CAFFBF',
  ];

  // Call the function to assign random background colors
  randomizeBackgrounds('.skills__list .skills--words', colors);
});

/**
 * Applies a "wiggle" (oscillation) effect to the specified CSS properties of selected elements.
 * 
 * @param {string} selector - The CSS selector of the elements to apply the effect to.
 */
function wiggle(selector) {
  $(selector).each(function() {
    wiggleProp(this, 'scale', 0.99, 1);
    wiggleProp(this, 'rotation', -3, 3);
    wiggleProp(this, 'x', -3, 2);
    wiggleProp(this, 'y', -3, 2);
  });
}

/**
 * Converts a hexadecimal color code to an RGB array.
 * 
 * @param {string} hex - The color in hexadecimal format (e.g., "#FFFFFF").
 * @returns {number[]} An array containing the [R, G, B] values.
 */
function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return [r, g, b];
}

/**
 * Determines a text color (black or white) based on the brightness of a given background color.
 * 
 * @param {string} hexColor - The background color in hexadecimal format.
 * @returns {string} The recommended text color ("#edf4f5" for white or "#323232" for black).
 */
function getContrastColor(hexColor) {
  const [r, g, b] = hexToRgb(hexColor);

  const brightness = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);

  return brightness < 128 ? '#edf4f5' : '#323232';
}

/**
 * Assigns random background colors to the selected elements and adjusts the text color based on contrast.
 * 
 * @param {string} selector - The CSS selector of the elements to be styled.
 * @param {string[]} colors - An array of colors in hexadecimal format.
 */
function randomizeBackgrounds(selector, colors) {
  $(selector).each(function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    $(this).css({
      'background-color': randomColor,
      'color': getContrastColor(randomColor),
    });
  });
}

/**
 * Applies a wiggle effect to a specified CSS property of an element.
 * 
 * @param {HTMLElement} element - The element to apply the wiggle effect to.
 * @param {string} prop - The CSS property to animate (e.g., 'scale', 'rotation', 'x', 'y').
 * @param {number} min - The minimum value for the wiggle effect.
 * @param {number} max - The maximum value for the wiggle effect.
 */
function wiggleProp(element, prop, min, max) {
  var duration = Math.random() * (0.6 - 0.3) + 0.3;

  var tweenProps = {
    ease: Power1.easeInOut,
    onComplete: wiggleProp,
    onCompleteParams: [element, prop, min, max]
  };
  tweenProps[prop] = Math.random() * (max - min) + min;

  TweenMax.to(element, duration, tweenProps);
}