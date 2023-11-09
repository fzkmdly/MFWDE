import likeButtonDeclaration from '../src/scripts/utils/like-button-initiator';
import favoriteRestoDb from '../src/scripts/global/favorite-resto';

describe('Liking a restaurant', () => {
  it('Would show the like button when not liking one of the restaurant', async () => {
    document.body.innerHTML = '<div id="like-Button-Container"></div>';

    await likeButtonDeclaration.init({
      likeButtonContainer: document.querySelector('#like-Button-Container'),
      resto: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy();
  });

  it('Would show the like button when liking one of the restaurant', async () => {
    document.body.innerHTML = '<div id="like-Button-Container"></div>';

    await likeButtonDeclaration.init({
      likeButtonContainer: document.querySelector('#like-Button-Container'),
      resto: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this resto"]')).toBeFalsy();
  });


  it('Should Be Able to like this restaurant', async () => {
    document.body.innerHTML = '<div id="like-Button-Container"></div>';

    await likeButtonDeclaration.init({
      likeButtonContainer: document.querySelector('#like-Buttonn-Container'),
      resto: {
        id: 1,
      },
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const resto = await favoriteRestoDb.getResto(1);
    expect(resto).toEqual({id: 1});
  });
});
