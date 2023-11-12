import likeButtonDeclaration from '../../src/scripts/utils/like-button-initiator';
import favoriteRestoDb from '../../src/scripts/global/favorite-resto';

const createlikeButtonDeclarationWithResto = async (resto) => {
  await likeButtonDeclaration.init({
    likeButtonContainer: document.querySelector('#like-Button-Container'),
    favoriteRestaurants: favoriteRestoDb,
    resto,
  });
};

export {createlikeButtonDeclarationWithResto};
