import BaseView from './baseView';

class AddRecipeView extends BaseView {
  _parentElement = document.querySelector('.upload');
  _addRecipeWindow = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpenForm = document.querySelector('.nav__btn--add-recipe');
  _btnCloseForm = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerCloseWindow();
  }

  _addHandlerShowWindow() {
    this._btnOpenForm.addEventListener(
      'click',
      this.toggleAddRecipeForm.bind(this)
    );
  }

  _addHandlerCloseWindow() {
    this._btnCloseForm.addEventListener(
      'click',
      this.toggleAddRecipeForm.bind(this)
    );
  }

  _addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArray = [...new FormData(this)];
      const data = Object.fromEntries(dataArray);
      handler(data);
    });
  }

  toggleAddRecipeForm() {
    this._addRecipeWindow.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
