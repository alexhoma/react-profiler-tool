import { smallDataset as haystack } from "./data.js";

export function search(needle) {
  if (needle === "") {
    return [];
  }

  return haystack.filter(
    item =>
      item.title
        .toLowerCase()
        .replace(", ", " ")
        .match(needle.toLowerCase()) && item
  );
}

export function highlight(toHighlight, fullText) {
  let regex = new RegExp(`(${toHighlight})`, "gi");
  let highlighted = fullText.replace(regex, "<em>$1</em>");
  let sanitizedSpaces = highlighted.split(" ");

  return sanitizedSpaces.join("&nbsp;");
}
