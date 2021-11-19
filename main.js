const apiManager = new APIManager();

$("#loadData").on("click", function () {
  apiManager.geenrateRandomPeople();
  apiManager.generateQuote();
  apiManager.generatePokemon();
  apiManager.generateText();
});

$("#displayData").on("click", function () {
  const render = new Renderer(apiManager.data);
  // console.log(apiManager.data)
  render.renderResults();
});

