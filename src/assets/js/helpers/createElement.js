export default (tag, attributes = {}, textContent = '') => {
  const element = document.createElement(tag);
  const keys = Object.keys(attributes);
  keys.forEach((key) => {
    element.setAttribute(key, attributes[key]);
  });
  element.textContent = textContent;
  return element;
};