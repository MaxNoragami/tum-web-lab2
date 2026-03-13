/**
 * Parses text with **highlight** markers and returns HTML.
 * **text** → <span class="className">text</span>
 *
 * @param {string} text - The text with **markers**
 * @param {string} className - CSS class for the highlight spans
 * @returns {string} HTML string
 */
export function highlight(text, className) {
    return text.replace(/\*\*(.+?)\*\*/g, `<span class="${className}">$1</span>`);
}
