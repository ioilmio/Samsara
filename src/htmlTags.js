export default function htmlTag(tag, id, klass, textContent) {
  const htmlElement = document.createElement(`${tag}`);
  htmlElement.id = id;
  htmlElement.className += ` ${klass}`;
  htmlElement.textContent = textContent;
  return htmlElement;
}