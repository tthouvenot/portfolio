// WRIGGLE ANIMATION  ©Peter Binkowski 
// Found at https://codepen.io/peterbinks/pen/zqaKbg

// BACKGROUND COLOR RANDOMIZER
// COLOR FUNCTION
// This was made possible thanks to ChatGPT.

$(document).ready(function(){
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

    // Appeler la fonction pour assigner des couleurs aléatoires
    randomizeBackgrounds('.skills__list .skills--words', colors);
});

function wiggle(selector){
  $(selector).each(function() {
    wiggleProp(this, 'scale', 0.99, 1);
    wiggleProp(this, 'rotation', -3, 3);
    wiggleProp(this, 'x', -3, 2);
    wiggleProp(this, 'y', -3, 2);
  })
}

// Convertir une couleur hexadécimale en RGB
function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return [r, g, b];
}

// Calculer la couleur de texte en fonction de la luminosité de la couleur de fond
function getContrastColor(hexColor) {
  // Extraire les valeurs RGB de la chaîne hexadécimale
  const [r, g, b] = hexToRgb(hexColor);
  
  // Calculer la luminosité
  const brightness = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);

  // Retourner blanc pour un fond sombre, noir pour un fond clair
  return brightness < 128 ? '#edf4f5' : '#323232';
}

function randomizeBackgrounds(selector, colors) {
  $(selector).each(function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Appliquer cette couleur en arrière-plan et la couleur du texte appropriée
    $(this).css({
      'background-color': randomColor,
      'color': getContrastColor(randomColor), // Assure-toi que cela est bien appliqué
    });
  });
}

function wiggleProp(element, prop, min, max) {
  var duration = Math.random() * (.6 - .3) + .3;
  
  var tweenProps = {
    ease: Power1.easeInOut,
    onComplete: wiggleProp,
    onCompleteParams: [element, prop, min, max]
  };
  tweenProps[prop] = Math.random() * (max - min) + min;

  TweenMax.to(element, duration, tweenProps);
}

