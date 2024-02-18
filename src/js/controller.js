import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

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
    // update bookmarks
    bookmarksView.update(model.state.bookmarks);

    // add loading spiner
    recipeView.renderSpinner();

    // get recipe data
    await model.loadRecipe(id);
    const recipe = model.state.recipe;

    // rendering recipe
    recipeView.render(recipe);
  } catch (err) {
    console.error(err);
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
    resultsView.renderSpinner();
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
  // debugger;
  // add or remove bookmark
  console.log('control BM running');
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.removeBookmark(model.state.recipe.id);

  // update recipe view
  recipeView.render(model.state.recipe);

  // render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarksRender = function () {
  bookmarksView.render(model.state.bookmarks);
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarksRender);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlBookmarks);
  searchView.addHandlerRender(controlSearchResult);
  paginationView.addHandlerClick(controlPagination);
};
init();
