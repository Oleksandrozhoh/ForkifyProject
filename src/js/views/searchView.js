import BaseView from './baseView';

class SearchView extends BaseView {
  _parentElement = document.querySelector('.search');
  _inputBox = document.querySelector('.search__field');

  addHandlerRender(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  getQuery() {
    const query = this._inputBox.value;
    this._clearInputBox();
    return query;
  }

  _clearInputBox() {
    this._inputBox.value = '';
  }
}

export default new SearchView();
