var repository = [
  {
    name: "Bulbasaur",
    height: 0.7,
    types: ["grass", "poison"],
  },
  {
    name: "Ponyta",
    height: 1,
    types: ["speed", "fire", "agility"],
  },
  {
    name: "Butterfree",
    height: 1.1,
    types: ["psychic", "poison"],
  },
];

repository.forEach(function (pokemon) {
  var size;
  if (pokemon.height > 0.8) {
    size = "Wow, that is big!";
  } else {
    size = "It is a small pokemon.";
  }

  var fontColor;
  pokemon.types.forEach(function (typepokemon) {
    if (typepokemon == "grass") {
      fontColor = '<span style="color: green;"> ';
    } else if (typepokemon == "poison") {
      fontColor = '<span style="color: #90EE90;"> ';
    } else if (typepokemon == "speed") {
      fontColor = '<span style="color: purple;"> ';
    } else if (typepokemon == "fire") {
      fontColor = '<span style="color: #B22222;"> ';
    } else if (typepokemon == "agility") {
      fontColor = '<span style="color: #FFD700;"> ';
    } else if (typepokemon == "psychic") {
      fontColor = '<span style="color: #4B0082;"> ';
    }
  });

  document.write(
    '<div class="box">' +
      pokemon.name +
      "(height: " +
      pokemon.height +
      "m" +
      ")" +
      "<br>" +
      size +
      fontColor +
      "<br>" +
      pokemon.types +
      "<br>" +
      "</div>"
  );
});
console.log(repository);
