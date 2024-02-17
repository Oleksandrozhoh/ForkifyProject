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
