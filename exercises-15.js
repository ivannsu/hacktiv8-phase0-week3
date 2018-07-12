function groupAnimals(animals) {

  let abjad = 'abcdefghijklmnopqrstuvwyz';
  let results = [];

  for(let i = 0; i < abjad.length; i++) {

    let objs = [];

    for(let j = 0; j < animals.length; j++) {
      if(animals[j][0] === abjad[i]) {
        objs.push(animals[j]);
      }
    }
    if(objs.length !== 0) { results.push(objs); }
  }
  return results;
}

// TEST CASES

// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));

// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
