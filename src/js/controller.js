import * as model from './model.js';
import recipeView from './views/recipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

///////////////////////////////////////
// controllers
const controlRecipes = async function () {
  // get id form url
  const id = this.window.location.hash.slice(1);
  if (!id) return;
  // add loading spiner
  recipeView.renderSpinner();
  // get recipe data
  await model.loadRecipe(id);
  const recipe = model.state.recipe;
  // rendering recipe
  recipeView.render(recipe);
};

///////////////////////////////////
// Event listeners
['hashchange', 'load'].forEach(event =>
  window.addEventListener(event, controlRecipes)
);
