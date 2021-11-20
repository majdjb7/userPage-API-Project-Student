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

  let userToSave = JSON.stringify(apiManager.data)
  localStorage[`${loadUsersCounter}`] = userToSave;
  let userToLoad = JSON.parse(localStorage[`${loadUsersCounter}`])

  let personNameToSave = userToLoad.mainUser.firstName
  let pokemonNameToSave = userToLoad.pokemonName

  $('.dropup-content').append(`<a><button class="savedUser" id="${loadUsersCounter}" onclick="getSavedUser(${loadUsersCounter})">${personNameToSave} - ${pokemonNameToSave}</button></a>`)

});

function getSavedUser(id) {
  let userToLoad = JSON.parse(localStorage[`${id}`])
  const render = new Renderer(userToLoad);
  render.renderResults();
}