// Take a string with some weird punctuation and return a string that resembles a sentence
function sentensify(str) {
  return str.split(/[-.,]/).join(" ");
}
sentensify("May-the-force-be-with-you");
