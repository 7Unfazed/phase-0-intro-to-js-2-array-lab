// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
  }
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  function appendCat(){
  return [...cats,"Broom"];
  }
  function prependCat(){
    return ["Arnold",...cats];
    }
    function removeLastCat() {
        const removeLastCat1 = cats.slice();
        removeLastCat1.splice(-1, 1);
        return removeLastCat1;
    }
    function   removeFirstCat() {
      const removeLastCat2 = cats.slice();
      removeLastCat2.splice(0, 1);
      return removeLastCat2;
  }