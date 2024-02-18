import icons from 'url:../../img/icons.svg';

export default class BaseView {
  _parentElement;
  _data;

  render(recipeData) {
    // if no data
    if (!recipeData || (Array.isArray(recipeData) && recipeData.length === 0))
      return this.renderError();

    this._data = recipeData;
    const markup = this._generateMarkup();
    // console.log(markup);
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(recipeData) {
    this._data = recipeData;
    const newMarkup = this._generateMarkup();
    const newRecipeDOM = document
      .createRange()
      .createContextualFragment(newMarkup);
    const newElements = [...newRecipeDOM.querySelectorAll('*')];
    const currElements = [...this._parentElement.querySelectorAll('*')];
    newElements.forEach((newEl, i) => {
      const curEl = currElements[i];
      // updates changed TEXT
      if (
        !newEl.isEqualNode(curEl) && // comparing content
        newEl.firstChild?.nodeValue.trim() !== '' // selecting nodes with text content only
      )
        curEl.textContent = newEl.textContent;
      // updates changed datasets
      if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach(att => {
          // iterating through newEl attributes
          curEl.setAttribute(att.name, att.value); // set all curEl attributes to mach newEl attributes
        });
    });
  }

  renderSpinner() {
    const markup = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>`;
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(errMessage = this._errorMessage) {
    const markup = `<div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${errMessage}</p>
  </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `<div class="message">
    <div>
      <svg>
        <use href="${icons}#icon-smile"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
}
