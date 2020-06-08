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

for (var item = 0; item < repository.length; item++) {
  var size;
  if (repository[item].height > 0.8) {
    size = "Wow, that is big!";
  } else {
    size = "It's a small pokemon";
  }

  document.write(
    '<div class="box">' +
      repository[item].name +
      "(height: " +
      repository[item].height +
      "m" +
      ")" +
      "<br>" +
      size +
      "<br>" +
      repository[item].types +
      "<br>" +
      "</div>"
  );
}
