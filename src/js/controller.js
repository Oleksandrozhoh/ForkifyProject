import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import retultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import resultsView from './views/resultsView.js';

// hot module replacement
if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async function () {
  try {
    // get id form url
    const id = this.window.location.hash.slice(1);
    if (!id) return;
    // update results view to mark selected recipe
    resultsView.update(model.getSearchResultsPage());
    // add loading spiner
    recipeView.renderSpinner();
    // get recipe data
    await model.loadRecipe(id);
    const recipe = model.state.recipe;
    // rendering recipe
    recipeView.render(recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResult = async function () {
  try {
    // get query
    const query = searchView.getQuery();
    if (!query) return;

    // instantiate search state field
    await model.loadSearchResults(query);

    // render pagination
    // render result
    retultsView.renderSpinner();
    resultsView.render(model.getSearchResultsPage());
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = async function (page) {
  // render pagination
  // render result
  retultsView.renderSpinner();
  resultsView.render(model.getSearchResultsPage(page));
  paginationView.render(model.state.search);
};

const controlServings = async function (newServings) {
  // update recipe servings
  model.updateServings(newServings);
  // render recipe view with new data
  const recipe = model.state.recipe;
  // recipeView.render(recipe);
  recipeView.update(recipe);
};

const controlBookmarks = function () {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.removeBookmark(model.state.recipe.id);
  console.log(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlBookmarks);
  searchView.addHandlerRender(controlSearchResult);
  paginationView.addHandlerClick(controlPagination);
};
init();
