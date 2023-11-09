import favoriteRestoDb from '../src/scripts/global/favorite-resto';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="like-Button-Container"></div>';
};

describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await favoriteRestoDb.putResto({id: 1});
  });

  afterEach(async () => {
    await favoriteRestoDb.deleteResto(1);
  });

  it('should display unlike widget when the resto has been liked', async () => {
    await TestFactories.createlikeButtonDeclarationWithResto({id: 1});

    expect(document.querySelector('[aria-label="unlike this resto"]'))
        .toBeTruthy();
  });

  it('should not display like widget when the resto has been liked', async () => {
    await TestFactories.createlikeButtonDeclarationWithResto({id: 1});

    expect(document.querySelector('[aria-label="like this resto"]'))
        .toBeFalsy();
  });

  it('should be able to remove liked resto from the list', async () => {
    await TestFactories.createlikeButtonDeclarationWithResto({id: 1});

    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));
    expect(await favoriteRestoDb.getAllResto()).toEqual([]);
  });

  it('should not throw error if the unliked resto is not in the list', async () => {
    await TestFactories.createlikeButtonDeclarationWithResto({id: 1});

    await favoriteRestoDb.deleteResto(1);

    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));

    expect(await favoriteRestoDb.getAllResto()).toEqual([]);
  });
});
