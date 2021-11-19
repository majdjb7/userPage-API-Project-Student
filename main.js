const apiManager = new APIManager();

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
  localStorage.clear()
  let userToSave = JSON.stringify(apiManager.data)
  localStorage['firstUser'] = userToSave;
  
  
});

$("#loadUserPage").on("click", function () {
  let userToLoad = JSON.parse(localStorage.firstUser)
  const render = new Renderer(userToLoad);
  render.renderResults();
  
});