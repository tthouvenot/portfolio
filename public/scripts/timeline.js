/**
 * Selects all the experience timeline elements.
 * @const {NodeList} targets - List of <li> elements to observe.
 */
const targets = document.querySelectorAll(".experience__timeline ol li");

/**
 * Intersection threshold to trigger the animation.
 * @const {number} threshold - The intersection ratio required to trigger the animation.
 */
const threshold = 0.5;

/**
 * Class to add when the element is in view.
 * @const {string} ANIMATED_CLASS - Class used to indicate that an element is visible.
 */
const ANIMATED_CLASS = "in-view";

/**
 * Callback function for the Intersection Observer.
 * This function is called when the intersection state of the targets changes.
 *
 * @param {IntersectionObserverEntry[]} entries - List of intersection entries.
 * @param {IntersectionObserver} observer - The intersection observer.
 */
function callback(entries, observer) {
  entries.forEach((entry) => {
    const elem = entry.target;
    if (entry.intersectionRatio >= threshold) {
      elem.classList.add(ANIMATED_CLASS);
      observer.unobserve(elem);
    } else {
      elem.classList.remove(ANIMATED_CLASS);
    }
  });
}

/**
 * Creates a new Intersection Observer and observes the specified targets.
 *
 * @const {IntersectionObserver} observer - The configured intersection observer.
 */
const observer = new IntersectionObserver(callback, { threshold });

/**
 * Observes each experience timeline element.
 * @function
 */
for (const target of targets) {
  observer.observe(target);
}