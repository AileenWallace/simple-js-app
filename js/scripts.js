var pokemonRepository = (function () {
  var pokemonList = [
    {
      name: "Bulbasaur",
      height: 0.7,
      types: ["grass", "poison"],
    },
    {
      name: "Ponyta",
      height: 1,
      types: ["fire", "agility", "speed"],
    },
    {
      name: "Butterfree",
      height: 1.1,
      types: ["poison", "psychic"],
    },
  ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("This is not a pokemon");
    }
  }
  function getAll() {
    return pokemonList;
  }
  return {
    add: add,
    getAll: getAll,
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: "Jigglypuff", height: 0.2, types: ["electric"] });
pokemonRepository.add({ name: "Gengar", height: 0.2, types: ["water"] });
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  var size;
  if (pokemon.height > 0.8) {
    size = "Wow, that is big!";
  } else {
    size = "It is a small pokemon.";
  }

  var fontColor;
  pokemon.types.forEach(function (typePokemon) {
    if (typePokemon == "grass") {
      fontColor = '<span style="color: green;"> ';
    } else if (typePokemon == "poison") {
      fontColor = '<span style="color: purple;"> ';
    } else if (typePokemon == "speed") {
      fontColor = '<span style="color: darkblue;"> ';
    } else if (typePokemon == "fire") {
      fontColor = '<span style="color: red;"> ';
    } else if (typePokemon == "agility") {
      fontColor = '<span style="color: orange;"> ';
    } else if (typePokemon == "psychic") {
      fontColor = '<span style="color: brown;"> ';
    } else if (typePokemon == "electric") {
      fontColor = '<span style="color: yellow;"> ';
    } else if (typePokemon == "water") {
      fontColor = '<span style="color: blue;"> ';
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
  console.log(pokemonRepository);
});
