var globalTitle = "Winter Is Coming";


// take a sentence case string with potentially any number of spaces and return a url slug with words connected by "-"
function urlSlug(title) {
  return title.toLowerCase().trim().split(/[ ]+/).join("-");
}

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
