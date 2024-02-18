import BaseView from './baseView';
import previewView from './previewView';

class ResultsView extends BaseView {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again';
  _message = '';

  _generateMarkup() {
    return this._data
      .map(eachRecipeData => previewView.render(eachRecipeData, false))
      .join('');
  }
}

export default new ResultsView();
