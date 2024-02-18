import { AJAX } from './helpers';
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

const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    cookingTime: recipe.cooking_time,
    id: recipe.id,
    imageUrl: recipe.image_url,
    ingredients: recipe.ingredients,
    publisher: recipe.publisher,
    servings: recipe.servings,
    sourceUrl: recipe.source_url,
    title: recipe.title,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(
      `${configData.API_URI}${id}?key=${configData.API_KEY}`
    );
    state.recipe = createRecipeObject(data);
    console.log(state.recipe);
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
    const data = await AJAX(
      `${configData.API_URI}?search=${query}&key=${configData.API_KEY}`
    );
    state.search.results = data.data.recipes.map(res => {
      return {
        id: res.id,
        imageUrl: res.image_url,
        publisher: res.publisher,
        title: res.title,
        ...(res.key && { key: res.key }),
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

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  // Add to bookmarks
  state.bookmarks.push(recipe);
  persistBookmarks();
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
};

export const removeBookmark = function (id) {
  const index = state.bookmarks.findIndex(el => el.id === id);
  // remove from bookmarks
  state.bookmarks.splice(index, 1);
  persistBookmarks();
  if (id === state.recipe.id) state.recipe.bookmarked = false;
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
  console.log(state.bookmarks);
};
init();

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ingr => {
        const ingrArr = ingr[1].replaceAll(' ', '').split(',');
        if (ingrArr.length !== 3)
          throw new Error('Wrong ingredient format, please use correct format');
        const [quantity, unit, description] = ingrArr;
        return {
          quantity: quantity ? Number(quantity) : null,
          unit,
          description,
        };
      });
    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };
    const data = await AJAX(
      `${configData.API_URI}?key=${configData.API_KEY}`,
      recipe
    );
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};
