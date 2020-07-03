var pokemonRepository = (function () {
  var pokemonList = [];
  var apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("This is not a pokemon");
    }
  }

  function getAll() {
    return pokemonList;
  }
  function addListItem(pokemon) {
    var pokemonList = document.querySelector(".pokemon-list");
    var $listItem = document.createElement("div");
    var button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("my-class");
    $listItem.appendChild(button);
    pokemonList.appendChild($listItem);
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
      showModal(item);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
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
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.imageUrlBack = details.sprites.back_default;
        item.height = details.height;
        item.types = [];
        for (var i = 0; i < details.types.length; i++) {
          item.types.push(details.types[i].type.name);
        }
        if (item.types.includes("grass")) {
          document.getElementById("modal-container").style.background =
            "lightgreen";
        } else if (item.types.includes("poison")) {
          document.getElementById("modal-container").style.background =
            "purple";
        } else if (item.types.includes("speed")) {
          document.getElementById("modal-container").style.background =
            "darkblue";
        } else if (item.types.includes("fire")) {
          document.getElementById("modal-container").style.background = "red";
        } else if (item.types.includes("agility)")) {
          document.getElementById("modal-container").style.background =
            "orange";
        } else if (item.types.includes("psychic)")) {
          document.getElementById("modal-container").style.background = "brown";
        } else if (item.types.includes("electric")) {
          document.getElementById("modal-container").style.background =
            "yellow";
        } else if (item.types.includes("water")) {
          document.getElementById("modal-container").style.background = "blue";
        }

        item.abilities = [];
        for (var i = 0; i < details.abilities.length; i++) {
          item.abilities.push(details.abilities[i].ability.name);
        }

        item.weight = details.weight;
      })

      .catch(function (e) {
        console.error(e);
      });
  }

  function showModal(item) {
    var $modalContainer = document.querySelector("#modal-container");
    // clear all existing modal content
    $modalContainer.innerHTML = "";

    var modal = document.createElement("div");
    modal.classList.add("modal");

    //add the new modal content
    var closeButtonElement = document.createElement("button");
    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innerText = "Close";
    closeButtonElement.addEventListener("click", hideModal);

    var nameElement = document.createElement("h1");
    nameElement.innerText = item.name;

    var imageElement = document.createElement("img");
    imageElement.classList.add("modal-img");
    imageElement.setAttribute("src", item.imageUrl);

    var imageElementBack = document.createElement("img");
    imageElementBack.classList.add("modal-img");
    imageElementBack.setAttribute("src", item.imageUrlBack);

    var heightElement = document.createElement("p");
    heightElement.innerText = "height : " + item.height;

    var weightElement = document.createElement("p");
    weightElement.innerText = "weight : " + item.weight;

    var typesElement = document.createElement("p");
    typesElement.innerText = "types : " + item.types;

    var abilitiesElement = document.createElement("p");
    abilitiesElement.innerText = "abilities : " + item.abilities;

    modal.appendChild(closeButtonElement);
    modal.appendChild(nameElement);
    modal.appendChild(imageElement);
    modal.appendChild(imageElementBack);
    modal.appendChild(heightElement);
    modal.appendChild(weightElement);
    modal.appendChild(typesElement);
    modal.appendChild(abilitiesElement);
    $modalContainer.appendChild(modal);
    $modalContainer.classList.add("is-visible");
  }

  function hideModal() {
    var $modalContainer = document.querySelector("#modal-container");
    $modalContainer.classList.remove("is-visible");
  }

  window.addEventListener("keydown", (e) => {
    var $modalContainer = document.querySelector("#modal-container");
    if (
      e.key === "Escape" &&
      $modalContainer.classList.contains("is-visible")
    ) {
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
