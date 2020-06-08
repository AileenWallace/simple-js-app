var repository = [
  {
    name: "Bulbasaur",
    height: 0.7,
    types: [" grass", " poison"],
  },
  {
    name: "Ponyta",
    height: 1,
    types: [" speed", " fire", " agility"],
  },
  {
    name: "Butterfree",
    height: 1.1,
    types: [" psychic", " poison"],
  },
];

repository.forEach(function (item) {
  var size;
  if (item.height > 0.8) {
    size = "Wow, that is big!";
  } else {
    size = "It is a small pokemon.";
  }

  var result;
  item.types.forEach(function (typeItem) {
    if (typeItem == "grass") {
      result = '<span style="color:green;"> ';
    } else if (typeItem == "poison") {
      result = '<span style="color: #90EE90;"> ';
    } else if (typeItem == "speed") {
      result = '<span style="color:purple;"> ';
    } else if (typeItem == "fire") {
      result = '<span style="color: #B22222;"> ';
    } else if (typeItem == "agility") {
      result = '<span style="color: #FFD700;"> ';
    } else if (typeItem == "psychic") {
      result = '<span style="color: #4B0082;"> ';
    }
  });

  document.write(
    '<div class="box">' +
      item.name +
      "(height: " +
      item.height +
      "m" +
      ")" +
      "<br>" +
      size +
      result +
      "<br>" +
      item.types +
      "<br>" +
      "</div>"
  );
});
console.log(repository);
