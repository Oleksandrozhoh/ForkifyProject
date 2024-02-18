import { getJSON } from './helpers';
import configData from './config';
import 'regenerator-runtime/runtime';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsPerPage: configData.RES_PER_PAGE,
    page: 1,
  },
  bookmarks: [],
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${configData.API_URI}${id}`);
    const recipe = data.data.recipe;
    state.recipe = {
      cookingTime: recipe.cooking_time,
      id: recipe.id,
      imageUrl: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      sourceUrl: recipe.source_url,
      title: recipe.title,
    };
    if (state.bookmarks.some(bookmark => bookmark.id === state.recipe.id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (err) {
    console.log(`${err.message}😱😱😱`);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  state.search.query = query;
  try {
    const data = await getJSON(
      `${configData.API_URI}?search=${query}&key=${configData.API_KEY}`
    );
    state.search.results = data.data.recipes.map(res => {
      return {
        id: res.id,
        imageUrl: res.image_url,
        publisher: res.publisher,
        title: res.title,
      };
    });
    state.search.page = 1;
  } catch (err) {
    console.log(`${err.message}😱😱😱`);
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  let beginIndex = (page - 1) * configData.RES_PER_PAGE;
  let endIndex = beginIndex + configData.RES_PER_PAGE;
  return state.search.results.slice(beginIndex, endIndex);
};

export const updateServings = function (newServings) {
  this.state.recipe.ingredients.forEach(ingr => {
    ingr.quantity = (ingr.quantity / state.recipe.servings) * newServings;
  });
  state.recipe.servings = newServings;
};

export const addBookmark = function (recipe) {
  // Add to bookmarks
  state.bookmarks.push(recipe);
  console.log(state.bookmarks);
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  console.log(recipe.id === state.recipe.id);
  console.log(state.recipe);
  console.log(state.bookmarks);
};

export const removeBookmark = function (id) {
  const index = state.bookmarks.findIndex(el => el.id === id);
  // remove from bookmarks
  state.bookmarks.splice(index, 1);
  if (id === state.recipe.id) state.recipe.bookmarked = false;
};
