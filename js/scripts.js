var pokemonRepository = function () {
  var pokemonList = [];
  var apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
    ) {
      pokemonList.push(pokemon);
    } /*else {
      console.log("This is not a pokemon"); */
    }
  }
  function getAll() {
    return pokemonList;
  }
  function addListItem(pokemon = {}) {
    var $pokemonList = $(".pokemon-list");
    var $listItem = $("div");
    /* var button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("my-class"); */
    var $button = $('<button class="my-class">' + pokemon.name + '</button>');
    $listItem.append($button);
    $pokemonList.append($listItem);
    $button.on("click", function (event) {
      showDetails(pokemon);
    });
  }
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function() {
      console.log(item);
      showModal(item);
    });
  }
  function loadList() {
    return $.ajax(apiUrl)
      .then(function (json) {
        json.results.forEach(function (item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
          console.log(pokemon);
        });
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return $.ajax(url)
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.imageUrlBack = details.sprites.back_default;
        item.height = details.height;
        item.types = Object.keys(details.types);
      })
      .catch(function (e) {
        console.error(e);
      });
  } /*
  for (var i = 0; i < details.types.length; i++) {
    item.types.push(details.types[i].type.name);
  }
  if (item.types.includes("grass")) {
    document.getElementById("modal-container").style.background = "lightgreen";
  } else if (item.types.includes("poison")) {
    document.getElementById("modal-container").style.background = "purple";
  } else if (item.types.includes("speed")) {
    document.getElementById("modal-container").style.background = "darkblue";
  } else if (item.types.includes("fire")) {
    document.getElementById("modal-container").style.background = "red";
  } else if (item.types.includes("agility)")) {
    document.getElementById("modal-container").style.background = "orange";
  } else if (item.types.includes("psychic)")) {
    document.getElementById("modal-container").style.background = "brown";
  } else if (item.types.includes("electric")) {
    document.getElementById("modal-container").style.background = "yellow";
  } else if (item.types.includes("water")) {
    document.getElementById("modal-container").style.background = "blue";
  }

  item.abilities = [];
  for (var i = 0; i < details.abilities.length; i++) {
    item.abilities.push(details.abilities[i].ability.name);
  }

  item.weight = details.weight;
}; */

  function showModal(item) {
    var $modalContainer = $("#modal-container");
    // clear all existing modal content
    $modalContainer.empty();

    var modal = $('<div class="modal"></div>');
    //add the new modal content
    var closeButtonElement = $('<button class="modal-close"> Close </button>');
    closeButtonElement.on("click", hideModal);

    var nameElement = $("<h1>" + item.name + "</h1>");

    var imageElement = $('<img class="modal-img">');
    imageElement.attr("src", item.imageUrl);

    var imageElementBack = $('<img class="modal-img">');
    imageElementBack.attr("src", item.imageUrlBack);

    var heightElement = $("<p>" + "height : " + item.height + "</p>");

    var weightElement = $("<p>" + "weight : " + item.weight + "</p>");

    var typesElement = $("<p>" + "types : " + item.types + "</p>");

    var abilitiesElement = $("<p>" + "abilities : " + item.abilities + "</p>");

    modal.append(closeButtonElement);
    modal.append(nameElement);
    modal.append(imageElement);
    modal.append(imageElementBack);
    modal.append(heightElement);
    modal.append(weightElement);
    modal.append(typesElement);
    modal.append(abilitiesElement);
    $modalContainer.append(modal);
    $modalContainer.classList.add("is-visible");
  }

  function hideModal() {
    var $modalContainer = $("#modal-container");
    $modalContainer.removeClass("is-visible");  
  }

  jQuery(window).on("keydown", (e) => {
    var $modalContainer = $("#modal-container");
    if (e.key === "Escape" && $modalContainer.hasClass("is-visible")) {
      hideModal();
    }
  });
  var $modalContainer = document.querySelector("#modal-container");
  $modalContainer.addEventListener("click", (e) => {
    var target = e.target;
    if (target === $modalContainer) {
      hideModal();
    }
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    hideModal: hideModal,
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
