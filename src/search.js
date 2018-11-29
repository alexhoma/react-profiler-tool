const haystack = [
  "Piso en Les Corts",
  "Piso Barcelona centro",
  "Piso en Rambla de Poblenou",
  "Casa con piscina"
];

export function search(needle) {
  return haystack.filter(value => value.match(needle));
}
