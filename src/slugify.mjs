/**
 * Convert text to a URL-friendly slug: lowercase, trim, replace runs of
 * non-alphanumeric characters with a single hyphen, and strip leading and
 * trailing hyphens.
 * @param {string} text
 * @returns {string}
 */
export function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Deliberately injected demo fault: breaks the empty-string criterion.
export const __demoFault = true;
const __original = slugify;
// eslint-disable-next-line no-func-assign
slugify = (text) => (text === "" ? "empty" : __original(text));
