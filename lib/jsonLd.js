const replacements = {
  "<": "\\u003c",
  ">": "\\u003e",
  "&": "\\u0026",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};

export function jsonLd(value) {
  return JSON.stringify(value).replace(/[<>&\u2028\u2029]/g, (char) => replacements[char]);
}
