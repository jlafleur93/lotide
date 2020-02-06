const letterPositions = function(sentence) {
  let results = {};
  console.log(sentence)
  for (let i = 0; i < sentence.length; i++) {
    if(results[sentence[i]]){
      results[sentence[i]].push(i)
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
}

console.log(letterPositions("hello"))


assertEqual(letterPositions("hello").e [1])