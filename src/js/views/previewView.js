import BaseView from './baseView';

class PreviewView extends BaseView {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  _message = '';

  _generateMarkup() {
    const urlId = window.location.hash.slice(1);
    return `<li class="preview">
    <a class="preview__link ${
      urlId === this._data.id ? `preview__link--active` : ``
    }" href="#${this._data.id}">
      <figure class="preview__fig">
        <img src="${this._data.imageUrl}" alt="${this._data.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${this._data.title}</h4>
        <p class="preview__publisher">${this._data.publisher}</p>
      </div>
    </a>
  </li>`;
  }
}

export default new PreviewView();
