const apiManager = new APIManager();
let loadUsersCounter = 0
$("#loadData").on("click", function () {
  apiManager.geenrateRandomPeople();
  apiManager.generateQuote();
  apiManager.generatePokemon();
  apiManager.generateText();
});

$("#displayData").on("click", function () {
  const render = new Renderer(apiManager.data);
  render.renderResults();
});



$("#saveUserPage").on("click", function () {
  loadUsersCounter++
  let className = "savedUser"
  console.log(loadUsersCounter)
  // localStorage.clear()
  let userToSave = JSON.stringify(apiManager.data)
  // localStorage['firstUser'] = userToSave;
  localStorage[`${loadUsersCounter}`] = userToSave;
  let userToLoad = JSON.parse(localStorage[`${loadUsersCounter}`])
  console.log(userToLoad)
  let personNameToSave = userToLoad.mainUser.firstName
  let pokemonNameToSave = userToLoad.pokemonName

  $('.dropup-content').append(`<a><button class="savedUser" id="${loadUsersCounter}" onclick="getSavedUser2(${loadUsersCounter})">${personNameToSave} - ${pokemonNameToSave}</button></a>`)

});

// $("#loadUserPage").on("click", function () {
//   getsavedUser()
  
// });

$("#tempLoadUserPage").on("click", function () {
  getsavedUser()
  
});


// var elements = $('.dropup-content');
// let objOfElements = {}
// console.log("ELE2:", elements)
// console.log("ELEMENTs child: ", elements)

// Array.from(elements).forEach((element) => {

//   $(".savedUser").on("click", function () {
//     let idOfBtn = $(this).attr('id')
//     console.log(idOfBtn)
//     getSavedUser2(idOfBtn)
//     alert("HI")
    
//   });
//   // objOfElements[`${loadUsersCounter}`] = element

//   // // console.log("ELEMENT: ", element)
//   // console.log("ELEMENT child: ", element.childNodes)

//   // element.addEventListener('click', function() {
//   //   console.log($(this))
//   //   getsavedUser()
    
//   // });
// });


function getsavedUser() {
  console.log("OBJ: ", objOfElements)

  let userToLoad = JSON.parse(localStorage[`${loadUsersCounter}`])
  const render = new Renderer(userToLoad);
  render.renderResults();
}

function getSavedUser2(id) {
  // console.log("OBJ: ", objOfElements)
  let userToLoad = JSON.parse(localStorage[`${id}`])

  console.log(userToLoad)
  const render = new Renderer(userToLoad);
  render.renderResults();
}

