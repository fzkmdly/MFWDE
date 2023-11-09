import favoriteRestoDb from '../global/favorite-resto';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../view/template/template-creator';

const likeButtonDeclaration = {
  async init({likeButtonContainer, resto}) {
    this._likeButtonCon = likeButtonContainer;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this.isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async isRestoExist(id) {
    const resto = await favoriteRestoDb.getResto(id);
    return !!resto;
  },

  _renderLike() {
    this._likeButtonCon.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await favoriteRestoDb.putResto(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonCon.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await favoriteRestoDb.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};

export default likeButtonDeclaration;
