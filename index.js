
function theBeatlesPlay(musicians, instruments) {
  var blank = [];
  for (var i=0; i < musicians.length; i++) {
    blank.push(musicians[i] + " plays " + instruments[i]);
  }
  return blank;
}

function johnLennonFacts(){
    const facts = [
      "He was the last Beatle to learn to drive!",
      "He was never a vegetarian!",
      "He was a choir boy and boy scout!",
      "He hated the sound of his own voice!"];
    const array = [];
    const i = 0;
    

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var array = [];
  var i = 0;
  while (array.length < facts.length) {
    array.push(facts[i] + "!!!");
    i++;
  }
  return array;


function johnLennonFacts() {
    var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
    var newFacts = [];
    var i = 0;
    while (i < facts.length) {
        newFacts.push(facts[i] +"!!!");
        i++;
    }
    return newFacts;
}