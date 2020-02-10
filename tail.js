const assertEqual = require(`./assertEqual`)
const tail = function(x){
  return x.slice(1);
}
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
assertEqual(words.length,2);
assertEqual(words[0], "Lighthouse");
assertEqual(words[1], "Labs");
const newWords = ["same"];
tail(newWords);

module.exports = tail