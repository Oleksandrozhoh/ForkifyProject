import { getJSON } from './helpers';
import configData from './config';
import 'regenerator-runtime/runtime';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${configData.API_URI}/${id}`);
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
    console.error(`${err} 😱😱😱`);
  }
};
