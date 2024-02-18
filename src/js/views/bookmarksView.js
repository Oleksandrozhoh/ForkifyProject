import BaseView from './baseView';
import previewView from './previewView.js';

class BookmarksView extends BaseView {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  _message = '';

  _generateMarkup() {
    return this._data
      .map(eachRecipeData => previewView.render(eachRecipeData, false))
      .join('');
  }

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
}
export default new BookmarksView();
