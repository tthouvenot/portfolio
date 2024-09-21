// WRIGGLE ANIMATION  ©Peter Binkowski 
// Found at https://codepen.io/peterbinks/pen/zqaKbg

// BACKGROUND COLOR RANDOMIZER
// COLOR FUNCTION
// This was made possible thanks to ChatGPT.

/**
 * Initializes the application when the document is ready.
 * This function applies the wiggle animation to elements with the class "skills--words"
 * and randomizes their background colors.
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

  // Call the function to assign random colors
  randomizeBackgrounds('.skills__list .skills--words', colors);
});

/**
 * Applies a wiggle animation to the specified elements.
 *
 * @param {string} selector - The selector for the elements to apply the wiggle effect.
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
 * Converts a hexadecimal color to an RGB array.
 *
 * @param {string} hex - The hexadecimal color string (e.g., "#FFFFFF").
 * @returns {number[]} An array containing the RGB values.
 */
function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return [r, g, b];
}

/**
 * Calculates the appropriate text color based on the brightness of the background color.
 *
 * @param {string} hexColor - The hexadecimal background color.
 * @returns {string} The text color to use ("#edf4f5" for dark backgrounds, "#323232" for light).
 */
function getContrastColor(hexColor) {
  const [r, g, b] = hexToRgb(hexColor);
  const brightness = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);

  console.log(`Brightness: ${brightness}, Hex Color: ${hexColor}`);

  return brightness < 128 ? '#edf4f5' : '#323232';
}

/**
 * Randomizes the background colors and text colors for the specified elements.
 *
 * @param {string} selector - The selector for the elements to randomize.
 * @param {string[]} colors - An array of hexadecimal color strings to choose from.
 */
function randomizeBackgrounds(selector, colors) {
  $(selector).each(function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Apply the background color and appropriate text color
    $(this).css({
      'background-color': randomColor,
      'color': getContrastColor(randomColor),
    });
  });
}

/**
 * Applies a wiggle animation property to an element.
 *
 * @param {HTMLElement} element - The element to animate.
 * @param {string} prop - The property to animate (e.g., 'scale', 'rotation', 'x', 'y').
 * @param {number} min - The minimum value for the property.
 * @param {number} max - The maximum value for the property.
 */
function wiggleProp(element, prop, min, max) {
  const duration = Math.random() * (.6 - .3) + .3;

  const tweenProps = {
    ease: Power1.easeInOut,
    onComplete: wiggleProp,
    onCompleteParams: [element, prop, min, max],
  };

  tweenProps[prop] = Math.random() * (max - min) + min;

  TweenMax.to(element, duration, tweenProps);
}