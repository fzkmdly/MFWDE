import {itActsAsFavoriteRestoModel} from './contract/favoriteRestaurantContract';
import favoriteRestoDb from '../src/scripts/global/favorite-resto';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await favoriteRestoDb.getAllResto()).forEach(async (resto) => {
      await favoriteRestoDb.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(favoriteRestoDb);
});
