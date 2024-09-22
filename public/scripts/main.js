/**
 * The container element for displaying the tagline.
 * @type {HTMLElement}
 */
const taglineContainer = document.querySelector('.about__tagline');

/**
 * The contact element that triggers the email sending function when clicked.
 * @type {HTMLElement}
 */
const contact = document.querySelector('.header-container__contact');

/**
 * An array of motivational quotes to display in the tagline.
 * @type {string[]}
 */
const quotes = [
    '"La seule chose que je sais, c\'est que je ne sais rien." - Platon',
    '"Choisissez un travail que vous aimez et vous n\'aurez pas à travailler un seul jour de votre vie." - Confucius',
    '"Quand on est au sommet on ne peut que descendre ou apprendre à voler." - D. Saez',
    '"La folie, c\'est de faire toujours la même chose et de s\'attendre à un résultat différent." - A. Einstein',
    '"Le courage n\'est pas l\'absence de peur, mais la capacité de vaincre ce qui fait peur." - N. Mandela',
    '"Un peuple prêt à sacrifier un peu de liberté pour un peu de sécurité ne mérite ni l\'une ni l\'autre, et finit par perdre les deux." - B. Franklin',
];

/**
 * Changes the displayed tagline to a randomly selected quote from the `quotes` array.
 */
function changeTagline() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    taglineContainer.textContent = quotes[randomIndex];
}

/**
 * Opens the user's default email client with a pre-filled email when the contact element is clicked.
 * The email includes a specified recipient, subject, and body text.
 */
function sendEmail() {
    const email = 'tristan.humelhans57@gmail.com';
    let subject = 'Demande de contact';
    let emailBody = 'Bonjour Tristan,';
    document.location = "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
}

/**
 * Adds an event listener to the window that triggers the `changeTagline` function
 * when the page has fully loaded.
 */
window.addEventListener('load', changeTagline);

/**
 * Adds an event listener to the `contact` element that triggers the `sendEmail` function when clicked.
 */
contact.addEventListener('click', sendEmail);