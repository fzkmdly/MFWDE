import favoriteRestoDb from '../src/scripts/global/favorite-resto';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="like-Button-Container"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the resto has not been liked before', async () => {
    await TestFactories.createlikeButtonDeclarationWithResto({id: 1});

    expect(document.querySelector('[aria-label="like this resto"]'))
        .toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await TestFactories.createlikeButtonDeclarationWithResto({id: 1});

    expect(document.querySelector('[aria-label="unlike this resto"]'))
        .toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await TestFactories.createlikeButtonDeclarationWithResto({id: 1});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await favoriteRestoDb.getResto(1);

    expect(resto).toEqual({id: 1});

    favoriteRestoDb.deleteResto(1);
  });

  it('should not add a resto again when its already liked', async () => {
    await TestFactories.createlikeButtonDeclarationWithResto({id: 1});

    await favoriteRestoDb.putResto({id: 1});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await favoriteRestoDb.getAllResto()).toEqual([{id: 1}]);

    favoriteRestoDb.deleteResto(1);
  });

  it('should not add a resto when it has no id', async () => {
    await TestFactories.createlikeButtonDeclarationWithResto({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await favoriteRestoDb.getAllResto()).toEqual([]);
  });
});
