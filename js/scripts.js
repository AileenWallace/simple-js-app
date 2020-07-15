/* var pokemonRepository = function () {
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
      console.log("This is not a pokemon"); 
  }
};
function getAll() {
  return pokemonList;
} */

var pokemonRepository = (function () {
  var repository = [];
  var apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("This is not a pokemon");
    }
  }
  function getAll() {
    return repository;
  }
  function addListItem(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function() {
      var $row = $(".row");

      var $card = $('<div class="card" style="width:400px"></div>');
      var $image = $(
        '<image class="card-img-top" alt="Card image" style="width: 20%" />'
      );
      $image.attr("src", pokemon.imageUrlFront);
      var $cardBody = $('<div class="card-body"></div>');
      var $cardTitle = $('<h4 class="card-title" >') + pokemon.name + '</h4>';
      var $seeProfile = $('<button type="button" class="btn btn-primary" data-toggle="modal" data-target="example-modal">See Profile </button>');
      
      $row.append($card);
      $card.append($image);
      $card.append($cardBody);
      $cardBody.append($cardTitle);
      $cardBody.append($seeProfile);

      $seeProfile.on("click", function(event) {
        showDetails(pokemon);
      });
    });
  } /* = {}) {
    var $pokemonList = $(".pokemon-list");
    var $listItem = $("<li>");
    //var button = document.createElement("button");
    //  button.innerText = pokemon.name;
    //  button.classList.add("my-class");
    var $button = $(
      '<button class="my-class" "btn btn-primary" type="submit">' +
        pokemon.name +
        "</button>"
    );
    $listItem.append($button);
    $pokemonList.append($listItem);
    $button.on("click", function (event) {
      showDetails(pokemon);
    });
  } */
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
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
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return $.ajax(url)
      .then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.imageUrl = details.sprites.back_default;
        item.height = details.height;
        item.weight = details.weight;
        item.types = []; /* Object.keys(details.types);
      })
      .catch(function (e) {
        console.error(e);
      }); 
  } */

  
        for (var i = 0; i < details.types.length; i++) {
          item.types.push(details.types[i].type.name);
        }
        if (item.types.includes("grass")) {
          $(".modal-header").css("color", "green");
          //document.getElementById("modal-container").style.background = "lightgreen";
        } else if (item.types.includes("poison")) {
          $(".modal-header").css("color", "purple");
          //document.getElementById("modal-container").style.background = "purple";
       } else if (item.types.includes("speed")) {
        $(".modal-header").css("color", "darkblue");
          //document.getElementById("modal-container").style.background = "darkblue";
        } else if (item.types.includes("fire")) {
          $(".modal-header").css("color", "red");
          //document.getElementById("modal-container").style.background = "red";
        } else if (item.types.includes("agility)")) {
          $(".modal-header").css("color", "orange");
          //document.getElementById("modal-container").style.background = "orange";
        } else if (item.types.includes("psychic)")) {
          $(".modal-header").css("color", "brown");
          //document.getElementById("modal-container").style.background = "brown";
       } else if (item.types.includes("electric")) {
        $(".modal-header").css("color", "yellow");
          //document.getElementById("modal-container").style.background = "yellow";
       } else if (item.types.includes("water")) {
        $(".modal-header").css("color", "blue");  
        //document.getElementById("modal-container").style.background = "blue";
       }

      item.abilities = [];
      for (var i = 0; i < details.abilities.length; i++) {
       item.abilities.push(details.abilities[i].ability.name);
      }

      item.weight = details.weight;
    }) 

  function showModal(item) {
    var modalBody = $(".modal-body");
    var modalTitle = $(".modal-title");
    var modalHeader = $(".modal-header");
    modal.Title.empty();
    modalBody.empty();
    //var $modalContainer = $("#modal-container");
    //clear existing content of the model
    //$modalContainer.empty();
    //creating div element in DOM
    //adding class to div DOM element
    //var modal = $('<div class="modal"></div>');
    //creating closing button in modal content
    /* var closeButtonElement = $(
      '<button class="modal-close" "btn btn-outline-light" type="button" >Close</button>'
    ); 
    // adding event listener to close modal when clicked on button
    closeButtonElement.on("click", hideModal); */
    //creating element for name in modal content
    var nameElement = $("<h1>" + item.name + "</h1>");
    // creating img in modal content
    var imageElement = $('<img class="modal-img">');
    imageElement.attr("src", item.imageUrl);

    var imageElementBack = $('<img class="modal-img">');
    imageElementBack.attr("src", item.imageUrl);
    //creating element for height in modal content
    var heightElement = $("<p>" + "height : " + item.height + "</p>");
    //creating element for weight in modal content
    var weightElement = $("<p>" + "weight : " + item.weight + "</p>");
    var typesElement = $("<p>" + "types : " + item.types + "</p>");
    var abilitiesElement = $("<p>" + "abilities : " + item.abilities + "</p>");
    //appending modal content to webpage
    //modal.append(closeButtonElement);
    modal.append(nameElement);
    modal.append(imageElement);
    modal.append(imageElementBack);
    modal.append(heightElement);
    modal.append(weightElement);
    modal.append(typesElement);
    modal.append(abilitiesElement);
    /* $modalContainer.append(modal);
    //adds class to show the modal
    $modalContainer.addClass("is-visible"); */
  }

  /*function hideModal() {
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
  }); */

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    // hideModal: hideModal,
  };
})();

pokemonRepository.loadList().then(function () {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
